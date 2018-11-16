import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import RegisterWorker from '@/views/RegisterWorker.vue'
import RegisterRequester from '@/views/RegisterRequester.vue'
import WorkerTaskSquare from '@/views/worker/WorkerTaskSquare.vue'
import RequesterHomepageBasic from '@/views/requester/RequesterHomepageBasic.vue'
import RequesterHomepageDetail from '@/views/requester/RequesterHomepageDetail.vue'
import RequesterHomepageBalance from '@/views/requester/RequesterHomepageBalance.vue'

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
    },
    {
      path: '/worker_task_square',
      name: 'WorkerTaskSquare',
      component: WorkerTaskSquare
    },
    {
      path: '/requester_homepage_basic',
      name: 'RequesterHomepageBasic',
      component: RequesterHomepageBasic
    },
    {
      path: '/requester_homepage_detail',
      name: 'RequesterHomepageDetail',
      component: RequesterHomepageDetail
    },
    {
      path: '/requester_homepage_balance',
      name: 'RequesterHomepageBalance',
      component: RequesterHomepageBalance
    }
  ]
})
