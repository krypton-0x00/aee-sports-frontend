import dbConnect from "@/lib/database";
import { Team } from "@/models/teams.model";
import { cloudinaryUpload } from "@/utils/cloudnary.util";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.formData();
  const { teamName, tournamentId, teamLogo } = Object.fromEntries(body);

  if (!teamName || !tournamentId || !teamLogo) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  await dbConnect();

  const presentTeam = await Team.find({
    $and: [{ teamName, tournamentId }],
  });

  if (presentTeam) {
    return NextResponse.json(
      { message: "Team already exists" },
      { status: 400 }
    );
  }

  const logourl = cloudinaryUpload(teamLogo as File);
  if (!logourl) {
    return NextResponse.json(
      { message: "Failed to upload image" },
      { status: 502 }
    );
  }

  const team = await Team.create({
    teamName,
    tournamentId,
    teamLogo: logourl,
  });

  if (!team) {
    return NextResponse.json(
      { message: "Failed to create team" },
      { status: 502 }
    );
  }

  return NextResponse.json(
    { body: team._id, message: "success" },
    { status: 200 }
  );
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  await dbConnect();
  const team = await Team.find({ id });
  if (!team) {
    return NextResponse.json({ message: "No teams avilable" });
  }
  return NextResponse.json(
    { body: team, message: "success on get req" },
    { status: 200 }
  );
}
