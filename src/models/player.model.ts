import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true,
  },
  gameId: {
    type: String,
    required: true,
  },
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
  kills: {
    type: Number,
  },
});

export const Player = mongoose.model("Player", playerSchema);
