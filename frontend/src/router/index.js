import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import explorPage from '../views/explor-page.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/explor',
      name: 'explor',
      component: explorPage
    }
  ]
})

export default router
