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
  themeColor: '#0B0304',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="bg-[#0B0304] text-[#FFFFFF] font-jakarta antialiased selection:bg-rose-500/40 selection:text-white">
        {children}
      </body>
    </html>
  )
}
