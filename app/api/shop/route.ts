import dbConnect from "@/lib/dbConnect";
import { Group } from "@/models/users";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("database connecting");
  dbConnect();
  console.log(await Group.find());
  console.log("database connected");
  return NextResponse.json({ hi: "by" }, { status: 200 });
}
