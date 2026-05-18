import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from '@/components/ui/sonner'

import App from './App.tsx'
import { ErrorFallback } from './ErrorFallback.tsx'

import './i18n'

// CSS import order is intentional — do not shuffle.
// 1. main.css      → Tailwind preflight, Radix colors, @theme inline shadcn mapping
// 2. index.css     → shadcn semantic vars remapped to CyberSuisse brand (overrides main.css :root/.dark)
// 3. theme.css     → CyberSuisse brand tokens (--color-bg, --color-fg, --color-brand-*, fonts)
// 4. buttons.css   → flat .btn-primary / .btn-secondary / .card-enhanced utilities
// 5. global.css    → typography scale, prefers-reduced-motion, kept cs-* red-team utilities (Pentest/OSINT only)
import "./main.css"
import "./index.css"
import "./styles/theme.css"
import "./styles/buttons.css"
import "./styles/global.css"

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <App />
    <Toaster position="bottom-right" />
   </ErrorBoundary>
)
