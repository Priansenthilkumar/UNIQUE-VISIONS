import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat, Poppins, Cinzel } from 'next/font/google'
import './globals.css'
import { AuthProvider } from './context/AuthContext'
import AuthModal from './components/AuthModal'

const inter = Inter({ subsets: ['latin'], weight: ['300','400','500','600','700','800'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300','400','500','600','700','800','900'], variable: '--font-montserrat' })
const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700','800'], variable: '--font-poppins' })
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400','600','700','900'], variable: '--font-cinzel' })

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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${montserrat.variable} ${poppins.variable} ${cinzel.variable}`}>
      <body className="bg-[#0a0a0a] text-[#f8f8f8] font-inter antialiased">
        <AuthProvider>
          {children}
          <AuthModal />
        </AuthProvider>
      </body>
    </html>
  )
}
