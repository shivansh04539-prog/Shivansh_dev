import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory store (Use Redis for production)
// This must be exported so the verify-otp route can access it
// ✅ THIS IS THE FIX: Attach to global to survive Hot Reloads
const globalForOtp = global as unknown as { otpStore: Map<string, string> };

export const otpStore = globalForOtp.otpStore || new Map<string, string>();

if (process.env.NODE_ENV !== "production") globalForOtp.otpStore = otpStore;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // We expect the user's phone (to index the OTP) and email (to send it)
    const { phone, email } = body;

    if (!email || !phone) {
      return NextResponse.json(
        { success: false, message: "Email and Phone are required" },
        { status: 400 }
      );
    }

    // 1. Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // 2. Store it (Phone number is the key for verification)
    otpStore.set(phone, otp);

    // 3. Create transporter using YOUR specific credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail (sender)
        pass: process.env.GMAIL_PASS, // Your App Password
      },
    });

    // 4. Professional Blue-Themed Email details
    const mailOptions = {
      from: `"Bulbul Predictor" <${process.env.MY_GMAIL}>`,
      to: email, // The user's Gmail where OTP will go
      subject: "🚀 Verify Your Identity - Bulbul Predictor",
      html: `
        <div style="font-family: sans-serif; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px; max-width: 400px; margin: auto; background-color: #ffffff;">
          <h2 style="color: #2563eb; margin-bottom: 16px; text-align: center;">Hii! Please verify your number</h2>
          <p style="color: #475569; font-size: 14px; line-height: 1.6; text-align: center;">
            To ensure you are a genuine user and provide the best experience, please use the code below to verify your access.
          </p>
          <div style="background-color: #eff6ff; border: 1px dashed #2563eb; border-radius: 12px; padding: 20px; text-align: center; margin: 24px 0;">
            <span style="font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #1e40af;">${otp}</span>
          </div>
          <p style="color: #94a3b8; font-size: 12px; text-align: center;">This code will expire in 5 minutes. If you didn't request this, please ignore this email.</p>
          <div style="margin-top: 24px; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 16px;">
             <small style="color: #cbd5e1;">Secure Verification by Bulbul</small>
          </div>
        </div>
      `,
    };

    // 5. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: "OTP sent successfully to your Gmail" 
    });

  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send OTP" },
      { status: 500 }
    );
  }
}