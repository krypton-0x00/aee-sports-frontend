import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
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
  dayId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Day",
    required: true,
  },
  kills: { type: Number, required: true },
  pPoints: { type: Number, required: true },
  wins: { type: Number, required: true },
  total: { type: Number, required: true },
});

export const Score = mongoose.model("Score", scoreSchema);
