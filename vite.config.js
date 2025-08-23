import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // SEO and SPA optimizations
  build: {
    // Generate source maps for better debugging
    sourcemap: false, // Disable in production for faster loading
    
    // Optimize chunks for better caching and loading
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animation: ['framer-motion'],
          // Keep Three.js separate since it's large and not used on all pages
          three: ['three', '@react-three/fiber', '@react-three/drei']
        }
      }
    },
    
    // Optimize build size
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    }
  },
  
  // Essential for SPA routing
  preview: {
    host: true,
    port: 4173
  },
  
  // Development server configuration
  server: {
    historyApiFallback: true,
    host: true,
    port: 5173
  }
})