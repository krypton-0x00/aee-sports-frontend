import { TournamentType } from "@/types/tournament.type";
import { atom } from "recoil";

export const tournamentAtom = atom<TournamentType[]>({
  key: "tournaments",
  default: [],
});
