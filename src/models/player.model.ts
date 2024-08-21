import mongoose, { Document, Model, Schema } from "mongoose";
import { string } from "zod";

interface iPlayerSchema extends Document{
  playerName: string,
  gameId: string,
  teamName: string,
  tournamentId: mongoose.Types.ObjectId,
  kills?: number
}

const playerSchema:Schema<iPlayerSchema> = new mongoose.Schema({
  playerName: {
    type: String,
    required: true,
  },
  gameId: {
    type: String,
    required: true,
  },
  teamName: {
    type: String,
    required: true,
  },
  tournamentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tournament",
    required: true,
  },
  kills: {
    type: Number,
  },
});

export const Player:Model<iPlayerSchema> = mongoose.models.Player || mongoose.model<iPlayerSchema>("Player", playerSchema);
