export interface TournamentType {
    id: string;
    name: string;
    logo: string;
    orgName: string;
    game: "BGMI" | "VALORANT";
    slots: number;
    unit: number;
    status: "UPCOMING" | "ONGOING" | "COMPLETED";
    visibility: "PUBLIC" | "HIDDEN";
    userId: string;
    startDate: string;
    endDate: string;
  }
