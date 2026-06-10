# Email OTP Setup Guide

Your authentication system is now using **Email OTP instead of Twilio SMS**! 🎉

## Setup Instructions

### 1. Gmail Configuration (Recommended)

#### Option A: Using Gmail App Password (Easiest)

1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. **Enable 2-Step Verification** if not already enabled
3. Go back to Security settings
4. Find **App passwords** (appears only after 2FA is enabled)
5. Select **Mail** and **Windows Computer**
6. Google will generate a 16-character app password
7. Copy that password and add to `.env.local`:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password-here
```

#### Option B: Using Gmail Regular Password (Less Secure)

1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Find **Less secure app access** 
3. Enable it
4. Use your regular Gmail password:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-password
```

### 2. Other Email Providers

You can also use other SMTP services. Update `app/lib/email.ts`:

**For Outlook/Hotmail:**
```typescript
service: 'outlook',
auth: {
  user: 'your-email@outlook.com',
  pass: 'your-password',
}
```

**For Custom SMTP:**
```typescript
const transporter = nodemailer.createTransport({
  host: 'smtp.yourprovider.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email',
    pass: 'your-password',
  },
})
```

## Testing

1. **Update `.env.local` with your Gmail credentials**
2. **Restart dev server**: `npm run dev`
3. **Open http://localhost:3000**
4. **Click "Sign In"**
5. **Enter your email address**
6. **You should receive an OTP in your email!**

## Troubleshooting

### "EAUTH Error - Invalid Credentials"
- Check EMAIL_USER and EMAIL_PASSWORD are correct
- If using 2FA, make sure you're using an **App Password**, not your regular password
- Restart the dev server after updating `.env.local`

### "Authentication failed"
- Enable "Less secure app access" in Gmail settings
- Or generate a new App Password if using 2FA

### Email not received
- Check spam/junk folder
- Verify EMAIL_USER is correct
- Check server logs for errors

## Security Notes

✅ **Do's:**
- Use Gmail App Password (not regular password)
- Keep `.env.local` in `.gitignore`
- Use secure email for production

❌ **Don'ts:**
- Don't hardcode email credentials in code
- Don't commit `.env.local` to Git
- Don't use test accounts in production

## What Changed

| Before (Twilio) | After (Email) |
|---|---|
| OTP sent via SMS | OTP sent via Email |
| Required phone number | Uses email address |
| Twilio account needed | Gmail/SMTP account needed |
| More expensive | Free (with Gmail) |

## Next Steps

- Users enter email → OTP sent to inbox
- User enters 6-digit code from email
- User is logged in/registered
- Fully functional! 🚀
