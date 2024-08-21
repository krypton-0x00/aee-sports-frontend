import dbConnect from "@/lib/database";
import { tourneyValidation } from "@/utils/validations ";
import { Tournament } from "@/models/tournament.model";
import { cloudinaryUpload } from "@/utils/cloudnary.util";
import { NextResponse } from "next/server";
import { Day } from "@/models/day.model";

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

  const slotsNumber = parseInt(slots as string, 10);
  const durationNumber = parseInt(duration as string, 10);

  if (isNaN(slotsNumber) || isNaN(durationNumber)) {
    return NextResponse.json(
      { message: "Failed to parse to number" },
      { status: 502 }
    );
  }

  const validate = tourneyValidation.safeParse({
    tournamentName,
    slots: slotsNumber,
    status,
    visibility,
    duration: durationNumber,
  });

  if (!validate.success) {
    console.log(validate.error.message);
    return NextResponse.json(
      { message: validate.error.message },
      { status: 400 }
    );
  }

  await dbConnect();
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

  const ceratedTournament = await Tournament.create({
    tournamentName,
    slots: slotsNumber,
    banner: bannerUrl,
    tournamentLogo: tournamentLogoUrl,
    duration: durationNumber,
    status,
    visibility,
  });

  if (!ceratedTournament) {
    return NextResponse.json(
      { message: "error making tournament" },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { body: ceratedTournament._id, message: "success" },
    { status: 200 }
  );
}

export async function GET() {
  await dbConnect();
  const tournaments = await Tournament.find();
  return NextResponse.json(
    { body: tournaments, message: "success" },
    { status: 200 }
  );
}
