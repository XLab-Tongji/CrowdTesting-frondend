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
import WorkerTaskPreview from '@/views/worker/WorkerTaskPreview.vue'
import WorkerTaskContinuation from '@/views/worker/WorkerTaskContinuation.vue'
import WorkerInformation from '@/views/worker/WorkerInformation.vue'
import RequesterVisualizationRelease from '@/views/requester/RequesterVisualizationRelease.vue'
import RequesterVisualizationAnswer from '@/views/requester/RequesterVisualizationAnswer.vue'
import RequestVisualizationTask from '@/views/requester/RequestVisualizationTask.vue'

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
      path: '/worker_information',
      name: 'WorkerInformation',
      component: WorkerInformation
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
      path: '/worker_task_details',
      name: 'WorkerTaskDetails',
      meta: { login: true },
      component: WorkerTaskDetails
    },
    {
      path: '/worker_task_test',
      name: 'WorkerTaskTest',
      meta: { login: true },
      component: WorkerTaskTest
    },
    {
      path: '/worker_task_preview',
      name: 'WorkerTaskPreview',
      meta: { login: true },
      component: WorkerTaskPreview
    },

    {
      path: '/worker_task_continuation',
      name: 'WorkerTaskContinuation',
      meta: { login: true },
      component: WorkerTaskContinuation
    },
    {
      path: '/requester_homepage_basic',
      name: 'RequesterHomepageBasic',
      component: RequesterHomepageBasic
    },
    {
      path: '/requester_visualization_task',
      name: 'RequestVisualizationTask',
      component: RequestVisualizationTask
    },
    {
      path: '/requester_visualization_answer',
      name: 'RequesterVisualizationAnswer',
      component: RequesterVisualizationAnswer
    },
    {
      path: '/requester_visualization_release',
      name: 'RequesterVisualizationRelease',
      component: RequesterVisualizationRelease
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

router.beforeEach((to, from, next) => {
  // console.info(22, window.location.href)
  // console.info(to,from,next)
  // 对路由变化作出响应...
  // console.log(router,to)
  // console.log(router,to.query, from)
  // console.log(to,$.param( to.query ),window.location.href)
  // 全局拦截器的
  if (to.meta.login) { // 判断该路由是否需要登录权限
    if (window.localStorage.getItem('token') === null) {
      alert('未登录，请先登录')
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    } else {
      console.log(window.localStorage.getItem('token'))
      next()
    }
  } else {
    next()
  }
})

export default router
