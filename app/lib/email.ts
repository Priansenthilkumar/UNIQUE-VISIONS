import nodemailer from 'nodemailer'

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASSWORD!,
  },
})

export async function sendOTP(email: string, otp: string) {
  const mailOptions = {
    from: process.env.EMAIL_USER!,
    to: email,
    subject: 'Your Unique Visions OTP - Verify Your Email',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px; text-align: center;">
          <h1 style="color: white; margin: 0;">Unique Visions</h1>
        </div>
        
        <div style="padding: 30px; background-color: #f9f9f9; border-radius: 10px; margin-top: 20px;">
          <h2 style="color: #333;">Email Verification</h2>
          <p style="color: #666; font-size: 16px;">Thank you for signing up with <strong>Unique Visions</strong>!</p>
          
          <p style="color: #666; font-size: 16px;">Your OTP (One-Time Password) is:</p>
          
          <div style="background: white; border: 2px solid #667eea; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <p style="font-size: 36px; font-weight: bold; color: #667eea; letter-spacing: 5px; margin: 0;">${otp}</p>
          </div>
          
          <p style="color: #999; font-size: 14px;">
            <strong>This OTP will expire in 10 minutes.</strong><br>
            Do not share this code with anyone.
          </p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <p style="color: #666; font-size: 14px;">
            If you didn't request this OTP, please ignore this email.
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
          <p>© 2026 Unique Visions. All rights reserved.</p>
        </div>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}

export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}
