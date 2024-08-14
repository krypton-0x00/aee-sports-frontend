import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

//get data from to create tournament
export async function POST(req: Request) {
  const body = await req.formData();
  console.log(body);
  const tournamentName = body.get("tournamentName");
  const slots = body.get("slots");
  const status = body.get("status");
  const tournamentLogo = body.get("tournamentLogo");
  const banner = body.get("banner");
  const visibility = body.get("visibility");
  const duration = body.get("duration");

  if (
    tournamentName === null
  ) {
    return NextResponse.json(
      { message: "message fields all are required" },
      { status: 400 }
    );
  }

  return NextResponse.json({ message: "success" });
}

export async function GET() {
  return NextResponse.json({ message: "success on get req" });
}
