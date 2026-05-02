import { NextResponse } from "next/server";
import { otpStore } from "../send-otp/route";

import User from "@/models/User";
import dbConnect from "@/lib/db";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { phone, email, otp, state, district } = await req.json();

    const storedOtp = otpStore.get(phone);

    if (storedOtp && storedOtp === otp) {
      otpStore.delete(phone);

      // Check if user already exists
      const existingUser = await User.findOne({ phone });
      
      if (!existingUser) {
        // Only create if they don't exist
        await User.create({
          phone,
          email,
          state,
          district
        });
      }

      return NextResponse.json({ success: true, message: "Verified and Saved!" });
    }

    return NextResponse.json({ success: false, message: "Invalid OTP" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}