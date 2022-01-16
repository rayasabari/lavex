import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'auth.login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/auth/Login.vue')
  },
  {
    path: '/posts/new',
    name: 'posts.new',
    meta: {
      auth: true,
    },
    component: () => import(/* webpackChunkName: "New Post" */ '../views/posts/New.vue')
  },
  {
    path: '/posts',
    name: 'posts.index',
    meta: {
      auth: true,
    },
    component: () => import(/* webpackChunkName: "Posts" */ '../views/posts/Index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'text-white',
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.auth && !store.getters['auth/check']) next('/login')
  else next();

  if(to.name == 'auth.login' && store.getters['auth/check']) next({name: 'home'})
  else next();
})

export default router
