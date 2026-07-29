'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Logo from './Logo'

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setVisible(false), 400)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted || !visible) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#060D0A] pointer-events-none"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <Logo size={44} showText={true} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
