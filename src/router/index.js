import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入路由模块
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    // redirect: '/home',
    component: Home
  },
  {
    path: '/user',
    component: User
  }
]

const router = new VueRouter({
  routes
})

export default router
