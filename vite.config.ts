import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
// TODO: 修改成回调函数格式之后，报错：vitest.config.ts:6:3 - error TS2345: Argument of type 'UserConfigFnObject' is not assignable to parameter of type 'never'.
export default defineConfig({
  plugins: [vue(), vueJsx(), VueDevTools()],
  resolve: {
    // path alias setting, @ -> src/
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  cacheDir: '.vite', // change cache dir form node_modules/.vite to .vite
  envDir: './env', // 指定环境变量文件在哪个位置
  // css config
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @import "@/assets/scss/index.scss";
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
