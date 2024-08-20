import mongoose, { Document, Model, Schema } from "mongoose";

interface iTeamSchema extends Document{
  teamName: string,
  tournamentId: mongoose.Types.ObjectId,
  teamLogo: string,
  players?: mongoose.Types.ObjectId[]
}

const teamSchema: Schema<iTeamSchema> = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },
  tournamentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tournament",
    required: true,
  },
  teamLogo: {
    type: String,
    required: true,
  },
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
});

export const Team:Model<iTeamSchema> = mongoose.models.Team || mongoose.model<iTeamSchema>("Team", teamSchema);
