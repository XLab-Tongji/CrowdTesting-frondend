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
      <el-row>
        <el-col span="12">
          <el-button type="text" style="color:#019ED3;padding-left: 2vw;font-size:1.2vw;font-weight:500;line-height: 5vh">广场</el-button>
          <i class="el-icon-caret-right"></i>
          <el-button type="text" style="color:#019ED3;font-size:1.2vw;font-weight:500;line-height: 5vh">{{task.name}}</el-button>
          <i class="el-icon-caret-right"></i>
          <el-button type="text" style="color:#019ED3;font-size:1.2vw;font-weight:500;line-height: 5vh">测试</el-button>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="14" style="text-align: center">
          <span style="font-size:2.5vw;font-weight:600;letter-spacing: 0.2vh;color:#015D73">{{task.name}}</span>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top:3vh">
        <el-col :span="2" style="text-align: center;font-size:1.3vw;font-weight:500;letter-spacing: 0.2vh;color:#ffffff;border-radius:4px;background-color:#5ED5D1">
          <i class="el-icon-loading"></i>
          <span>进行中</span>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import * as Vue from 'autoprefixer'

  export default {
    methods: {
      orderByWorkerNum () {
        var workerNum = document.getElementById('workerNum');
        var reward = document.getElementById('reward');
        var date = document.getElementById('date');
        workerNum.style.color = '#5ED5D1';
        reward.style.color = '#4D4D4D';
        date.style.color = '#4D4D4D';
      },
      orderByReward () {
        var workerNum = document.getElementById('workerNum');
        var reward = document.getElementById('reward');
        var date = document.getElementById('date');
        workerNum.style.color = '#4D4D4D';
        reward.style.color = '#5ED5D1';
        date.style.color = '#4D4D4D';
        this.taskList[0] = {
          "name": "a",
          "description": "this is a task to distinguish",
          "reward": 40,
          "status": "60%",
          "type": "asdf data",
          "restrictions": null,
          "requests": null,
          "requester_id": 1,
          "task_id": 8,
          "create_time": "2017-12-31",
        };
        this.$forceUpdate();
      },
      orderByDate () {
        let workerNum = document.getElementById('workerNum');
        let reward = document.getElementById('reward');
        let date = document.getElementById('date');
        workerNum.style.color = '#4D4D4D';
        reward.style.color = '#4D4D4D';
        date.style.color = '#5ED5D1';
      },
      click () {
        alert("a");
      },
      login () {
        this.$router.replace('/login')
      },
      register () {
        this.$router.replace('/register')
      },
      taskSquarePage () {
        this.help_page_menu = '0.0';
        this.page = 1;
        this.$forceUpdate();
      },
      taskPage () {
        this.help_page_menu = '0.0';
        this.page = 2;
        this.$forceUpdate();
      },
      helpPage () {
        this.help_page_menu = '0.0';
        this.page = 3;
        this.$forceUpdate();
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
          username: "hyq",
          level: 2
        },
        page: 1,
        help_page_menu: "0.0",
        url_crowdsourcing: require("../../../static/crowdTestingTag.png"),
        input_search: '',
        input_advice: '',
        task:
          {
            "name": "市场调研",
            "description": "this is a task to distinguish",
            "reward": 40,
            "status": "60%",
            "type": "collecting data",
            "restrictions": null,
            "requests": null,
            "requester_id": 1,
            "task_id": 8,
            "create_time": "2017-12-31",
            "level": 3
          },
      }
    }
  }
</script>

<style scoped>

</style>
