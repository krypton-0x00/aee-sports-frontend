import { TournamentType } from "@/types/FetchTournamentData";
import { atom } from "recoil";
 


export const tournamentAtom = atom<TournamentType[]>({
    key:"tournaments",
    default:[]
})
