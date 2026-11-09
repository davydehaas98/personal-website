/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    // Fingerprinted JS/CSS go to /static/ (cached forever by nginx); public/assets/ keeps the unhashed images.
    assetsDir: 'static',
    // Never inline assets as data: URIs into scripts/styles; keep every asset a separate file.
    assetsInlineLimit: 0,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['@testing-library/jest-dom/vitest'],
  },
})
