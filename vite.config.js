import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/aryankhatana01.github.io/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
