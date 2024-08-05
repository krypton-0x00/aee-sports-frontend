import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema({
  tournamentName: {
    type: String,
    required: true,
    unique: true,
  },
  slots: {
    type: Number,
    min: 2,
    max: 25,
  },
  banner: {
    type: String,
  },
  tournamentLogo: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["UPCOMING,ONGOING,COMPLETED"],
  },

  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Teams" }],

  visibility: {
    type: String,
    enum: ["HIDDEN", "PUBLISHED"],
  },
  duration: {
    type: Number, //in days
  },
});

export const Tournament = mongoose.model("Tournament", tournamentSchema);
