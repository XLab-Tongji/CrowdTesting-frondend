<template>
  <el-container>
    <!--导航-->
    <el-header height="12vh" style="">
      <!--<el-row>
      <el-col :span="3" style="background-color: #4D4D4D">
        <p style="color:#fff; margin-left:50px;">TJ众测</p>
      </el-col>
      <el-col :span="18" >
        <div class="topbar-title" style="background-color: #4D4D4D">
          <el-menu :default-active="1"  mode="horizontal" @select="handleSelect"
                   background-color=rgba(0,0,0,0) text-color="#fff"  active-text-color="#5ED5D1">
            <el-menu-item index="1">广场</el-menu-item>
            <el-menu-item index="2">任务</el-menu-item>
            <el-menu-item index="3">价格</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      </el-row>-->
      <el-row style = "background-color:#5ED5D1;height:80%">
        <el-col :span="3">
          <img :src="url_crowdsourcing"  style="width:100%;height:8vh;background-color: #4D4D4D"/>
        </el-col>
        <el-col :span="2" style = "background-color:#4D4D4D">
          <el-button type="text" style="color:#ffffff;width:100%;height:8vh">
            <span>Worker</span>
          </el-button>
        </el-col>
        <el-col :span="2" style = "background-color:#5ED5D1" v-if="page==1">
          <el-button type="text" style="color:#ffffff;width:100%;height:8vh;font-weight:600" @click="taskSquarePage">
            <span style="font-size:1.4vw">广场</span>
          </el-button>
        </el-col>
        <el-col :span="2" style = "background-color:#4D4D4D" v-else>
          <el-button type="text" style="color:#ffffff;width:100%;height:8vh;font-weight:600" @click="taskSquarePage">
            <span style="font-size:1.4vw">广场</span>
          </el-button>
        </el-col>
        <el-col :span="1" style = "background-color:#4D4D4D">
          <div style="color:#ffffff;width:100%;height:8vh"></div>
        </el-col>
        <el-col :span="2" style = "background-color:#5ED5D1" v-if="page==2">
          <el-button type="text" style="color:#ffffff;width:100%;height:8vh;font-weight:600" @click="taskPage">
            <span style="font-size:1.4vw">任务</span>
          </el-button>
        </el-col>
        <el-col :span="2" style = "background-color:#4D4D4D" v-else>
          <el-button type="text" style="color:#ffffff;width:100%;height:8vh;font-weight:600"  @click="taskPage">
            <span style="font-size:1.4vw">任务</span>
          </el-button>
        </el-col>
        <el-col :span="1" style = "background-color:#4D4D4D">
          <div style="color:#ffffff;width:100%;height:8vh"></div>
        </el-col>
        <el-col :span="2" style = "background-color:#5ED5D1" v-if="page==3">
          <el-button type="text" style="color:#ffffff;width:100%;height:8vh;font-weight:600"  @click="helpPage">
            <span style="font-size:1.4vw">帮助</span>
          </el-button>
        </el-col>
        <el-col :span="2" style = "background-color:#4D4D4D" v-else>
          <el-button type="text" style="color:#ffffff;width:100%;height:8vh;font-weight:600" @click="helpPage">
            <span style="font-size:1.4vw">帮助</span>
          </el-button>
        </el-col>
        <el-col :span="8" style = "background-color:#4D4D4D">
          <div style="color:#ffffff;width:100%;height:8vh"></div>
        </el-col>
        <el-col :span="2" style = "background-color:#4D4D4D">
          <el-button type="text" style="color:#ffffff;width:100%;height:8vh">
            <span style="font-size:1.1vw">{{user.username}}</span>
          </el-button>
        </el-col>
        <el-col :span="1" style = "background-color:#4D4D4D">
          <el-button type="text" style="color:#ffffff;width:100%;height:8vh">
            <span style="font-size:1.1vw">登出</span>
          </el-button>
        </el-col>
      </el-row>
    </el-header>
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

  export default {
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
