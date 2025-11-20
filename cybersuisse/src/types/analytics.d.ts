// Global type declarations for analytics tools
declare global {
  interface Window {
    _paq?: unknown[]
  }
  
  function gtag(...args: unknown[]): void
}

export {}