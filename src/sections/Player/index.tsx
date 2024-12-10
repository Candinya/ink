import { useAtom } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  IconDots,
  IconListNumbers,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconX,
} from "@tabler/icons-react";

import { musicAtom, playerStateAtom, autoPlayAtom } from "@/state/music.ts";

// 频谱处理动效部分参考 https://github.com/Candinya/auviz_vue/blob/main/src/components/Viz.vue

// 选项
const FREQ_BIN_COUNT = 256;

const Player = () => {
  const [{ data: allMusic, isPending, isError }] = useAtom(musicAtom);
  const [playerState, setPlayerState] = useAtom(playerStateAtom);
  const [autoPlayState, setAutoPlayState] = useAtom(autoPlayAtom);

  const canvasWrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasContext = useRef<CanvasRenderingContext2D | null>(null);
  const canvasSize = useRef<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioAnalyser = useRef<AnalyserNode | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowingMusicList, setIsShowingMusicList] = useState(false);

  const flushEventId = useRef(0);

  const dataArray = useRef(new Uint8Array(FREQ_BIN_COUNT));

  const initCanvas = () => {
    canvasSize.current = {
      width: canvasWrapperRef.current!.clientWidth,
      height: canvasWrapperRef.current!.clientHeight,
    };

    canvasRef.current!.width = canvasSize.current.width;
    canvasRef.current!.height = canvasSize.current.height;

    canvasContext.current = canvasRef.current!.getContext("2d");
  };

  const initAudioAnalyser = () => {
    // 跨浏览器支持
    const AudioContextProvider = // @ts-ignore
      window.AudioContext || window.webkitAudioContext;

    const audioContext = new AudioContextProvider();

    // 创建元素
    const source = audioContext.createMediaElementSource(audioRef.current!);
    audioAnalyser.current = audioContext.createAnalyser();

    // 连接链路
    source.connect(audioAnalyser.current!);
    audioAnalyser.current.connect(audioContext.destination);

    // 初始化分析器
    audioAnalyser.current.fftSize = FREQ_BIN_COUNT << 1; // 奈奎斯特采样定律
  };

  const render = () => {
    // 获得频率数据
    audioAnalyser.current!.getByteFrequencyData(dataArray.current);

    // 清空 canvas
    canvasContext.current!.clearRect(
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
      canvasContext.current!.fillStyle = `hsl(${(i / barsCount) * 360}, 100%, 64%)`;
      canvasContext.current!.fillRect(
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

  // 切换下一首
  const playNext = useAtomCallback(
    useCallback((get) => {
      const { data: currAllMusic } = get(musicAtom);
      const currPlayerState = get(playerStateAtom);
      if (currAllMusic && currPlayerState) {
        const currIndex = currAllMusic.findIndex(
          (m) => m.url === currPlayerState.url,
        );
        if (currIndex >= 0) {
          let nextIndex = currIndex + 1;
          if (nextIndex >= currAllMusic.length) {
            nextIndex = 0; // 回到第一首
            setAutoPlayState(false); // 避免循环
          } else {
            setAutoPlayState(true); // 自动续播
          }

          // 切换
          setPlayerState(currAllMusic[nextIndex]);
        } // 否则我也不知道发生了什么（播放了一首不在歌单里的音乐？）
      }
    }, []),
  );

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
    audioRef.current!.addEventListener("ended", playNext);
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
      if (autoPlayState) {
        audioRef.current.play();
      }
    }
  }, [playerState]);

  const togglePlay = () => {
    if (!audioRef.current) {
      // 尚未初始化，则播放第一首
      if (allMusic?.length) {
        setAutoPlayState(true);
        setPlayerState(allMusic[0]);
      }
    } else if (!isLoading) {
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
        className="fixed bottom-0 left-0 right-0 w-screen h-36 opacity-20 dark:opacity-5 pointer-events-none"
      >
        <canvas ref={canvasRef} />
      </div>

      {/*播放器本体*/}
      <div className="fixed left-2 bottom-2 group select-none z-20">
        <div className="size-24 rounded-full bg-gray-200 dark:bg-zinc-900 relative opacity-45 group-hover:opacity-100 transition-opacity duration-300 delay-700 group-hover:delay-0">
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
          <div className="absolute w-full h-full flex items-center justify-center">
            <div
              className="bg-gray-200 dark:bg-zinc-900 p-1.5 rounded-full cursor-pointer"
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

        {/*歌单管理按钮*/}
        <div
          className={`bg-gray-200 dark:bg-zinc-900 p-1.5 absolute -top-2 -right-2 transition-opacity duration-300 rounded-full cursor-pointer ${
            isShowingMusicList ? "" : "opacity-0 group-hover:opacity-100"
          }`}
          onClick={() => setIsShowingMusicList(!isShowingMusicList)}
        >
          {isShowingMusicList ? (
            <IconX className="size-3" />
          ) : (
            <IconListNumbers className="size-3" />
          )}
        </div>

        {/*歌单*/}
        <AnimatePresence>
          {isShowingMusicList && (
            <motion.div
              className="absolute bottom-24 left-24 bg-gray-200 dark:bg-zinc-900 w-96 max-h-72 overflow-y-auto p-2 rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="w-full">
                <ul className="divide-y divide-gray-500/60">
                  {allMusic.map((music) => (
                    <li
                      key={music.url}
                      className={`flex flex-row justify-between items-center cursor-pointer hover:bg-sky-500/30 transition-colors duration-300 px-2 py-1 ${
                        playerState?.url === music.url ? "bg-pink-500/30" : ""
                      }`}
                      onClick={() => {
                        setAutoPlayState(true);
                        setPlayerState(music);
                      }}
                    >
                      <span className="text-sm flex flex-row gap-1.5 items-center">
                        {playerState?.url === music.url && (
                          <IconPlayerPlayFilled className="size-3" />
                        )}
                        {music.name}
                      </span>
                      <span className="text-xs text-right font-light text-gray-400">
                        {music.artist}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Player;
