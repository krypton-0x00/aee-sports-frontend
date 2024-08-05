import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
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
  dayId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Day",
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

export const Score = mongoose.model("Score", scoreSchema);
