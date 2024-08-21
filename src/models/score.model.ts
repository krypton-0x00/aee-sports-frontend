import mongoose, { Document, Model, Schema } from "mongoose";

interface iScoreSchema extends Document{
  tournamentId: mongoose.Types.ObjectId,
  teamId: mongoose.Types.ObjectId,
  day: number,
  kills: number,
  pPoints: number,
  wins: number,
  total: number
}

const scoreSchema: Schema<iScoreSchema> = new mongoose.Schema({
  tournamentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tournament",
    required: true,
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  kills: { type: Number, required: true },
  pPoints: { type: Number, required: true },
  wins: { type: Number, required: true },
  total: { type: Number, required: true },
});

export const Score:Model<iScoreSchema> = mongoose.models.Score || mongoose.model<iScoreSchema>("Score", scoreSchema);
