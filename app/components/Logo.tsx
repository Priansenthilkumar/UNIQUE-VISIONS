import React, { useId } from 'react'

interface LogoProps {
  size?: number
  className?: string
  showText?: boolean
  variant?: 'icon' | 'full'
}

export default function Logo({ size = 40, className = '', showText = false, variant = 'icon' }: LogoProps) {
  const id = useId().replace(/:/g, '')

  return (
    <div className={`flex items-center gap-3 ${className}`} style={{ display: showText ? 'flex' : 'contents' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        {/* Glow backdrop */}
        <circle cx="30" cy="30" r="26" fill={`url(#glow_${id})`} filter="blur(4px)" opacity="0.6" />

        {/* Outer Ring */}
        <circle cx="30" cy="30" r="28" fill="#0A1410" stroke={`url(#border_grad_${id})`} strokeWidth="2" />

        {/* Inner Diamond / UV Shield Shape */}
        <path
          d="M30 10 L48 20 V40 L30 50 L12 40 V20 Z"
          fill={`url(#bg_grad_${id})`}
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
        />

        {/* UV Typography */}
        <text
          x="30"
          y="35"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="22"
          fontWeight="900"
          fill="#FFFFFF"
          fontFamily="var(--font-syne), sans-serif"
          letterSpacing="1"
        >
          UV
        </text>

        <defs>
          <linearGradient id={`bg_grad_${id}`} x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#044E3B" />
          </linearGradient>

          <linearGradient id={`border_grad_${id}`} x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>

          <radialGradient id={`glow_${id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-syne font-extrabold tracking-wider leading-none text-white" style={{ fontSize: size * 0.42 }}>
            UNIQUE
          </span>
          <span className="font-syne font-bold tracking-widest leading-none gradient-text-emerald" style={{ fontSize: size * 0.35 }}>
            VISIONS
          </span>
        </div>
      )}
    </div>
  )
}
