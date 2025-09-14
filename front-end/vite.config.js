import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://k9vs7xq3-8000.uks1.devtunnels.ms/',
        changeOrigin: true,
      }
    },
  }
})
