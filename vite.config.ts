import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import type { ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import loadEnvVariable from './env/loadEnvVariable'
// naive ui自动引入api和组件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  console.log('Vite Config Environment variable mode：', mode)
  const _AppEnv = loadEnvVariable(mode)
  return {
    plugins: [
      vue(),
      vueJsx(),
      VueDevTools(),
      // naive ui自动引入api和组件
      AutoImport({
        imports: [
          'vue', // 自动引入vue相关api
          'vue-router', // 自动引入vue-router相关api
          {
            'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
          }
        ],
        // targets to transform - 转换的目标
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/ // .vue
          // /\.md$/, // .md
        ],
        dts: './auto-imports.d.ts' // 声明依赖的ts声明文件
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ],
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
  }
})
