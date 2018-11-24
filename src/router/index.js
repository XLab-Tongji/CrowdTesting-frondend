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
import WorkerTaskDetails from '@/views/worker/WorkerTaskDetails.vue'
import WorkerTaskTest from '@/views/worker/WorkerTaskTest.vue'
import * as MessageBox from 'element-ui'

Vue.use(Router) // 注册vue-router

const router = new Router({
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
      meta: { login:true },
      component: WorkerTaskSquare
    },
    {
      path: '/worker_task_details',
      name: 'WorkerTaskDetails',
      meta: { login:true },
      component: WorkerTaskDetails
    },
    {
      path: '/worker_task_test',
      name: 'WorkerTaskTest',
      meta: { login:true },
      component: WorkerTaskTest
    },
    {
      path: '/requester_homepage_basic',
      name: 'RequesterHomepageBasic',
      meta: { login:true },
      component: RequesterHomepageBasic
    },
    {
      path: '/requester_homepage_detail',
      name: 'RequesterHomepageDetail',
      meta: { login:true },
      component: RequesterHomepageDetail
    },
    {
      path: '/requester_homepage_balance',
      name: 'RequesterHomepageBalance',
      meta: { login:true },
      component: RequesterHomepageBalance
    },
    {
      path: '/requester_create_main',
      name: 'RequesterCreateMain',
      meta: { login:true },
      component: RequesterCreateMain
    },
    {
      path: '/requester_create_main_pro1',
      name: 'RequesterCreateMainpro1',
      meta: { login:true },
      component: RequesterCreateMainpro1
    },
    {
      path: '/requester_create_main_pro2',
      name: 'RequesterCreateMainpro2',
      meta: { login:true },
      component: RequesterCreateMainpro2
    },
    {
      path: '/requester_create',
      name: 'RequesterCreate',
      meta: { login:true },
      component: RequesterCreate
    }
  ]
})


router.beforeEach((to, from, next) => {
  // console.info(22, window.location.href)
  //console.info(to,from,next)
  // 对路由变化作出响应...
  // console.log(router,to)
  // console.log(router,to.query, from)
  // console.log(to,$.param( to.query ),window.location.href)
  //全局拦截器的
  if (to.meta.login) {  // 判断该路由是否需要登录权限
    if (window.localStorage.getItem('token') === null) {
      alert('未登录，请先登录');
      next({
        path: '/login',
        query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
    else {
      console.log(window.localStorage.getItem('token'));
      next();
    }
  }
  else {
    next();
  }
})

export default router

