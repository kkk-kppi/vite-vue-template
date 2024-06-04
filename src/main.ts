import { createApp } from 'vue'
// css
import './assets/css/normalize.css'
import './assets/css/style.css'

import App from './App.vue'

// store setup function
import setupStore from './store'
function bootstrap() {
  const app = createApp(App)

  // store setup
  setupStore(app)

  // router setup

  app.mount('#app')
}

bootstrap()
