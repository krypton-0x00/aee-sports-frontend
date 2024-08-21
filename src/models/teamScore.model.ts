import mongoose, { Document, Model, Schema } from "mongoose";

interface iScoreSchema extends Document{
  teamId: mongoose.Types.ObjectId,
  tournamentId: mongoose.Types.ObjectId,
  day : number,
  player1Kills?: number,
  player2Kills?: number,
  player3Kills?: number,
  player4Kills?: number,
  player5Kills?: number,
  player6Kills?: number,
  totalTeamKills?:number,
  placementPoints?: number,
  wins?: number,
  totalPoints?: number
}

const scoreSchema: Schema<iScoreSchema> = new Schema({
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },
  tournamentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tournament",
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  player1Kills: { type: Number, default: 0 },
  player2Kills: { type: Number, default: 0 },
  player3Kills: { type: Number, default: 0 },
  player4Kills: { type: Number, default: 0 },
  player5Kills: { type: Number, default: 0 },
  player6Kills: { type: Number, default: 0 },

  totalTeamKills: {
    type: Number,
    default: 0,
  },
  placementPoints: {
    type: Number,
    default: 0,
  },
  wins: {
    type: Number,
    default: 0,
  },
  totalPoints: {
    type: Number,
    default: 0,
  },
});

export const TeamScore: Model<iScoreSchema> = mongoose.models.Score ||  mongoose.model<iScoreSchema>("Score", scoreSchema);
