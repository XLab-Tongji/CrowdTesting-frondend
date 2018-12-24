// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules'
import store from './store'
import axios from 'axios'
import echarts from 'echarts'


Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
axios.defaults.headers.common['X_Auth_Token'] = store.state.token;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  store,
  components: { App },
  template: '<App/>'
})
