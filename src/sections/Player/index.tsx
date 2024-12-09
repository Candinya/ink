import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

import { musicAtom, playerAtom } from "@/state/music.ts";
import {
  IconDots,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";

// 选项
const FREQ_BIN_COUNT = 256;

const Player = () => {
  const [{ isPending, isError }] = useAtom(musicAtom);
  const [playerState, setPlayerState] = useAtom(playerAtom);

  const canvasWrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cctx = useRef<CanvasRenderingContext2D | null>(null);
  const canvasSize = useRef<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioContext = useRef<AudioContext | null>(null);
  const audioAnalyser = useRef<AnalyserNode | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const flushEventId = useRef(0);

  const dataArray = useRef(new Uint8Array(FREQ_BIN_COUNT));

  const initCanvas = () => {
    canvasSize.current = {
      width: canvasWrapperRef.current!.clientWidth,
      height: canvasWrapperRef.current!.clientHeight,
    };

    canvasRef.current!.width = canvasSize.current.width;
    canvasRef.current!.height = canvasSize.current.height;

    cctx.current = canvasRef.current!.getContext("2d");
  };

  const initAudioAnalyser = () => {
    // 跨浏览器支持
    const AudioContextProvider = // @ts-ignore
      window.AudioContext || window.webkitAudioContext;

    audioContext.current = new AudioContextProvider();

    // 创建元素
    const source = audioContext.current!.createMediaElementSource(
      audioRef.current!,
    );
    audioAnalyser.current = audioContext.current!.createAnalyser();

    // 连接链路
    source.connect(audioAnalyser.current!);
    audioAnalyser.current.connect(audioContext.current!.destination);

    // 初始化分析器
    audioAnalyser.current.fftSize = FREQ_BIN_COUNT << 1;
  };

  const render = () => {
    // 获得频率数据
    audioAnalyser.current!.getByteFrequencyData(dataArray.current);

    // 清空 canvas
    cctx.current!.clearRect(
      0,
      0,
      canvasSize.current.width,
      canvasSize.current.height,
    );

    const barsCount = FREQ_BIN_COUNT * 0.9; // 极高频一般不会太多，空着又难看，就不要了
    const widthPerBin = canvasSize.current.width / barsCount;

    // 绘制频率数据
    for (let i = 0; i < barsCount; i++) {
      const currentDb = dataArray.current[i] / 256;
      cctx.current!.fillStyle = `hsl(${(i / barsCount) * 360}, 100%, 64%)`;
      cctx.current!.fillRect(
        widthPerBin * i,
        (1 - currentDb) * canvasSize.current.height,
        widthPerBin * 0.6,
        currentDb * canvasSize.current.height,
      );
    }

    // 请求下一帧（自循环）
    if (flushEventId.current !== 0) {
      requestAnimationFrame(render);
    }
  };

  const startStep = () => {
    if (flushEventId.current === 0) {
      flushEventId.current = requestAnimationFrame(render);
    }
  };

  const stopStep = () => {
    if (flushEventId.current !== 0) {
      cancelAnimationFrame(flushEventId.current);
      flushEventId.current = 0;
    }
  };

  const bindAudioEvents = () => {
    audioRef.current!.addEventListener("pause", () => {
      setIsPlaying(false);
      stopStep();
    });
    audioRef.current!.addEventListener("play", () => {
      setIsPlaying(true);
      startStep();
    });
    audioRef.current!.addEventListener("waiting", () => {
      setIsPlaying(false);
      setIsLoading(true);
    });
    audioRef.current!.addEventListener("playing", () => {
      setIsPlaying(true);
      setIsLoading(false);
    });
    audioRef.current!.addEventListener("canplay", () => {
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (!!playerState) {
      if (audioRef.current === null) {
        // 初始化音频组件
        audioRef.current = new Audio();
        audioRef.current.autoplay = false;
        audioRef.current.crossOrigin = "anonymous";
        audioRef.current.volume = 1.0;
        // 绑定事件
        bindAudioEvents();
        // 初始化其他组件
        initCanvas();
        initAudioAnalyser();
      }

      // 播放新的音乐
      audioRef.current.src = playerState.url;
      audioRef.current.play();
    }
  }, [playerState]);

  const togglePlay = () => {
    if (!!audioRef.current && !isLoading) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  if (isPending || isError) {
    // 不加载，什么都不显示
    return <></>;
  }

  return (
    <>
      {/*背景动态条*/}
      <div
        ref={canvasWrapperRef}
        className="fixed bottom-0 left-0 right-0 w-screen h-36 opacity-5 pointer-events-none"
      >
        <canvas ref={canvasRef} />
      </div>

      {/*播放器本体*/}
      <div className="fixed left-2 bottom-2 opacity-45 hover:opacity-100 transition-opacity duration-300">
        <div className="size-24 rounded-full bg-zinc-900 relative">
          {/*封面*/}
          <div
            className={`absolute w-full h-full p-1.5 overflow-clip ${
              isPlaying ? "animate-spin-player" : ""
            }`}
          >
            {playerState?.cover && (
              <img
                className="w-full h-full rounded-full"
                src={playerState.cover}
                alt={playerState?.name}
              />
            )}
          </div>

          {/*播放/停止按钮*/}
          <div className="absolute w-full h-full flex items-center justify-center text-white">
            <div
              className="bg-zinc-900 p-1.5 rounded-full cursor-pointer"
              onClick={togglePlay}
            >
              {isLoading ? (
                <IconDots className="animate-pulse" />
              ) : isPlaying ? (
                <IconPlayerPauseFilled />
              ) : (
                <IconPlayerPlayFilled />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
