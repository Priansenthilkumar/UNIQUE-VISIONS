import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Unique Visions | Premium Digital Marketing Agency',
  description: 'We help brands grow through creative and result-driven digital marketing — social media management, content creation, video editing, and more.',
  keywords: 'digital marketing, social media management, content creation, video editing, reel editing, Instagram growth, Tamil Nadu, Rasipuram',
  authors: [{ name: 'Unique Visions' }],
  openGraph: {
    title: 'Unique Visions | Premium Digital Marketing Agency',
    description: 'Creative digital solutions that connect, engage, and convert.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unique Visions | Premium Digital Marketing Agency',
    description: 'Creative digital solutions that connect, engage, and convert.',
  },
}

export const viewport: Viewport = {
  themeColor: '#060d0a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@500;600;700;800&family=Outfit:wght@400;600;700&family=Playfair+Display:wght@600;700&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#060D0A] text-[#F1F5F9] font-jakarta antialiased selection:bg-emerald-500/30 selection:text-emerald-200">
        {children}
      </body>
    </html>
  )
}
