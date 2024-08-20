import mongoose, { Document, Model, Schema } from "mongoose";

interface ITournament extends Document {
  tournamentName: string;
  slots: number;
  banner?: string;
  tournamentLogo: string;
  status: "UPCOMING" | "ONGOING" | "COMPLETED";
  teams: mongoose.Types.ObjectId[];
  visibility: "HIDDEN" | "PUBLISHED";
  duration?: number; // in days
}

const tournamentSchema: Schema<ITournament> = new Schema({
  tournamentName: {
    type: String,
    required: true,
    unique: true,
  },
  slots: {
    type: Number,
    min: 2,
    max: 25,
    required: true,
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
    enum: ["UPCOMING", "ONGOING", "COMPLETED"],
    required: true,
  },
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Teams" }],
  visibility: {
    type: String,
    enum: ["HIDDEN", "PUBLISHED"],
    required: true,
  },
  duration: {
    type: Number, // in days
  },
});

export const Tournament: Model<ITournament> =
  mongoose.models.Tournament || mongoose.model<ITournament>("Tournament", tournamentSchema);
