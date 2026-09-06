import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  root: 'client',
  publicDir: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: 'client/index.html',
        about: 'client/about/index.html',
        legacyAbout: 'client/about.html',
      },
    },
  },
  plugins: [react(), tailwindcss()],
})
