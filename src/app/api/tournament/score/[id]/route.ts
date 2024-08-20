import dbConnect from "@/lib/database";
import { Tournament } from "@/models/tournament.model";
// import {useRouter } from "next/navigation";
import { NextResponse } from "next/server";

// const router = useRouter();
// const id = router.
export async function POST(req:Request,res:Response) {
    const body = await req.body
    console.log(body);
    
    return NextResponse.json({ message: "success" });
}

export async function GET({ params }: { params: { id: string } }){
  const { id } = params;
  dbConnect();
  const tournament = Tournament.findOne({tournamentName:id})
  return NextResponse.json({message:tournament}, {status:200})
}