import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//
import { infoLogger } from '@/common/logger'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  infoLogger(`App Router to：${to.fullPath}`)
  infoLogger(`App Router from：${from.fullPath}`)
  next()
})

function setupRouter(app: App) {
  // 挂载路由
  app.use(router)
  infoLogger('Application use [Router]')
}

export { setupRouter }

export default router
