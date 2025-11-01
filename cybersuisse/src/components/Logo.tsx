import { motion } from 'framer-motion'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
}

const Logo = ({ size = 'md', showText = true, className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg',
    xl: 'text-2xl'
  }

  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`${sizeClasses[size]} relative`}>
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D9FF" />
              <stop offset="25%" stopColor="#6366F1" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="75%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
          
          {/* Outer shield */}
          <motion.path
            d="M100 20 L160 40 L160 100 C160 140 130 170 100 180 C70 170 40 140 40 100 L40 40 Z"
            stroke="url(#shield-gradient)"
            strokeWidth="6"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          {/* Middle shield */}
          <motion.path
            d="M100 35 L140 50 L140 95 C140 125 120 145 100 155 C80 145 60 125 60 95 L60 50 Z"
            stroke="url(#shield-gradient)"
            strokeWidth="5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          />
          
          {/* Inner shield */}
          <motion.path
            d="M100 50 L120 60 L120 90 C120 110 110 125 100 130 C90 125 80 110 80 90 L80 60 Z"
            stroke="url(#shield-gradient)"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
          />
          
          {/* Center elements */}
          <motion.path
            d="M85 75 L95 85 L115 65"
            stroke="url(#shield-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
          />
          
          <motion.path
            d="M85 95 L95 105 L115 85"
            stroke="url(#shield-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeInOut" }}
          />
        </svg>
      </div>
      
      {showText && (
        <motion.div 
          className="flex flex-col"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span className={`font-bold text-primary ${textSizes[size]} tracking-wide`}>
            Modesto Cybersécurité
          </span>
          <span className={`text-accent font-medium ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-xs' : 'text-sm'}`}>
            Pentest & DFIR
          </span>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Logo