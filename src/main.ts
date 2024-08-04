// vfonts包含常规字体和等宽字体
// 配置字体，see - https://www.naiveui.com/zh-CN/os-theme/docs/fonts
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
// 自定义的css内容
import './assets/css/main.css'

import { createApp } from 'vue'

import App from './App.vue'

import { setupStore } from './stores'
import { setupRouter } from './router'
import { setupDirectives } from './common/directives'
// mock worker
import { setupMockWorker } from './mocks/main'
// 自调用函数
import { infoLogger } from './common/logger'

// app setup
;(async () => {
  // create vue app instance
  const app = createApp(App)

  // setup store in app
  setupStore(app)

  // setup router in app
  setupRouter(app)

  // setup directives in app
  setupDirectives(app)

  // setup mock worker
  await setupMockWorker()

  // mount app
  app.mount('#app')
  infoLogger('Application start in [#app] Element')
})()
