import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update 'base' to match your GitHub repo name for GitHub Pages deployment
// e.g., if repo is github.com/user/my-portfolio, set base: '/my-portfolio/'
// For local dev and Netlify, leave as '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Split rarely-changing vendor code into its own cacheable chunks.
        // (Function form — required by the Rolldown bundler used in Vite 8+)
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'motion-vendor';
            if (id.includes('react-dom') || id.includes('/react/')) return 'react-vendor';
          }
        },
      },
    },
  },
})
