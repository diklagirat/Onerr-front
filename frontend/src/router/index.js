import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import explorePage from '../views/explore-page.vue'
import gigDetails from '../views/details-page.vue'
import manageOrders from '../views/manage-orders.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/explore',
      name: 'explore',
      component: explorePage
    },
    {
      path: '/details/:gigId',
      name: 'details',
      component: gigDetails
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: manageOrders
    }
  ]
})

export default router
