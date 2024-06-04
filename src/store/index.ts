import type { App } from 'vue'
import { createPinia } from 'pinia'
// store modules
import useAppStore from './modules/app'
import useThemeStore from './modules/theme'

const store = createPinia()
function setupStore(app: App) {
  app.use(store)
}

export default setupStore

export {
  useAppStore,
  useThemeStore
}
