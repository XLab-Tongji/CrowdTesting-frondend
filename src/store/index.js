import Vue from 'vue'
import Vuex from 'vuex'
import * as user_information from 'element-ui'

Vue.use(Vuex);

//初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
const store = new Vuex.Store({
  state: {
    // 存储token
    token: window.localStorage.getItem('token'),
    email: window.localStorage.getItem('email'),
    username: window.localStorage.getItem('username'),
    level: window.localStorage.getItem('level'),
  },

  mutations: {
    UserLogin(state,user_information){
      window.localStorage.setItem('token', user_information.token);
      window.localStorage.setItem('email', user_information.email);
      state.token = user_information.token;
      state.email = user_information.email;
    },
    WorkerLogin(state,worker_information){
      console.log(state.token);
      window.localStorage.setItem('username', worker_information.username);
      window.localStorage.setItem('level', worker_information.level);
      state.level = worker_information.level;
      state.username = worker_information.username;
      console.log(worker_information.username);
      console.log(state.username);
    },
    RequesterLogin(state,requester_information){
      window.localStorage.setItem('username', requester_information.username);
      state.username = requester_information.username;
    },
    UserLogout(state){
      state.token = '';
      state.username = '';
    },
  }
});

export default store;

