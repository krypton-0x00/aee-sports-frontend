import { NextResponse } from "next/server";

export async function POST(req:Request){
    const body = await req.json();
    console.log(body)
    return NextResponse.json({message:"success"})
}

export async function GET(){

  return NextResponse.json({message:"success on get req"})
}