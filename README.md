# UNIQUE VISIONS — Premium Digital Marketing Agency Website

A fully production-ready, premium eco-friendly digital marketing agency website built with Next.js 14, React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Next.js 14** — App Router, SSR, SEO optimized
- **React 18** — Latest React with hooks
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Premium animations
- **Lucide React** — Beautiful icons
- **MongoDB** — Database for user authentication
- **NextAuth.js** — Authentication system

## ✨ Features

- Custom animated cursor with ring effect
- Scroll progress bar
- Premium loading screen with progress counter
- Animated particle background with canvas
- Glassmorphism cards throughout
- Infinite testimonial marquee slider
- Animated statistics counters
- Floating WhatsApp button
- Sticky glass navbar with mobile sidebar
- Scroll reveal animations on all sections
- User authentication (Login/Signup)
- Contact form with validation
- Reviews system
- Help/FAQ section
- Order placement system
- Fully responsive (mobile, tablet, desktop)
- SEO optimized metadata

## 📁 Project Structure

```
/app
  /api
    /auth              — Authentication endpoints
  /components
    Cursor.tsx          — Custom animated cursor
    ScrollProgress.tsx  — Scroll progress bar
    Loader.tsx          — Premium loading screen
    ParticleBackground.tsx — Canvas particle system
    Navbar.tsx          — Sticky glass navbar
    Hero.tsx            — Hero section with stats
    Marquee.tsx         — Scrolling decorative strip
    About.tsx           — About + Timeline section
    Services.tsx        — Service cards grid
    WhyUs.tsx           — Why choose us cards
    Stats.tsx           — Animated counters
    Testimonials.tsx    — Client testimonials
    Pricing.tsx         — Pricing cards
    Contact.tsx         — Contact form
    Footer.tsx          — Premium footer
    WhatsAppButton.tsx  — Floating WhatsApp CTA
    AuthModal.tsx       — Login/Signup modal
    Logo.tsx            — Brand logo component
  /context
    AuthContext.tsx     — Authentication state management
  /lib                  — Utility functions
  /models               — Database models
  globals.css           — Global styles + animations
  layout.tsx            — Root layout with metadata
  page.tsx              — Main page composition
  /order                — Order page
  /reviews              — Reviews page
  /help                 — Help/FAQ page
/public/assets          — Static assets
```

## 🎨 Design System (Leafora Brand)

| Token | Value |
|-------|-------|
| Primary Green | `#0F6A3D` |
| Secondary Green | `#2E8B57` |
| Background Cream | `#F5F0E1` |
| Light Sage | `#D8E2C8` |
| Dark Text | `#1F2A1F` |
| Font Heading | Cinzel |
| Font UI | Syne |
| Font Body | Poppins |

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Create environment file
# Copy .env.example to .env.local and add your credentials

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📞 Contact

- **Phone:** +91 9363964142
- **Email:** Uniquevisions111@gmail.com
- **Location:** Rasipuram, Tamil Nadu

## 📄 License

© 2025 Unique Visions. All rights reserved.

---

**Built with ❤️ using Next.js and Leafora Brand Identity**
