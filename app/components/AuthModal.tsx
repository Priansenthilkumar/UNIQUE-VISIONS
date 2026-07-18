'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Lock, User, Phone } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function AuthModal() {
  const { authModalOpen, closeAuth } = useAuth()
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/signup'
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        closeAuth()
        window.location.reload()
      } else {
        alert('Authentication failed')
      }
    } catch (error) {
      alert('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {authModalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={closeAuth}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 flex items-center justify-center z-[101] p-4"
          >
            <div className="card-premium max-w-md w-full p-8 relative">
              <button
                onClick={closeAuth}
                className="absolute top-4 right-4 text-text-muted hover:text-text"
              >
                <X size={24} />
              </button>

              <h2 className="font-cinzel font-bold text-3xl gradient-text mb-2">
                {mode === 'login' ? 'Welcome Back' : 'Get Started'}
              </h2>
              <p className="text-text-muted mb-6">
                {mode === 'login' ? 'Login to your account' : 'Create your account'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'signup' && (
                  <>
                    <div>
                      <label className="text-sm font-medium text-text-muted block mb-2">Name</label>
                      <div className="relative">
                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-subtle" />
                        <input
                          type="text"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          className="input-field w-full pl-11"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-text-muted block mb-2">Phone</label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-subtle" />
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          className="input-field w-full pl-11"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                  </>
                )}
                <div>
                  <label className="text-sm font-medium text-text-muted block mb-2">Email</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-subtle" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="input-field w-full pl-11"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-text-muted block mb-2">Password</label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-subtle" />
                    <input
                      type="password"
                      value={form.password}
                      onChange={e => setForm({ ...form, password: e.target.value })}
                      className="input-field w-full pl-11"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-3 rounded-xl font-semibold disabled:opacity-50"
                >
                  {loading ? 'Processing...' : mode === 'login' ? 'Login' : 'Sign Up'}
                </button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                  className="text-sm text-text-muted hover:text-primary"
                >
                  {mode === 'login' ? "Don't have an account? Sign up" : 'Already have an account? Login'}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
