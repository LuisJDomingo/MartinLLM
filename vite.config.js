import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/MartinLLM/', // 👈 nombre EXACTO del repo en GitHub
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    fs: {
      // Allow serving files from one level up to the project root
      allow: [path.resolve(__dirname, '..')],
    },
  },
})
