import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // SEO and SPA optimizations
  build: {
    // Generate source maps for better debugging
    sourcemap: true,
    
    // Optimize chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animation: ['framer-motion'],
          three: ['three', '@react-three/fiber', '@react-three/drei']
        }
      }
    }
  },
  
  // Essential for SPA routing - this ensures all routes serve index.html
  preview: {
    // This is crucial for production builds
    // It tells the server to serve index.html for all routes
    // so React Router can handle client-side routing
    host: true,
    port: 4173
  },
  
  // Development server configuration
  server: {
    // This ensures dev server also handles SPA routing correctly
    historyApiFallback: true,
    host: true,
    port: 5173
  }
})