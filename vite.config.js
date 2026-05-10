import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('react/')) {
              return 'react-vendor'
            }
            if (id.includes('@mui') || id.includes('@emotion')) {
              return 'mui-vendor'
            }
            if (id.includes('framer-motion')) {
              return 'animation-vendor'
            }
            if (
              id.includes('typed.js') ||
              id.includes('vanilla-tilt') ||
              id.includes('react-vertical-timeline') ||
              id.includes('react-github-calendar')
            ) {
              return 'misc-vendor'
            }
            return 'vendor' // everything else in node_modules
          }
        },
      },
    },
  },
})