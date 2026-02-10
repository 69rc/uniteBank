import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
    try {
        // Generate a random 6-digit code
        const captchaCode = Math.floor(100000 + Math.random() * 900000).toString();

        const cookieStore = await cookies();

        // Set the captcha in a cookie with 5-minute expiry
        // In a real app, this should be encrypted or hashed
        cookieStore.set('captcha_code', captchaCode, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 300 // 5 minutes
        });

        return NextResponse.json({ code: captchaCode });
    } catch (err: any) {
        console.error("Captcha generation error:", err);
        return NextResponse.json({ message: "Failed to generate captcha" }, { status: 500 });
    }
}
