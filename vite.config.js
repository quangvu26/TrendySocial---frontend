import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  // Environment variables configuration
  define: {
    __APP_ENV__: JSON.stringify(process.env.NODE_ENV),
  },
  // Clear token when starting dev server
  server: {
    setupMiddleware(server) {
      server.use((req, res, next) => {
        if (process.env.NODE_ENV === 'development') {
          localStorage.removeItem('token');
        }
        next();
      });
    }
  }
})
