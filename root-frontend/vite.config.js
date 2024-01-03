import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/



export default defineConfig({

  server: {
    proxy: {
      '/api': 'https://busy-rose-nematode-sari.cyclic.app'
    }
  },
  plugins: [react()],
})
