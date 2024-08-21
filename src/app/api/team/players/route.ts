import { Player } from "@/models/player.model";
import { Team } from "@/models/teams.model";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { playerName, gameId, teamName, tournamentId } = await req.json();

  if (!playerName || !gameId || !teamName || !tournamentId) {
    return NextResponse.json("All fields are required", { status: 400 });
  }

  const presentPlayer = await Player.findOne({
    $and: [{ playerName, teamName }],
  });

  if (presentPlayer) {
    return NextResponse.json("Player already exists", { status: 400 });
  }

  const player = await Player.create({
    playerName,
    gameId,
    teamName,
    tournamentId,
  });

  if (!player) {
    return NextResponse.json("Failed to create player", { status: 502 });
  }

  const pushPlayerToTeam = await Team.findByIdAndUpdate(teamName, {
    $push: { players: player._id },
  });

  if(!pushPlayerToTeam){
    return NextResponse.json("Failed to add player to team or team does not exist", { status: 502 });
  }

  return NextResponse.json(
    { message: "Player registered sucessfully" },
    { status: 200 }
  );
}

export async function GET() {
  return new Response("Hello from your server", { status: 200 });
}
