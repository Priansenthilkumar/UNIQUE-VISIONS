'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AuthUser {
  id: string
  name: string
  email: string
  image?: string
}

interface AuthContextType {
  user: AuthUser | null
  openAuth: () => void
  closeAuth: () => void
  logout: () => void
  authModalOpen: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [authModalOpen, setAuthModalOpen] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/me')
        if (res.ok) {
          const data = await res.json()
          setUser(data.user)
        }
      } catch (error) {
        console.error('Auth check failed:', error)
      }
    }
    checkAuth()
  }, [])

  const openAuth = () => setAuthModalOpen(true)
  const closeAuth = () => setAuthModalOpen(false)

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      setUser(null)
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, openAuth, closeAuth, logout, authModalOpen }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
