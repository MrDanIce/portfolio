import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // No sourcemaps in the shipped build — avoids exposing original
    // source structure/comments to the public bundle.
    sourcemap: false,
    rollupOptions: {
      output: {
        // Split vendor deps (react/react-dom/animejs) from app code into
        // their own chunk. They change far less often than content.js or
        // the components, so this chunk stays cached across deploys
        // instead of being invalidated by every copy edit.
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
})
