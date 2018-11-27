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
          <el-button type="text" style="color:#019ED3;padding-left: 2vw;font-size:1.2vw;font-weight:500;line-height: 5vh" @click="taskSquarePage">广场</el-button>
          <i class="el-icon-caret-right"></i>
          <el-button type="text" style="color:#019ED3;font-size:1.2vw;font-weight:500;line-height: 5vh">{{task.name}}</el-button>
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
      <el-row type="flex" justify="center" style="margin-top:6vh">
        <el-col :span="2" style="text-align: center;font-size:1.3vw;font-weight:500;letter-spacing: 0.2vh;color:#ffffff;border-radius:4px;background-color:#ffffff">
          <el-button type="text" style="width:100%;font-weight:500;color:#ffffff;background-color:#015D73">
            <span style="font-size:1.2vw">测试</span>
          </el-button>
        </el-col>
        <el-col :span="2" style="text-align: center;font-size:1.3vw;font-weight:500;letter-spacing: 0.2vh;color:#ffffff;border-radius:4px;background-color:#ffffff">
          <span style="font-size:1.2vw">&nbsp;</span>
        </el-col>
        <el-col :span="2" style="text-align: center;font-size:1.3vw;font-weight:500;letter-spacing: 0.2vh;color:#ffffff;border-radius:4px;background-color:#ffffff">
          <el-button type="text" style="width:100%;font-weight:500;color:#ffffff;background-color:#015D73">
            <span style="font-size:1.2vw">继续</span>
          </el-button>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top:6vh">
        <el-col :span="7" style="text-align: center;font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 2vh">
            <span style="font-size:1.0vw">项目类型：</span>
            <span style="font-size:1.0vw">{{task.type}}</span>
          </div>
        </el-col>
        <el-col :span="7" style="text-align: center;font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 2vh">
            <span style="font-size:1.0vw">资质：</span>
            <span style="font-size:1.0vw">Level 3</span>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="7" style="text-align: center;font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh">
            <span style="font-size:1.0vw">创建时间：</span>
            <span style="font-size:1.0vw">{{task.create_time}}</span>
          </div>
        </el-col>
        <el-col :span="7" style="text-align: center;font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh">
            <span style="font-size:1.0vw">完成度：</span>
            <span style="font-size:1.0vw">{{task.status}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="7" style="text-align: center;font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh;margin-bottom: 2vh">
            <span style="font-size:1.0vw">项目限制：</span>
            <span style="font-size:1.0vw" v-if="task.restrictions!=null">{{task.restrictions}}</span>
            <span style="font-size:1.0vw" v-else>暂无</span>
          </div>
        </el-col>
        <el-col :span="7" style="text-align: center;font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh;margin-bottom: 2vh">
            <span style="font-size:1.0vw">任务要求：</span>
            <span style="font-size:1.0vw"  v-if="task.requests!=null">{{task.requests}}</span>
            <span style="font-size:1.0vw" v-else>暂无</span>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top:6vh">
        <el-col :span="3" style="font-size:1.3vw;font-weight:500;letter-spacing: 0.1vh;color:#4D4D4D;padding-left:1vw">
          <i class="el-icon-info"></i>
          <span>项目描述</span>
        </el-col>
      </el-row>
      <el-row style="margin-top:2vh">
        <el-col style="font-size:1.1vw;font-weight:500;letter-spacing: 0.1vh;color:#4D4D4D;padding-left:1vw">
          <span v-if="task.description!=null">&nbsp;&nbsp;&nbsp;&nbsp;{{task.description}}</span>
          <span v-else>暂无</span>
        </el-col>
      </el-row>
      <el-row style="margin-top:6vh">
        <el-col :span="3" style="font-size:1.3vw;font-weight:500;letter-spacing: 0.1vh;color:#4D4D4D;padding-left:1vw">
          <i class="el-icon-document"></i>
          <span>样例</span>
        </el-col>
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
        task:
          {
          },
      }
    },
    created()
    {
      let task_id = this.$route.params.task_id;
      let that=this;
      let param = new URLSearchParams();
      param.append('id',task_id);
      axios.get('/api/task/find-by-id',
        {params:{'id': task_id}})
        .then(function (response) {
          let task = response.data.task;
          that.task = task;
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
