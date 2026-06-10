import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '../../../lib/mongodb'
import OTPModel from '../../../models/OTP'
import { sendOTP, generateOTP } from '../../../lib/email'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    if (!email) return NextResponse.json({ error: 'Email is required' }, { status: 400 })

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    const normalizedEmail = email.toLowerCase().trim()
    console.log('Sending OTP to email:', normalizedEmail)

    await connectDB()

    // Delete any existing OTP for this email
    await OTPModel.deleteMany({ email: normalizedEmail })

    const otp = generateOTP()
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes

    await OTPModel.create({ email: normalizedEmail, otp, expiresAt })
    console.log('OTP saved to database:', otp)
    
    await sendOTP(normalizedEmail, otp)
    console.log('OTP sent via email')

    return NextResponse.json({ success: true, message: 'OTP sent successfully to your email' })
  } catch (err: any) {
    console.error('Send OTP error:', err.message)
    console.error('Full error:', err)
    return NextResponse.json({ error: `Failed to send OTP: ${err.message}` }, { status: 500 })
  }
}
