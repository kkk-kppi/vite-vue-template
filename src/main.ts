import './assets/css/main.css'

import { createApp } from 'vue'

import App from './App.vue'

import { setupStore } from './stores/main'
import { setupRouter } from './router'
// mock worker
import { setupMockWorker } from './mocks/main'

// 自调用函数
;(async () => {
  // create vue app instance
  const app = createApp(App)

  // setup store in app
  setupStore(app)

  // setup router in app
  setupRouter(app)

  // setup mock worker
  await setupMockWorker()

  // mount app
  app.mount('#app')

  console.log(import.meta.env)
})()
