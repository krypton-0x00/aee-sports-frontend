import dbConnect from "@/lib/database";
import { Score } from "@/models/score.model";
import { NextApiRequest } from "next";
import { NextApiRequestQuery } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

interface iPostScore extends Request {
  tournamentId: string;
  teamId: string;
  day: number;
  kills: number;
  pPoints: number;
  wins: number;
  total: number;
}

//there is no way to get team id now

export async function POST(req: iPostScore) {
  const { tournamentId, teamId, day, kills, pPoints, wins, total } =
    await req.json();

  if (
    !tournamentId ||
    !teamId ||
    !day ||
    !kills ||
    !pPoints ||
    !wins ||
    !total
  ) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  await dbConnect();

  const presentScore = await Score.findOneAndUpdate(
    {
      $and: [
        {
          tournamentId,
        },
        { day },
      ],
    },
    {
      tournamentId,
      teamId,
      day,
      kills,
      pPoints,
      wins,
      total,
    }
  );

  if (!presentScore) {
    const createdScore = await Score.create({
      tournamentId: tournamentId,
      teamId,
      day,
      kills,
      pPoints,
      wins,
      total,
    });

    if (!createdScore) {
      return NextResponse.json(
        { message: "Failed to create score" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ message: "success" });
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const url = new URL(req.url);

  const day = url.searchParams.get("day");

  if(!day){
    return NextResponse.json({ message: "day is required" }, { status: 400 });
  }

  await dbConnect();
  const tournament = await Score.findOne({
    tournamentId: id,
    day: +day,
  });
  return NextResponse.json({ Body: tournament?.toJSON() }, { status: 200 });
}
