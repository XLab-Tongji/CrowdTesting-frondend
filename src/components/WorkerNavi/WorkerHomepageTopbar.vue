<template>
  <el-row>
    <div class="topbar"  style = "background-color:#4D4D4D">
      <el-col :span="4">
        <div class="topbar_title">
          <img :src="logo">
        </div>

      </el-col>
      <el-col :span="16">
        <el-menu :default-active="activeIndex"
                 router
                 class="el-menu-demo"
                 mode="horizontal"
                 background-color="#4D4D4D"
                 text-color="#fff"
                 active-text-color="#5ED5D1">
          <el-menu-item index="worker_task_square">任务广场</el-menu-item>
          <el-menu-item index="worker_personal_task">我的任务</el-menu-item>
          <el-menu-item index="worker_task_help">问题帮助</el-menu-item>
        </el-menu>
      </el-col>

      <el-col :span="3">
        <el-button type="text" style="color:#ffffff;width:100%;height:60px" @click="informationPage">
          <span>{{user.username}}</span>
        </el-button>
      </el-col>

      <el-col :span="1" style = "background-color:#4D4D4D">
        <el-button type="text" style="color:#ffffff;width:100%;height:60px" @click="logout">
          <span>退出</span>
        </el-button>
      </el-col>
    </div>
  </el-row>
</template>

<script>
  export default {
    computed:{
      activeIndex(){
        return this.$route.path.replace('/','')
      }
    },
    methods: {
      informationPage(){
        this.$router.replace('/worker_information')
      },
      logout(){
        this.$store.commit('UserLogout');
        this.$router.replace('/login')
      },
    },
    data () {
      return {
        logo: require('../../../static/logo_white.png'),
        user:{
          username:this.$store.state.username,
          level:this.$store.state.level,
        },
        navList: [
          {name: '/worker_task_square', navItem: '广场'},
          {name: '/worker_personal_task', navItem: '任务'},
          {name: '/worker_task_help', navItem: '帮助'},
        ]
      }
    }
  }
</script>


<style>
  .topbar{
    background-color: rgb(49, 50, 51);
    color: #fff;
    height: 60px;
  }
  .topbar_title{
    color:#fff;
    margin-left:50px;
    margin-top: 13px;
    font-size: 70%;
  }
  .topbar_control{
    font-size: 120%;
  }
  .topbar_user{
    /*margin-top:23px;  */
    font-size: 15px;
    font-weight: 200;
    background-color: rgba(0,0,0,0);
    color: #fff;
    border: none;
  }
  .topbar_user span{
    padding-right: 20px;
  }

</style>
