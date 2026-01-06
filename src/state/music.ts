import { atomWithQuery } from "jotai-tanstack-query";
import { atom } from "jotai";

export type MusicProps = {
  url: string;
  name: string;
  artist?: string;
  album?: string;
  cover?: string;
};

export const musicAtom = atomWithQuery<MusicProps[]>(() => ({
  queryKey: ["music"],
  queryFn: async () => {
    const res = await fetch(`https://music.candinya.xyz/index`);
    return await res.json();
  },
}));

export const playerStateAtom = atom<MusicProps | null>(null);
export const autoPlayAtom = atom(false);
