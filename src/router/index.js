import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import RegisterWorker from '@/components/RegisterWorker.vue'
import RegisterRequester from '@/components/RegisterRequester.vue'

Vue.use(Router) // 注册vue-router

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/register_worker',
      name: 'RegisterWorker',
      component: RegisterWorker
    },
    {
      path: '/register_requester',
      name: 'RegisterRequester',
      component: RegisterRequester
    }
  ]
})
