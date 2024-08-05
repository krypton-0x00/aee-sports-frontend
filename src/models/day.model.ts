import mongoose from "mongoose";

const daySchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
  },
  tournamentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tournament",
    required: true,
  },
});

export const Day = mongoose.model("Day", daySchema);
