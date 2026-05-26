// Static prerender script — visits each route via headless Chromium and dumps the
// fully-rendered HTML to dist/<route>/index.html so that crawlers without JS
// (Bing, LinkedIn, Slack, WhatsApp, etc.) receive complete HTML.
//
// Why this script exists: react-snap (the popular off-the-shelf solution) is
// pinned to puppeteer@1.20.0, whose bundled Chromium does not understand modern
// ES syntax (optional chaining `?.`) emitted by Vite 6 bundles. So we use a
// fresh puppeteer instead, served by a tiny built-in HTTP server.

import { createServer } from 'node:http'
import { readFile, stat, mkdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, extname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const ROOT = resolve(__dirname, '..')
const DIST = join(ROOT, 'dist')

const ROUTES = [
  '/',
  '/services',
  '/premier-regard',
  '/ressources',
  '/ressources/m365-checklist-securite-pme-suisse',
  '/ressources/reconnaitre-email-phishing-30-secondes',
  '/ressources/que-faire-apres-cyberattaque-pme-plan',
  '/ressources/rgpd-vs-lpd-suisse-pme-2026',
  '/a-propos',
  '/contact',
  '/cgv',
  '/politique-confidentialite',
  '/mentions-legales'
]

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
}

async function serveDist(port) {
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url, `http://localhost:${port}`)
      let pathname = decodeURIComponent(url.pathname)
      let filePath = join(DIST, pathname)

      if (existsSync(filePath)) {
        const st = await stat(filePath)
        if (st.isDirectory()) filePath = join(filePath, 'index.html')
      }

      if (!existsSync(filePath)) {
        // SPA fallback to root index.html so React Router can resolve the route.
        filePath = join(DIST, 'index.html')
      }

      const body = await readFile(filePath)
      const ext = extname(filePath).toLowerCase()
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
      res.end(body)
    } catch (err) {
      res.writeHead(500)
      res.end(String(err && err.message ? err.message : err))
    }
  })
  await new Promise((r) => server.listen(port, r))
  return server
}

function minifyHtml(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+\n/g, '\n')
    .replace(/\n\s*\n/g, '\n')
}

async function prerender() {
  if (!existsSync(DIST)) {
    console.error('[prerender] dist/ not found — run `vite build` first.')
    process.exit(1)
  }

  const port = 4173 + Math.floor(Math.random() * 1000)
  const server = await serveDist(port)
  console.log(`[prerender] serving dist on http://localhost:${port}`)

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  let failures = 0
  for (const route of ROUTES) {
    try {
      const page = await browser.newPage()
      page.on('pageerror', (e) => console.warn(`[prerender] pageerror @ ${route}:`, e.message))
      const url = `http://localhost:${port}${route}`
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
      // Give framer-motion / useEffect SEO writes a beat to settle.
      await new Promise((r) => setTimeout(r, 400))
      const html = await page.content()
      await page.close()

      const outDir = route === '/' ? DIST : join(DIST, route)
      await mkdir(outDir, { recursive: true })
      const outFile = join(outDir, 'index.html')
      await writeFile(outFile, minifyHtml(html), 'utf8')
      console.log(`[prerender] ✓ ${route} → ${outFile.replace(ROOT, '')}`)
    } catch (err) {
      failures++
      console.error(`[prerender] ✗ ${route}:`, err.message)
    }
  }

  await browser.close()
  server.close()

  if (failures > 0) {
    console.error(`[prerender] ${failures} route(s) failed`)
    process.exit(1)
  }
  console.log(`[prerender] done — ${ROUTES.length} routes rendered`)
}

prerender().catch((err) => {
  console.error('[prerender] fatal:', err)
  process.exit(1)
})
