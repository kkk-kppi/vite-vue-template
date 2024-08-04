/// <reference types="vite/client" />
// 配置环境变量的TypeScript提示
// env类型声明补全
interface ImportMetaEnv {
  VITE_APP_TITLE: string
  VITE_APP_BASE_URL: string
}
// 补全meta类型声明，补充env类型
interface ImportMeta {
  readonly env: ImportMetaEnv
}

// 配置.vue结尾的类型声明
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
