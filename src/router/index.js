import Vue from 'vue'
import VueRouter from 'vue-router'
import { Store } from 'vuex'
import store from '../store'

Vue.use(VueRouter)

const routes = [

  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Auth/Register.vue')
  },
  {
    path: '/forgot-pwd',
    name: 'ForgotPwd',
    component: () => import('../views/Auth/ForgotPwd.vue')
  },
  {
    path: '/validate-token',
    name: 'ValidateResetToken',
    component: () => import('../views/Auth/ValidateResetToken.vue')
  },
  {
    path: '/confirm-password-reset/:token',
    name: 'ConfirmPwd',
    component: () => import('../views/Auth/ConfirmPwd.vue'),
    props: true
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Auth/Login.vue'),
    meta: {
      auth: false,
      notFoundRedirect: '/dashboard'
    }
  },
  {
    path: '/activate',
    name: 'ActivateAccount',
    component: () => import('../views/Auth/ActivateAccount.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import("../views/Dashboard.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/teams',
    name: 'Teams',
    component: () => import("../views/Teams.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/transactions',
    name: 'Payments',
    component: () => import("../views/Payment.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/rate',
    name: 'Rate',
    component: () => import("../views/Rate.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import("../views/Profile.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import("../views/Orders.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import("../views/Notifications.vue"),
    meta: {requiresAuth: true}
  },
  {
    path: '/quick-tour',
    name: 'QuickTour',
    component: () => import("../views/QuickTour.vue"),
    meta: {requiresAuth:true}
  },
  {
    path: '/headsup',
    name: 'Headsup',
    component: () => import ("../views/Headsup"),
    meta: {requiresAuth:true}
  },
  {
    path: '/asset/:type',
    name: 'Asset',
    component: () => import("../views/Asset"),
    meta: {requiresAuth:true},
    props: true
  },
  {
    path: '/assetUpdate/:id',
    name: 'Update',
    component: () => import("../views/Asset"),
    meta: {requiresAuth:true},
    props: true
  },
  {
    path: '/select-transport-type',
    name: 'SelectTransportType',
    component: () => import("../views/SelectTransportType"),
    meta: {requiresAuth:true}
  },
  {
    path: '/asset-list',
    name: 'AssetList',
    component: () => import("../views/AssetList"),
    meta: {requiresAuth:true}
  },

  {
    path: '/promo',
    name: 'AddPromo',
    component: () => import("../views/AddPromo"),
    meta: {requiresAuth:true}
  },
 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (window.localStorage.getItem('isAuthenticated') === 'true') {
      next()
    } else {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next() 
  }

  if((to.name === 'Login' || to.name ==='Register') && window.localStorage.getItem('isAuthenticated') === 'true') next({name: 'Dashboard'})
  else next()

  if((to.name === 'Dashboard' || to.name === "Orders" || to.name === "AddPromo" || to.name === "AssetList"  ) && window.localStorage.getItem('is_verified') === 'false') next({name: 'Headsup'})
  else next()
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})
export default router
