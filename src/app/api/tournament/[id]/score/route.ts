import { NextResponse } from "next/server";

export async function POST(req:Request,res:Response) {
    const body = await req.body
    console.log(body);
    
    return NextResponse.json({ message: "success" });
}

export async function GET(){

  return NextResponse.json({message:"success on get req"})
}