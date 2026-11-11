// Pre-renders the page into build/index.html after `vite build`, so the HTML already contains the content:
// link-preview bots and search engines see it without running JavaScript, and the first paint is faster.
import { readFile, rm, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'

import { build } from 'vite'

const serverDir = 'build-ssr'

await build({
  logLevel: 'warn',
  build: { ssr: 'src/entry-server.tsx', outDir: serverDir, emptyOutDir: true, copyPublicDir: false },
})

try {
  const { render } = await import(pathToFileURL(`${serverDir}/entry-server.js`).href)
  const page = await readFile('build/index.html', 'utf8')
  if (!page.includes('<!--app-->')) {
    throw new Error('build/index.html has no <!--app--> placeholder in #root')
  }
  await writeFile('build/index.html', page.replace('<!--app-->', render()))
  console.log('Pre-rendered build/index.html')
} finally {
  await rm(serverDir, { recursive: true, force: true })
}
