import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
const buildCspHeader = (isDev: boolean) => {
  const scriptSrc = [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    'https://analytics.cybersuisse.ch'
  ]

  const styleSrc = [
    "'self'",
    "'unsafe-inline'",
    'https://fonts.googleapis.com'
  ]

  const fontSrc = [
    "'self'",
    'data:',
    'https://fonts.gstatic.com'
  ]

  const connectSrc = [
    "'self'",
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com',
    'https://analytics.cybersuisse.ch'
  ]

  if (isDev) {
    connectSrc.push('ws:', 'wss:')
  }

  const directives = [
    "default-src 'self'",
    `script-src ${scriptSrc.join(' ')}`,
    `style-src ${styleSrc.join(' ')}`,
    "img-src 'self' data: https:",
    `font-src ${fontSrc.join(' ')}`,
    `connect-src ${connectSrc.join(' ')}`,
    "frame-ancestors 'none'",
    "base-uri 'self'"
  ]

  return directives.join('; ')
}

// Plugin para adicionar headers de segurança
const securityHeaders = (isDev: boolean) => {
  const csp = buildCspHeader(isDev)

  return {
    name: 'security-headers',
    configureServer(server: any) {
      server.middlewares.use('/', (req: any, res: any, next: any) => {
        res.setHeader('X-Content-Type-Options', 'nosniff')
        res.setHeader('X-Frame-Options', 'DENY')
        res.setHeader('X-XSS-Protection', '1; mode=block')
        res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
        res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
        res.setHeader('Content-Security-Policy', csp)
        next()
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isDev = command === 'serve'

  return {
    plugins: [
      react(),
      tailwindcss(),
      securityHeaders(isDev),
    ],
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    preview: {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Content-Security-Policy': buildCspHeader(false)
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'motion': ['framer-motion'],
            'icons': ['@phosphor-icons/react']
          }
        }
      }
    }
  }
});
