export interface TournamentType {
    id: string;
    name: string;
    logo: string;
    orgName: string;
    game: "BGMI" | "VALORANT";
    slots: number;
    slotsLeft: number;
    unit: number;
    status: "UPCOMING" | "ONGOING" | "COMPLETED";
    visibility: "PUBLIC" | "HIDDEN";
    prizePool: number;
    prizePoolDisturbution: prizePoolDistributionType;
    registrationFee: number;
    userId: string;
    startDate: string;
    endDate: string;
  }
export interface prizePoolDistributionType {
  id : string;
  tournamentId : string;
  ist :number;
  second : number;
  third : number;
  forth? : number;
  mvp:number;
  pwmk?:number;
}
