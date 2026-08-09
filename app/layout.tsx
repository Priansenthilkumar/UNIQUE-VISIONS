import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Syne, Outfit } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

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
    <html lang="en" className={`scroll-smooth dark ${jakarta.variable} ${syne.variable} ${outfit.variable}`}>
      <body className={`${jakarta.className} bg-[#0B0304] text-[#FFFFFF] font-jakarta antialiased selection:bg-rose-500/40 selection:text-white`}>
        {children}
      </body>
    </html>
  )
}
