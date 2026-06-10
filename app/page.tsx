'use client'
import dynamic from 'next/dynamic'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Loader         = dynamic(() => import('./components/Loader'),         { ssr: false })
const ScrollProgress = dynamic(() => import('./components/ScrollProgress'), { ssr: false })
const WhatsAppButton = dynamic(() => import('./components/WhatsAppButton'), { ssr: false })

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <WhyUs />
        <Stats />
        <Pricing />
        <Contact />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
