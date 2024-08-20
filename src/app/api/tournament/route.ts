import { Tournament } from "@/models/tournament.model";
import { cloudinaryUpload } from "@/utils/cloudnary.util";
import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export async function POST(req: Request) {
  const body = await req.formData();

  const tournamentName = body.get("tournamentName");
  const slots = body.get("slots");
  const status = body.get("status");
  const tournamentLogo = body.get("tournamentLogo");
  const banner = body.get("banner");
  const visibility = body.get("visibility");
  const duration = body.get("duration");

  if (!tournamentName || !slots || !status || !visibility || !duration) {
    return NextResponse.json(
      { message: "message fields all are required" },
      { status: 400 }
    );
  }

  const isTournamentPresent = await Tournament.findOne({ tournamentName });
  if (isTournamentPresent) {
    return NextResponse.json(
      { message: "touranement already exist" },
      { status: 400 }
    );
  }

  let tournamentLogoUrl: string | undefined;
  let bannerUrl: string | undefined;
  if (tournamentLogo != null) {
    try {
      const tournamentLogoUpload = await cloudinaryUpload(
        tournamentLogo as File
      );
      tournamentLogoUrl = tournamentLogoUpload.url;
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: "error uploading file retry" },
        { status: 500 }
      );
    }
  }
  console.log(tournamentLogoUrl);

  if (banner != null) {
    try {
      const bannerUpload = await cloudinaryUpload(banner as File);
      bannerUrl = bannerUpload.url;
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: "error uploading file retry" },
        { status: 500 }
      );
    }
  }

  const tournament = await Tournament.create({
    tournamentName,
    slots,
    banner: bannerUrl,
    tournamentLogo: tournamentLogoUrl,
    duration,
    status,
    visibility,
  });
  console.log(tournament);

  if (!tournament) {
    return NextResponse.json(
      { message: "error making tournament" },
      { status: 400 }
    );
  }

  return NextResponse.json({ message: "success" });
}

export async function GET() {
  return NextResponse.json({ message: "success on get req" });
}
