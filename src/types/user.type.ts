export interface User {
  id: string;
  name: string;
  email: string;
  tournaments: string[];
  tournamentCount: number;
  isVerified: boolean;
}
