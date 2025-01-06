import { NextRequest, NextResponse } from "next/server";

export const GET = async(req: NextRequest): Promise<NextResponse> => {
  return NextResponse.json({ message: "Hello, World!" });
}