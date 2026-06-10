import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { connectDB } from '../../../lib/mongodb'
import UserModel from '../../../models/User'
import { signToken } from '../../../lib/jwt'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, password } = await req.json()
    if (!name || !email || !phone || !password)
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    if (password.length < 6)
      return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 })

    await connectDB()

    const existing = await UserModel.findOne({ $or: [{ email }, { phone }] })
    if (existing) return NextResponse.json({ error: 'Account with this email or phone already exists' }, { status: 409 })

    const hashed = await bcrypt.hash(password, 10)
    const user = await UserModel.create({ name, email, phone, password: hashed, isVerified: false })

    const token = signToken({ id: user._id, name: user.name, email: user.email, phone })

    const res = NextResponse.json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email, phone }
    })

    res.cookies.set('uv_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })

    return res
  } catch (err: any) {
    console.error('Signup error:', err)
    return NextResponse.json({ error: 'Signup failed. Try again.' }, { status: 500 })
  }
}
