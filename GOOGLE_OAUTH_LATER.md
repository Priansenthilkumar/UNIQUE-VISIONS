# Google OAuth Setup Guide (After Vercel Deployment)

## Why Set It Up Later?

Google OAuth requires:
1. ✅ Production domain (you'll get from Vercel)
2. ✅ HTTPS enabled (Vercel provides this automatically)
3. ✅ Correct redirect URIs configured in Google Cloud Console

**For now:** Your **Email OTP** authentication is complete and working! 🎉

---

## Steps to Add Google OAuth Later (After Deployment)

### 1. Deploy to Vercel
```bash
npm run build
# Push to GitHub
# Connect GitHub to Vercel
# Deploy
```

### 2. Get Your Vercel Domain
Your website will be at: `https://your-project.vercel.app`

### 3. Update Google Cloud Console
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Find your OAuth app
3. Go to **Credentials** → **OAuth 2.0 Client IDs**
4. Add your Vercel domain to **Authorized redirect URIs**:
   ```
   https://your-project.vercel.app/api/auth/callback/google
   https://your-custom-domain.com/api/auth/callback/google (if you have custom domain)
   ```

### 4. Add Google OAuth to Your Code
- We'll uncomment the NextAuth code
- Add Google Client ID & Secret to Vercel environment variables
- Update AuthModal to show "Sign in with Google" button

### 5. Update `.env` in Vercel
```
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=https://your-project.vercel.app
```

---

## For Now:

✅ **Email OTP is fully working**
- Users sign up with name + email
- Get OTP in their inbox  
- Verify → Logged in
- No passwords needed

**Ready to deploy!** 🚀
