import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat, Poppins, Cinzel, Playfair_Display, Space_Grotesk, DM_Sans, Cormorant_Garamond, Josefin_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['300','400','500','600','700','800'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300','400','500','600','700','800','900'], variable: '--font-montserrat' })
const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700','800'], variable: '--font-poppins' })
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400','600','700','900'], variable: '--font-cinzel' })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','500','600','700','800','900'], variable: '--font-playfair' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-space' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-dm' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant' })
const josefin = Josefin_Sans({ subsets: ['latin'], weight: ['100','200','300','400','600','700'], variable: '--font-josefin' })

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
  themeColor: '#ffffff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${montserrat.variable} ${poppins.variable} ${cinzel.variable} ${playfair.variable} ${spaceGrotesk.variable} ${dmSans.variable} ${cormorant.variable} ${josefin.variable}`}>
      <body className="bg-[#faf8f5] text-[#2a2a2a] font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
