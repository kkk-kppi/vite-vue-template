// 让ts识别vue文件
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const VueComponent: DefineComponent<{}, {}, any>
  export default VueComponent
}