'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Logo from './Logo'

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + Math.random() * 15
        if (next >= 100) { clearInterval(interval); return 100 }
        return next
      })
    }, 120)
    const timer = setTimeout(() => setVisible(false), 2800)
    return () => { clearInterval(interval); clearTimeout(timer) }
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#141414]"
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] hero-shape rounded-full opacity-10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] hero-shape rounded-full opacity-[0.08] blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 relative z-10"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Logo size={52} />
              <h1 className="font-bebas text-5xl md:text-6xl tracking-widest gradient-text text-3d">
                UNIQUE VISIONS
              </h1>
            </div>
            <p className="font-syne text-sm tracking-[0.4em] text-[#aaa] uppercase">
              Digital Marketing Agency
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 w-64"
          >
            <div className="h-[1px] bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#333] via-[#fff] to-[#aaa] transition-all duration-100"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <p className="text-center text-[#bbb] text-xs font-dm mt-3 tracking-widest">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </motion.div>

          <div className="flex gap-2 mt-8 relative z-10">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#ffffff]"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
