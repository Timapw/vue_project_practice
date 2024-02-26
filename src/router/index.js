import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import BasketPage from '../views/BasketPage'
import CardPage from '../views/CardPage'
import AuthPage from '../views/AuthPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthPage
  },
  {
    path: '/about',
    name: 'about',
    component: BasketPage
  },
  {
    path: '/card/:id',
    name: 'card',
    component: CardPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
