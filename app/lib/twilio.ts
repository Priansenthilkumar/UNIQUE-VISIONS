import twilio from 'twilio'

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
)

export async function sendOTP(phone: string, otp: string) {
  await client.messages.create({
    body: `Your Unique Visions OTP is: ${otp}. Valid for 10 minutes. Do not share this with anyone.`,
    from: process.env.TWILIO_PHONE_NUMBER!,
    to: phone,
  })
}

export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}
