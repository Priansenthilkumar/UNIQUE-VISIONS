import mongoose, { Schema, Document } from 'mongoose'

export interface IOTP extends Document {
  email: string
  otp: string
  expiresAt: Date
}

const OTPSchema = new Schema<IOTP>({
  email:     { type: String, required: true },
  otp:       { type: String, required: true },
  expiresAt: { type: Date, required: true, index: { expires: 0 } },
})

export default mongoose.models.OTP || mongoose.model<IOTP>('OTP', OTPSchema)
