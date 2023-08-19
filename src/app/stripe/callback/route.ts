import type { NextRequest } from "next/server";
import { stripe } from "@/lib/utils/stripe";
import { NextResponse } from "next/server";

export const GET = async(request: NextRequest): Promise<NextResponse> => {
  const requestUrl = new URL(request.url);
  const sessionId = requestUrl.searchParams.get("session_id");

  if (sessionId) {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.status !== "complete" || session.payment_status !== "paid") return NextResponse.redirect(requestUrl.origin);

    console.log("Payment complete", session);
  }

  return NextResponse.redirect(requestUrl.origin);
};