import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Asegúrate de reemplazar 'martin-llm-web' con el nombre exacto de tu repositorio en GitHub.
  base: '/MartinLLM/',
})