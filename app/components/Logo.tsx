import React, { useId } from 'react'

interface LogoProps {
  size?: number
  className?: string
  showText?: boolean
  variant?: 'icon' | 'full'
}

export default function Logo({ size = 40, className = '', showText = false, variant = 'icon' }: LogoProps) {
  const id = useId().replace(/:/g, '')

  // Professional SVG Logo
  return (
    <div className={`flex items-center gap-2.5 ${className}`} style={{ display: showText ? 'flex' : 'contents' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Circular Background */}
        <circle cx="30" cy="30" r="28" fill={`url(#grad_${id})`} />
        
        {/* Glossy Shine Effect */}
        <circle cx="30" cy="18" r="10" fill="rgba(255,255,255,0.15)" />
        
        {/* UV Letters - Centered and Professional */}
        <text 
          x="30" 
          y="38" 
          textAnchor="middle" 
          dominantBaseline="middle"
          fontSize="28"
          fontWeight="700"
          fill="white"
          fontFamily="'Cinzel', serif"
          letterSpacing="2"
        >
          UV
        </text>

        {/* Subtle Border */}
        <circle cx="30" cy="30" r="28" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

        <defs>
          <linearGradient id={`grad_${id}`} x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E53935" />
            <stop offset="50%" stopColor="#D32F2F" />
            <stop offset="100%" stopColor="#C62828" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-cinzel font-bold leading-none" style={{ fontSize: size * 0.4, color: '#1F2A1F' }}>
            UNIQUE
          </span>
          <span className="font-cinzel font-bold leading-none" style={{ fontSize: size * 0.35, color: '#0F6A3D' }}>
            VISIONS
          </span>
        </div>
      )}
    </div>
  )
}
