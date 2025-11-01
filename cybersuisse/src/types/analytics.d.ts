// Global type declarations for analytics tools
declare global {
  interface Window {
    _paq?: any[]
  }
  
  function gtag(...args: any[]): void
}

export {}