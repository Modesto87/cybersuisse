import { motion, useReducedMotion } from 'framer-motion'
import logoImage from '@/assets/images/logo.png'
import logoImageWebp from '@/assets/images/logo.webp'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
}

const Logo = ({ size = 'md', showText = true, className = '' }: LogoProps) => {
  const reduce = useReducedMotion()
  const sizeClasses = {
    sm: 'w-[5rem] h-[5rem]',
    md: 'w-[7.5rem] h-[7.5rem]',
    lg: 'w-[10rem] h-[10rem]',
    xl: 'w-[15rem] h-[15rem]'
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
      whileHover={reduce ? undefined : { scale: 1.05 }}
      transition={reduce ? { duration: 0 } : { duration: 0.2 }}
    >
      <div className={`${sizeClasses[size]} relative`}>
        <div className="w-full h-full bg-fg rounded-lg p-1 flex items-center justify-center">
          <picture>
            <source srcSet={logoImageWebp} type="image/webp" />
            <img
              src={logoImage}
              alt="CyberSuisse logo"
              className="w-full h-full object-contain"
            />
          </picture>
        </div>
      </div>
      
      {showText && (
        <motion.div 
          className="flex flex-col"
          initial={reduce ? false : { opacity: 0, x: -10 }}
          animate={reduce ? undefined : { opacity: 1, x: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.5, delay: 0.5 }}
        >
          <span className={`font-bold text-fg ${textSizes[size]} tracking-wide`}>
            Modesto Cybersécurité
          </span>
          <span className={`text-brand-amber font-medium ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-xs' : 'text-sm'}`}>
            Cybersécurité PME · Suisse
          </span>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Logo