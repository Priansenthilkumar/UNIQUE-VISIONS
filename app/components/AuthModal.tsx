'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { signIn, signOut } from 'next-auth/react'
import Logo from './Logo'

export default function AuthModal() {
  const { showAuthModal, closeAuth, user, logout, loading } = useAuth()

  const handleGoogleSignIn = async () => {
    await signIn('google', { redirect: false })
    closeAuth()
  }

  const handleLogout = async () => {
    await logout()
  }

  if (loading) return null

  return (
    <AnimatePresence>
      {showAuthModal && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={closeAuth}
            className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-full max-w-md bg-[#0d0d16] border border-white/10 rounded-3xl overflow-hidden relative"
              style={{ boxShadow: '0 0 80px rgba(209,0,0,0.12), 0 32px 80px rgba(0,0,0,0.7)' }}>

              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff]" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#ffffff] rounded-full opacity-[0.04] blur-[80px] pointer-events-none" />

              <button onClick={closeAuth} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all z-10">
                <X size={15} />
              </button>

              <div className="p-7">
                <div className="flex items-center gap-2.5 mb-5">
                  <Logo size={28} />
                  <span className="font-bebas text-base tracking-widest text-white">UNIQUE <span className="gradient-text">VISIONS</span></span>
                </div>

                {user ? (
                  <motion.div key="profile" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }} transition={{ duration: 0.18 }}>
                    <h2 className="font-oswald text-2xl font-bold text-white uppercase tracking-wide mb-1">Welcome!</h2>
                    <p className="font-dm text-white/35 text-xs mb-5">You are logged in</p>

                    <div className="space-y-4">
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex items-center gap-3">
                          {user.image && (
                            <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full" />
                          )}
                          <div>
                            <p className="font-syne font-bold text-white">{user.name}</p>
                            <p className="font-dm text-white/50 text-xs">{user.email}</p>
                          </div>
                        </div>
                      </div>

                      <motion.button
                        onClick={handleLogout}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3.5 rounded-xl font-syne font-bold text-white text-sm bg-red-600/20 border border-red-600/30 hover:bg-red-600/30 transition-all"
                      >
                        Logout
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="signin" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }} transition={{ duration: 0.18 }}>
                    <h2 className="font-oswald text-2xl font-bold text-white uppercase tracking-wide mb-1">Welcome Back</h2>
                    <p className="font-dm text-white/35 text-xs mb-6">Sign in with your Google account to continue.</p>

                    <motion.button
                      onClick={handleGoogleSignIn}
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary w-full py-3.5 rounded-xl font-syne font-bold text-white text-sm flex items-center justify-center gap-3 disabled:opacity-60"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor" />
                      </svg>
                      {loading ? 'Signing in...' : 'Sign in with Google'}
                    </motion.button>

                    <p className="text-center font-dm text-white/30 text-xs mt-6">
                      By signing in, you agree to our terms of service
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function Spinner() {
  return (
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
  )
}

function Divider() {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-px bg-white/8" />
      <span className="font-dm text-white/20 text-xs">or</span>
      <div className="flex-1 h-px bg-white/8" />
    </div>
  )
}

function GoogleBtn({ onClick, loading }: { onClick: () => void; loading: boolean }) {
  return (
    <motion.button onClick={onClick} disabled={loading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
      className="w-full py-3 rounded-xl border border-white/8 bg-white/4 hover:bg-white/8 transition-all font-dm text-white/70 text-sm flex items-center justify-center gap-3">
      <svg width="15" height="15" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      Continue with Google
    </motion.button>
  )
}
