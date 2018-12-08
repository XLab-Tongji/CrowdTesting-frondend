<template>
  <el-container>
    <WorkerHomepageTopbar/>
    <el-header height="30px" style=""></el-header>
    <el-main>
      <el-row style="color:#4D4D4D;margin-bottom: 6vh">
        <span style="padding-left: 1vw; font-size:1.7vw;letter-spacing: 0.1vh;font-weight:600;font-family: 楷体">任务编号:&nbsp;{{task.task_id}}</span>
      </el-row>
      <el-row style="color:#4D4D4D;margin-bottom: 6vh">
        <span style="padding-left: 1vw; font-size:1.7vw;letter-spacing: 0.1vh;font-weight:600;font-family: 楷体">任务名称:&nbsp;{{task.name}}</span>
      </el-row>
      <el-row style="color:#4D4D4D;margin-bottom: 6vh">
        <span style="padding-left: 1vw; font-size:1.7vw;letter-spacing: 0.1vh;font-weight:600;font-family: 楷体">任务类型:&nbsp;{{task.type}}</span>
      </el-row>
      <el-row style="color:#4D4D4D;margin-bottom: 6vh">
        <span style="padding-left: 1vw; font-size:1.7vw;letter-spacing: 0.1vh;font-weight:600;font-family: 楷体">发布者:&nbsp;{{requester.name}}</span>
      </el-row>
      <el-row style="color:#4D4D4D;margin-bottom: 6vh">
        <span style="padding-left: 1vw; font-size:1.7vw;letter-spacing: 0.1vh;font-weight:600;font-family: 楷体">发布日期:&nbsp;{{task.create_time}}</span>
      </el-row>
      <el-row style="color:#4D4D4D;margin-bottom: 6vh">
        <span style="padding-left: 1vw; font-size:1.7vw;letter-spacing: 0.1vh;font-weight:600;font-family: 楷体">完成度:&nbsp;{{task.status}}</span>
      </el-row>
      <el-row style="color:#4D4D4D;margin-bottom: 6vh">
        <span style="padding-left: 1vw; font-size:1.7vw;letter-spacing: 0.1vh;font-weight:600;font-family: 楷体">任务报酬:&nbsp;{{task.reward}}</span>
      </el-row>
      <el-row style="color:#4D4D4D;margin-bottom: 4vh">
        <span style="padding-left: 1vw;font-size:1.7vw;letter-spacing: 0.1vh;font-weight:600;font-family: 楷体">任务描述:</span>
      </el-row>
      <el-row style="color:#4D4D4D;margin-bottom:6vh">
        <span style="font-size:1.4vw;letter-spacing: 0.1vh;padding-left: 1vw;color:#4D4D4D;font-weight:600;font-family: 楷体">{{task.description}}</span>
      </el-row>
      <el-row style="color:#4D4D4D;margin-bottom: 4vh">
        <span style="padding-left: 1vw;font-size:1.7vw;letter-spacing: 0.1vh;font-weight:600;font-family: 楷体">任务限制:</span>
      </el-row>
      <el-row style="color:#4D4D4D;margin-bottom:6vh">
        <span style="font-size:1.4vw;letter-spacing: 0.1vh;padding-left: 1vw;color:#4D4D4D;font-weight:600;font-family: 楷体">{{task.restrictions}}</span>
      </el-row>
      <el-row style="color:#4D4D4D;margin-bottom: 4vh">
        <span style="padding-left: 1vw;font-size:1.7vw;letter-spacing: 0.1vh;font-weight:600;font-family: 楷体">任务要求:</span>
      </el-row>
      <el-row style="color:#4D4D4D;margin-bottom:6vh">
        <span style="font-size:1.4vw;letter-spacing: 0.1vh;padding-left: 1vw;color:#4D4D4D;font-weight:600;font-family: 楷体">{{task.requests}}</span>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import * as Vue from 'autoprefixer'
  import axios from 'axios'
  import WorkerHomepageTopbar from '@/components/WorkerNavi/WorkerHomepageTopbar.vue'


  export default {
    components:{
      WorkerHomepageTopbar,
    },
    methods: {
      taskSquarePage () {
        this.$router.push({ name: 'WorkerTaskSquare', params: { page: 1 }})
      },
      taskPage () {
        this.$router.push({ name: 'WorkerTaskSquare', params: { page: 2 }})
      },
      helpPage () {
        this.$router.push({ name: 'WorkerTaskSquare', params: { page: 3 }})
      },
      handleOpen (key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath);
      }
    },

    data () {
      return {
        user: {
          username: this.$store.state.username,
          level: 2
        },
        page: 1,
        help_page_menu: "0.0",
        url_crowdsourcing: require("../../../static/crowdTestingTag.png"),
        input_search: '',
        input_advice: '',
        task: {},
        requester:{}
      }
    },
    created()
    {
      let task_id = this.$route.params.task_id;
      let that=this;
      let requester_id;
      axios.get('/api/task/find-by-id',
        {params:{'id': task_id}})
        .then(function (response) {
          let task = response.data.task;
          that.task = task;
          requester_id=task.requester_id;
          axios.get('/api/requester/find-by-id',
            {params:{'id': requester_id}})
            .then(function (response) {
              let requester = response.data.requester;
              that.requester = requester;
              that.$forceUpdate();
            })
            .catch(function (error) {
              console.log(error);
            });
          that.$forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
</script>

<style scoped>

</style>
