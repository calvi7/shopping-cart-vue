import { createRouter, createWebHistory } from 'vue-router'
import CartPageVue from '../views/CartPage.vue'
import HomePageVue from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePageVue
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPageVue
    }
  ]
})

export default router
