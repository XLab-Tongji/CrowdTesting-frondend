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
import RequesterCreatePro1 from '@/views/requester/RequesterCreate_pro1.vue'
import RequesterManageMain from '@/views/requester/RequesterManageMain.vue'
import RequesterTask from '@/views/requester/RequesterTask.vue'
import RequesterTaskDataAnalysis from '@/views/requester/RequesterTaskDataAnalysis.vue'
import WorkerTaskDetails from '@/views/worker/WorkerTaskDetails.vue'
import WorkerTaskTest from '@/views/worker/WorkerTaskTest.vue'
import WorkerTaskPreview from '@/views/worker/WorkerTaskPreview.vue'
import WorkerTaskContinuation from '@/views/worker/WorkerTaskContinuation.vue'
import WorkerInformation from '@/views/worker/WorkerInformation.vue'
import WorkerPersonalTask from '@/views/worker/WorkerPersonalTask.vue'
import WorkerTaskHelp from '@/views/worker/WorkerTaskHelp.vue'
import RequesterHomepagePic from '@/views/requester/RequesterHomepagePic'
import RequesterHomepagePicList from '@/views/requester/RequesterHomepagePicList.vue'

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
      meta: { login: true },
      component: WorkerTaskSquare
    },
    {
      path: '/worker_personal_task',
      name: 'WorkerPersonalTask',
      meta: { login: true },
      component: WorkerPersonalTask
    },
    {
      path: '/worker_task_help',
      name: 'WorkerTaskHelp',
      meta: { login: true },
      component: WorkerTaskHelp
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
      path: '/worker_information',
      name: 'WorkerInformation',
      meta: { login: true },
      component: WorkerInformation
    },
    {
      path: '/requester_homepage_basic',
      name: 'RequesterHomepageBasic',
      meta: { login: true },
      component: RequesterHomepageBasic
    },
    {
      path: '/requester_homepage_detail',
      name: 'RequesterHomepageDetail',
      meta: { login: true },
      component: RequesterHomepageDetail
    },
    {
      path: '/requester_homepage_balance',
      name: 'RequesterHomepageBalance',
      meta: { login: true },
      component: RequesterHomepageBalance
    },
    {
      path: '/requester_create_pro1',
      name: 'RequesterCreatePro1',
      meta: { login: true },
      component: RequesterCreatePro1
    },
    {
      path: '/requester_manage_main',
      name: 'RequesterManageMain',
      meta: { login: true },
      component: RequesterManageMain
    },
    {
      path: '/requester_task_data_analysis',
      name: 'RequesterTaskDataAnalysis',
      meta: { login: true },
      component: RequesterTaskDataAnalysis
    },
    {
      path: '/requester_task',
      name: 'RequesterTask',
      meta: { login: true },
      component: RequesterTask
    },
    {
      path: '/requester_task_data_analysis',
      name: 'RequesterTaskDataAnalysis',
      meta: { login: true },
      component: RequesterTaskDataAnalysis
    },
    {
      path: '/requester_homepage_pic',
      name: 'RequesterHomepagePic',
      meta: { login: true },
      component: RequesterHomepagePic
    },
    {
      path: '/requester_homepage_pic/:id',
      props: true,
      name: 'RequesterHomepagePicList',
      meta: { login: true },
      component: RequesterHomepagePicList
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
      alert('未登录，请先登录');
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
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
