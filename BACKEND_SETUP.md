# Backend Connection Setup Guide - Unique Visions

Your backend is well-structured! Follow these steps to fully connect it:

## 1. MongoDB Setup

### Option A: MongoDB Atlas (Cloud - Recommended)
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up/Log in
3. Create a new project
4. Build a Cluster (Free tier available)
5. Create a database user with username & password
6. Get connection string and update `.env.local`:

```
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/unique_visions?retryWrites=true&w=majority
```

### Option B: MongoDB Local
```
MONGODB_URI=mongodb://localhost:27017/unique_visions
```

---

## 2. Twilio Setup (for OTP SMS)

### Get Twilio Credentials:
1. Go to https://www.twilio.com
2. Sign up for a free trial account
3. Go to Console Dashboard
4. Find your **Account SID** and **Auth Token**
5. Get a Twilio phone number (+1XXXXXXXXXX)
6. Update `.env.local`:

```
TWILIO_ACCOUNT_SID=AC1234567890abcdef...
TWILIO_AUTH_TOKEN=abcdef1234567890...
TWILIO_PHONE_NUMBER=+12125551234
```

**Note:** Free tier has SMS rate limits. Make sure your phone number is verified in Twilio.

---

## 3. JWT Secret

Generate a strong random secret (minimum 32 characters):

```bash
# On Windows PowerShell:
[convert]::ToBase64String((1..32 | ForEach-Object {Get-Random -Maximum 256})) | Select-Object -First 1

# Or use: https://generate-random.org/ (copy 32+ random chars)
```

Update `.env.local`:
```
JWT_SECRET=your_very_long_random_string_min_32_chars
```

---

## 4. Backend API Endpoints Summary

All endpoints are in `app/api/auth/`:

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/auth/send-otp` | POST | Send OTP to phone |
| `/api/auth/verify-otp` | POST | Verify OTP & create/login user |
| `/api/auth/signup` | POST | Direct signup with password |
| `/api/auth/me` | GET | Get current user (from JWT cookie) |
| `/api/auth/logout` | POST | Clear authentication |

---

## 5. Start Development Server

```bash
npm run dev
```

The app will run on `http://localhost:3000`

---

## 6. Testing the Connection

1. Open http://localhost:3000
2. Click "Sign In" or "Sign Up"
3. Test OTP flow:
   - Enter a verified Twilio phone number (free trial: verify numbers first)
   - You should receive an SMS with OTP
   - Enter OTP to verify

4. Or test direct signup (if phone verification fails):
   - Use signup with email + password
   - No SMS required

---

## ✅ Checklist

- [ ] MongoDB URI is valid (test connection in code)
- [ ] JWT_SECRET is set (strong random string)
- [ ] Twilio credentials are added
- [ ] `.env.local` file is created
- [ ] Dev server starts without errors
- [ ] Auth modal appears on page
- [ ] OTP SMS sends successfully OR direct signup works

---

## Troubleshooting

### "MONGODB_URI is required"
- Check `.env.local` exists in project root
- Ensure MONGODB_URI line has no # comment
- Restart dev server after updating .env.local

### Twilio SMS not sending
- Check free trial phone number is verified
- Check account has enough credits
- Check TWILIO_PHONE_NUMBER is correct format (+1...)
- Check phone input normalizes to +91 for Indian numbers

### JWT verification fails
- Check JWT_SECRET is set and consistent
- Clear cookies and try again
- Check cookie is being set (inspect browser DevTools → Application → Cookies)

---

## Next Steps (Optional Enhancements)

1. Add Google OAuth integration
2. Add email verification
3. Add password reset flow
4. Add user profile management
5. Add order tracking system
