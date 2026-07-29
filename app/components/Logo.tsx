import React, { useId } from 'react'

interface LogoProps {
  size?: number
  className?: string
  showText?: boolean
  variant?: 'icon' | 'full'
}

export default function Logo({ size = 42, className = '', showText = false }: LogoProps) {
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
        {/* Glow Backdrop */}
        <circle cx="30" cy="30" r="26" fill={`url(#glow_${id})`} filter="blur(4px)" opacity="0.7" />

        {/* Crimson Circle Container */}
        <rect x="2" y="2" width="56" height="56" rx="16" fill={`url(#crimson_grad_${id})`} />

        {/* Wave Accents matching official brand image */}
        <path
          d="M 6 25 Q 30 10 54 25 Q 40 50 6 54 Z"
          fill="rgba(255, 255, 255, 0.08)"
        />
        <path
          d="M 10 10 Q 45 15 52 45 Z"
          fill="rgba(0, 0, 0, 0.15)"
        />

        {/* UV Interlaced Letters in Clean White */}
        <text
          x="30"
          y="35"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="24"
          fontWeight="900"
          fill="#FFFFFF"
          fontFamily="var(--font-syne), sans-serif"
          letterSpacing="1"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
        >
          UV
        </text>

        {/* Subtle Inner Border */}
        <rect x="2" y="2" width="56" height="56" rx="16" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />

        <defs>
          <linearGradient id={`crimson_grad_${id}`} x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F43F5E" />
            <stop offset="50%" stopColor="#E11D48" />
            <stop offset="100%" stopColor="#BE123C" />
          </linearGradient>

          <radialGradient id={`glow_${id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E11D48" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-syne font-black tracking-[0.18em] text-white" style={{ fontSize: size * 0.38 }}>
            UNIQUE
          </span>
          <span className="font-syne font-bold tracking-[0.22em] text-[#FB7185]" style={{ fontSize: size * 0.32 }}>
            VISIONS
          </span>
        </div>
      )}
    </div>
  )
}
