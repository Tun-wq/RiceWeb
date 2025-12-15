import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' /* todo:不知道为什么这里一定要用..，不能用@ */
import About from '../views/About.vue'
import Articles from '../views/Articles.vue'
import Portfolios from '../views/Portfolios.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/articles',
      component: Articles,
    },
    {
      path: '/portfolios',
      component: Portfolios,
    },
  ],
})

export default router
