import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { useAtom, useSetAtom } from "jotai";

import { playerStateAtom, autoPlayAtom } from "@/state/music.ts";
import type { MusicProps } from "@/state/music.ts";

interface MusicCardProps {
  music: MusicProps;
}
const MusicCard = ({ music }: MusicCardProps) => {
  const [playerMusic, setPlayerMusic] = useAtom(playerStateAtom);
  const setAutoPlayState = useSetAtom(autoPlayAtom);

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        setAutoPlayState(true);
        setPlayerMusic(music);
      }}
    >
      <div className="px-4 py-2 rounded-xl text-nowrap border-2 border-gray-600/30 dark:border-gray-300/20 bg-slate-200/60 dark:bg-slate-500/60 hover:bg-slate-300/60 dark:hover:bg-slate-600/60 transition-colors flex flex-row gap-2 items-center">
        <IconPlayerPlayFilled
          className={`size-4 ${
            playerMusic?.url === music.url ? "text-pink-300" : "text-yellow-300"
          }`}
        />
        <span>{music.name}</span>
      </div>
    </div>
  );
};

export default MusicCard;
