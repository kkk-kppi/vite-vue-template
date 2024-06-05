import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueDevTools()],
  resolve: {
    // path alias setting, @ -> src/
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  cacheDir: '.vite', // change cache dir form node_modules/.vite to .vite
  // css config
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/index.scss";
          @import "@/assets/scss/theme.scss";
        `
      }
    }
  },
  // dev config
  server: {
    port: 51120,
    proxy: {
      '/api': {
        target: 'http://localhost:51121',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  // preview config
  preview: {
    port: 51130,
    proxy: {
      '/api': {
        target: 'http://localhost:51131',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
