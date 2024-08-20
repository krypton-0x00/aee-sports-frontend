import mongoose, { Document, Model, Schema } from "mongoose";

interface iDaySchema extends Document{
  day: number,
  tournamentId: mongoose.Types.ObjectId
}

const daySchema: Schema<iDaySchema> = new mongoose.Schema({
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

export const Day:Model<iDaySchema> = mongoose.models.Day || mongoose.model<iDaySchema>("Day", daySchema);
