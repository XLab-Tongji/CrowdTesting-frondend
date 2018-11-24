import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
const state = {
  token: window.sessionStorage.getItem('token'),
  username: ''
};

const store = new Vuex.Store({
  state: {
    // 存储token
    token: window.localStorage.getItem('token'),
    username: ''
  },

  mutations: {
    UserLogin(state,user_information){
      state.token = user_information.token;
      window.localStorage.setItem('token', user_information.token);
      state.username = user_information.username;
    },
    UserLogout(state){
      state.token = '';
      state.username = '';
    },
  }
});

export default store;

