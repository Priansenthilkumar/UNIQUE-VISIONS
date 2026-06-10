'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface AuthUser {
  id: string
  name: string
  email: string
  image?: string
}

interface AuthContextType {
  user: AuthUser | null
  loading: boolean
  showAuthModal: boolean
  pendingAction: (() => void) | null
  openAuth: (callback?: () => void) => void
  closeAuth: () => void
  setUser: (user: AuthUser | null) => void
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null)

  // Check session on mount
  useEffect(() => {
    fetch('/api/auth/me')
      .then(r => r.json())
      .then(data => { if (data.user) setUser(data.user) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const openAuth = (callback?: () => void) => {
    setPendingAction(callback ? () => callback : null)
    setShowAuthModal(true)
  }

  const closeAuth = () => {
    setShowAuthModal(false)
    setPendingAction(null)
  }

  const handleSetUser = (userData: AuthUser | null) => {
    setUser(userData)
    setShowAuthModal(false)
    if (userData && pendingAction) {
      setTimeout(() => { pendingAction() }, 300)
      setPendingAction(null)
    }
  }

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, showAuthModal, pendingAction, openAuth, closeAuth, setUser: handleSetUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
