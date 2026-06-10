import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '../../../lib/mongodb'
import OTPModel from '../../../models/OTP'
import UserModel from '../../../models/User'
import { signToken } from '../../../lib/jwt'

export async function POST(req: NextRequest) {
  try {
    const { email, otp, name, phone } = await req.json()
    if (!email || !otp) return NextResponse.json({ error: 'Email and OTP are required' }, { status: 400 })

    const normalizedEmail = email.toLowerCase().trim()

    await connectDB()

    const record = await OTPModel.findOne({ email: normalizedEmail })
    if (!record) return NextResponse.json({ error: 'OTP expired or not found. Request a new one.' }, { status: 400 })
    if (record.otp !== otp) return NextResponse.json({ error: 'Incorrect OTP. Please try again.' }, { status: 400 })
    if (record.expiresAt < new Date()) return NextResponse.json({ error: 'OTP has expired. Request a new one.' }, { status: 400 })

    // Delete used OTP
    await OTPModel.deleteOne({ _id: record._id })

    // Find or create user
    let user = await UserModel.findOne({ email: normalizedEmail })
    if (!user) {
      if (!name) return NextResponse.json({ error: 'Name is required for new users' }, { status: 400 })
      user = await UserModel.create({ 
        name, 
        email: normalizedEmail, 
        phone: phone || '', 
        isVerified: true 
      })
    } else {
      user.isVerified = true
      if (name) user.name = name
      if (phone) user.phone = phone
      await user.save()
    }

    const token = signToken({ id: user._id, name: user.name, email: user.email, phone: user.phone })

    const res = NextResponse.json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email, phone: user.phone }
    })

    res.cookies.set('uv_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    return res
  } catch (err: any) {
    console.error('Verify OTP error:', err)
    return NextResponse.json({ error: 'Verification failed. Try again.' }, { status: 500 })
  }
}
