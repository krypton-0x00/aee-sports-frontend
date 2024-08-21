import dbConnect from "@/lib/database";
import { Score } from "@/models/score.model";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  await dbConnect();
  const tournament = await Score.find({
    tournamentId: id,
  });
  return NextResponse.json({ message: tournament }, { status: 200 });
}
