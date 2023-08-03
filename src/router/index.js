import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/ViewHomeNoLoginYet.vue')
    },
    {
      path: '/home/logined',
      name: 'home/logined',
      component: HomeView
    },
    {
      path: '/homeAdmin/category',
      name: 'homeAdmin/category',
      component: () => import('../views/HomeAdminView.vue')
    },
    {
      path: '/homeAdmin/item',
      name: 'homeAdmin/item',
      component: () => import('../views/ItemAdminView.vue')
    },
    {
      path: '/homeAdmin/product',
      name: 'homeAdmin/product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/homeAdmin/color',
      name: 'homeAdmin/color',
      component: () => import('../views/ColorAdminView.vue')
    },
    {
      path: '/homeAdmin/size',
      name: 'homeAdmin/size',
      component: () => import('../views/SizeAdminView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/loginView.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/AllProductView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/list/:id',
      name: 'list',
      component: () => import('../views/testListPro.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../views/cardView.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/orderView.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('../views/paymentView.vue')
    },
    {
      path: '/receipt',
      name: 'receipt',
      component: () => import('../views/receiptView.vue')
    }
  ]
})

export default router
