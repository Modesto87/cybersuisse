# Copilot Instructions - CyberSuisse

## Project Overview

This is a professional cybersecurity consulting website for a Swiss freelancer, built as a React TypeScript SPA with security-focused features and French-language content. The site emphasizes professional credibility through sophisticated 3D animations, comprehensive CSP headers, and enterprise-grade security practices.

## Architecture & Patterns

### Core Stack
- **Framework**: React 19 + TypeScript + Vite
- **UI**: Radix UI primitives + custom shadcn/ui components
- **Styling**: Tailwind CSS 4.x with CSS custom properties
- **Animations**: Framer Motion for page transitions and micro-interactions
- **Routing**: React Router DOM with typed navigation system

### Navigation System
The app uses a centralized navigation pattern with:
- `PageType` union type defining all valid routes (`home | about | pentest | surveillance | osint | developpement | dfir | data-recovery | contact | cgv | politique-confidentialite | mentions-legales | security | cookies`)
- `handleNavigate` function in `App.tsx` that maps PageTypes to routes
- All components receive `onNavigate: (page: PageType) => void` prop for navigation
- Mobile navigation uses Radix Sheet component with animated hamburger menu

### Component Structure
```
src/components/
├── Navigation.tsx       # Main nav with mobile/desktop variants
├── Footer.tsx          # Footer with legal links
├── [Service]Page.tsx   # Individual service pages (e.g., PentestPage.tsx)
├── ui/                 # Shadcn/ui components
└── SEOContent.tsx      # SEO optimization component
```

### Security Configuration
- **CSP Headers**: Comprehensive Content Security Policy in `vite.config.ts`
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc.
- **Environment-aware CSP**: Different policies for dev vs. production

## Design System

### Color Palette
- **Primary**: Blue marine (`--color-accent-9`) for trust/security
- **Secondary**: Violet (`--color-accent-secondary-9`) for technology
- **Accent**: Orange for CTAs (defined in custom CSS)
- Uses Radix Colors with CSS custom properties for theming

### Typography
- **Font**: Inter (loaded from Google Fonts)
- **Hierarchy**: Established in PRD.md with specific sizing (H1: 2.5rem, H2: 2rem, etc.)

### 3D Button Effects
Custom CSS in `styles/buttons.css` provides distinctive 3D button styles:
- `.btn-primary-3d`: Main CTA buttons with gradient backgrounds and hover transforms
- `.btn-secondary-3d`: Secondary actions with border styling
- **Implementation**: Apply these classes alongside shadcn button components

## Development Workflow

### Scripts
- `npm run dev`: Development server with security headers
- `npm run build`: TypeScript compilation + Vite build (uses --noCheck flag)
- `npm run lint`: ESLint with TypeScript rules
- `npm run preview`: Preview production build with security headers

### Component Creation
When creating new service pages:
1. Follow the pattern in `PentestPage.tsx` or `SurveillancePage.tsx`
2. Accept `onNavigate` prop for navigation
3. Use `motion.div` with consistent `pageVariants` for transitions
4. Include service-specific icons from `@phosphor-icons/react`
5. Structure: Hero → Features → Methodology → CTA

### Styling Conventions
- Use Tailwind classes with custom properties (e.g., `bg-primary`, `text-accent-11`)
- Apply `btn-primary-3d` for main CTAs requiring 3D effects
- Use `card-enhanced` for service cards requiring hover animations
- Leverage Radix UI color scales for consistent theming

### Icon Usage
- Primary library: `@phosphor-icons/react`
- Security-related icons: Shield, Lock, Eye, Target
- Import only needed icons to optimize bundle size

## Business Context

### Services & Content
- **Target market**: Swiss businesses needing cybersecurity compliance
- **Key services**: Pentest, Surveillance, OSINT, DFIR, CRA Audit, Secure Development  
- **Language**: All content in French
- **Compliance focus**: New CRA (Cyber Resilience Act) regulations

### SEO Implementation
The project has a comprehensive SEO system with two key components:
- **`SEOContent.tsx`**: Screen reader content with H1 titles and structured business data per page
- **`SEOHelpers.tsx`**: Contains `pageMetadata` object with titles/descriptions and `generateSitemap()` function

**Usage Pattern:**
```tsx
import SEOContent from './SEOContent'
// In component render:
<SEOContent page="pentest" title="Custom Title" description="Custom desc" />
```

**Key Features:**
- Predefined metadata for all pages in `pageMetadata` object
- Structured data with JSON-LD breadcrumbs
- Swiss-specific keywords targeting "Bienne/Biel" location
- Business contact information embedded for local SEO

## Testing & Quality

### Error Handling
- Global error boundary in `main.tsx` using `react-error-boundary`
- Graceful fallbacks for component failures

### Performance
- Vite's SWC plugin for fast compilation
- Lazy loading not implemented (small app size)
- Optimized imports from icon libraries

## File Organization Tips
- Service pages follow consistent naming: `[ServiceName]Page.tsx`
- Legal pages grouped together: `CGVPage.tsx`, `MentionsLegalesPage.tsx`, etc.
- Assets organized in `src/assets/images/` with descriptive names
- Utilities in `src/lib/utils.ts` for shared functions

When working with this codebase, prioritize maintaining the professional, security-focused aesthetic while ensuring smooth navigation flows between services.