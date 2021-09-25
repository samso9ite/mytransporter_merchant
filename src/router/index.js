import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Auth/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Auth/Login.vue')
  },
  {
    path: '/activate',
    name: 'ActivateAccount',
    component: () => import('../views/Auth/ActivateAccount.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import("../views/Dashboard.vue")
  },
  {
    path: '/riders',
    name: 'Riders',
    component: () => import("../views/Riders.vue")
  },
  {
    path: '/transactions',
    name: 'Payments',
    component: () => import("../views/Payment.vue")
  },
  {
    path: '/rate',
    name: 'Rate',
    component: () => import("../views/Rate.vue")
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import("../views/Profile.vue")
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import("../views/Orders.vue")
  },
  // {
  //   path: '/orders',
  //   name: 'Orders',
  //   component: () => import("../views/Orders.vue")
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
