import './assets/css/main.css'

import { createApp } from 'vue'

import App from './App.vue'

import { setupStore } from './stores/main'
import { setupRouter } from './router'

// 自调用函数
;(() => {
  // create vue app instance
  const app = createApp(App)

  // setup store in app
  setupStore(app)

  // setup router in app
  setupRouter(app)

  // mount app
  app.mount('#app')

  console.log(import.meta.env)
})()
