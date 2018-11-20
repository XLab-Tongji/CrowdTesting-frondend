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
import RequesterCreateMain from '@/views/requester/RequesterCreateMain.vue'
import RequesterCreateMainpro1 from '@/views/requester/RequesterCreateMain_pro1.vue'
import RequesterCreateMainpro2 from '@/views/requester/RequesterCreateMain_pro2.vue'
import RequesterCreate from '@/views/requester/RequesterCreate.vue'

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
    },
    {
      path: '/requester_create_main',
      name: 'RequesterCreateMain',
      component: RequesterCreateMain
    },
    {
      path: '/requester_create_main_pro1',
      name: 'RequesterCreateMainpro1',
      component: RequesterCreateMainpro1
    },
    {
      path: '/requester_create_main_pro2',
      name: 'RequesterCreateMainpro2',
      component: RequesterCreateMainpro2
    },
    {
      path: '/requester_create',
      name: 'RequesterCreate',
      component: RequesterCreate
    }
  ]
})
