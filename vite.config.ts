import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  publicDir: 'public',
  // cacheDir: 'node_modules/.vite',
  cacheDir: '.vite-cache',

  // 项目别名配置
  resolve: {
    alias: {
      '@': '/src',
    },
  },

  // css配置
  css: {
    // css预处理器的选项
    preprocessorOptions: {
      // scss 预设样式
      scss: {
        additionalData: `
          @import "@/assets/scss/theme.scss";
          @import "@/assets/scss/index.scss";
        `,
      },
    },
  },


  plugins: [vue()],
})
