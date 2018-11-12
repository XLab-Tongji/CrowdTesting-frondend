<template>
  <el-ontainer>
    <!--导航-->
    <el-header height="12vh">
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
    <el-main v-if="page==1">
      <el-row style="color:#4D4D4D;margin-bottom: 3vh">
        <span style="padding-left: 1vw">
        <b style="font-size:1.7vw;letter-spacing: 0.2vh">任务广场</b>
        </span>
      </el-row>
      <el-row style="color:#4D4D4D">
        <el-col span="12">
          <span style="font-size:1.4vw;letter-spacing: 0.2vh;padding-left: 1vw;color:#4D4D4D;font-weight:600">筛选</span>
          <span style="font-size:1.7vw;letter-spacing: 0.2vh;padding-left: 1vw;color:#E6E6E6">|</span>
          <el-button type="text" style="color:#5ED5D1" @click="orderByWorkerNum" id="workerNum">
            <span style="font-size:1.4vw;font-weight:600">热度</span>
          </el-button>
          <el-button type="text" style="color:#4D4D4D" @click="orderByReward" id="reward">
            <span style="font-size:1.4vw;font-weight:600">报酬</span>
          </el-button>
          <el-button type="text" style="color:#4D4D4D" @click="orderByDate" id="date">
            <span style="font-size:1.4vw;font-weight:600">创建时间</span>
          </el-button>
        </el-col>
        <el-col span="12">
          <el-input v-model="input_search" placeholder="search" suffix-icon="el-icon-search" style="width:98%"></el-input>
        </el-col>
      </el-row>
      <el-row style="background-color:#F2F0F0;margin-top:3vh;height:5vh">
        <el-col span="4">
          <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;">需求方</span>
        </el-col>
        <el-col span="9">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">项目描述</span>
        </el-col>
        <el-col span="2">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">热度</span>
        </el-col>
        <el-col span="2">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">报酬</span>
        </el-col>
        <el-col span="4">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">创建时间</span>
        </el-col>
        <el-col span="3">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">行为</span>
        </el-col>
      </el-row>
      <el-collapse accordion v-for = "task in taskList" id = "collapse">
        <el-collapse-item v-if="user.level<task.level">
          <template slot="title">
            <el-col span="4">
              <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;">{{task.requester_id}}</span>
            </el-col>
            <el-col span="9" v-if="task.type!=null">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.type}}</span>
            </el-col>
            <el-col span="9" v-else>
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">暂无</span>
            </el-col>
            <el-col span="2">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">10000</span>
            </el-col>
            <el-col span="2">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.reward}}</span>
            </el-col>
            <el-col span="3">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.create_time}}</span>
            </el-col>
            <el-col :span="1">
            <el-button type="text" style="height:5vh;font-weight:500;color:#000000" @click="click">
              <span style="font-size:1.0vw">preview</span>
            </el-button>
            </el-col>
            <el-col :span="2">
              <el-button type="text" style="width:70%;height:5vh;font-weight:500;color:#000000;margin-left:3vh" @click="click">
                <span style="height:5vh;font-weight:500;color:#000000">Quality</span>
              </el-button>
            </el-col>
          </template>
          <div style="background-color: #F2F0F0">
            <el-row>
              <el-col span="13">
                <span style="color:#4D4D4D;padding-left: 1vw">Description:</span>
              </el-col>
              <el-col span="6">
                <span style="color:#4D4D4D">Qualification</span>
              </el-col>
              <el-col span="5">
                <span style="color:#4D4D4D">Level:&nbsp;&nbsp;{{task.level}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col span="13">
                <span style="color:#4D4D4D;padding-left: 1vw" v-if="task.description!=null">{{task.description}}</span>
                <span style="color:#4D4D4D;padding-left: 1vw" v-else>暂无</span>
              </el-col>
              <el-col span="6">
                <span style="color:#4D4D4D" v-if="task.requests!=null">{{task.requests}}</span>
                <span style="color:#4D4D4D" v-else>暂无</span>
              </el-col>
              <el-col span="4">
                <i class="el-icon-error"></i>
                <span style="color:#4D4D4D">Not enough.</span>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>
        <el-collapse-item v-else>
          <template slot="title">
            <el-row style="background-color: #5ED5D1">
            <el-col span="4">
              <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;">{{task.requester_id}}</span>
            </el-col>
            <el-col span="9" v-if="task.type!=null">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.type}}</span>
            </el-col>
            <el-col span="9" v-else>
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">暂无</span>
            </el-col>
            <el-col span="2">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">10000</span>
            </el-col>
            <el-col span="2">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.reward}}</span>
            </el-col>
            <el-col span="3">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.create_time}}</span>
            </el-col>
            <el-col :span="1">
              <el-button type="text" style="height:5vh;font-weight:500;color:#000000" @click="click">
                <span style="font-size:1.0vw">preview</span>
              </el-button>
            </el-col>
            <el-col :span="2">
              <el-button type="text" style="width:70%;height:5vh;font-weight:500;color:#ffffff;background-color:#015D73;margin-left:3vh">
                <span style="font-size:1.0vw">Accept</span>
              </el-button>
            </el-col>
            </el-row>
          </template>
          <div style="background-color: #4D8D9D">
            <el-row>
              <el-col span="13">
                <span style="color:#ffffff;padding-left: 1vw">Description:</span>
              </el-col>
              <el-col span="6">
                <span style="color:#ffffff">Qualification</span>
              </el-col>
              <el-col span="5">
                <span style="color:#ffffff">Level:&nbsp;&nbsp;{{task.level}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col span="13">
                <span style="color:#ffffff;padding-left: 1vw" v-if="task.description!=null">{{task.description}}</span>
                <span style="color:#ffffff;padding-left: 1vw" v-else>暂无</span>
              </el-col>
              <el-col span="6">
                <span style="color:#ffffff" v-if="task.requests!=null">{{task.requests}}</span>
                <span style="color:#ffffff" v-else>暂无</span>
              </el-col>
              <el-col span="4">
                <i class="el-icon-success"></i>
                <span style="color:#ffffff">Enough.</span>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>
      </el-collapse>
      <div class="block" style="text-align: center;margin-top:6vh">
        <el-pagination
          layout="prev, pager, next"
          :total="taskList.length">
        </el-pagination>
      </div>
    </el-main>
    <el-main v-if="page==2">
      <el-row style="color:#4D4D4D;margin-bottom: 3vh">
        <el-col span="12">
          <span style="padding-left: 1vw">
          <b style="font-size:1.7vw">Task</b>
          </span>
        </el-col>
        <el-col span="12">
          <el-input v-model="input_search" placeholder="search" suffix-icon="el-icon-search" style="width:98%"></el-input>
        </el-col>
      </el-row>
      <el-row style="background-color:#F2F0F0;margin-top:3vh;height:5vh">
        <el-col span="4">
          <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh">需求方</span>
        </el-col>
        <el-col span="9">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">项目描述</span>
        </el-col>
        <el-col span="2">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">报酬</span>
        </el-col>
        <el-col span="3">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">创建时间</span>
        </el-col>
        <el-col span="3">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">完成度</span>
        </el-col>
        <el-col span="3">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">备注</span>
        </el-col>
      </el-row>
      <el-collapse accordion v-for = "personalTask in personalTaskList">
        <el-collapse-item v-if="personalTask.status!='100%'">
          <template slot="title">
            <el-col span="4">
              <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;">{{personalTask.requester_id}}</span>
            </el-col>
            <el-col span="9" v-if="personalTask.type!=null">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.type}}</span>
            </el-col>
            <el-col span="9" v-else>
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">暂无</span>
            </el-col>
            <el-col span="2">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.reward}}</span>
            </el-col>
            <el-col span="3">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.create_time}}</span>
            </el-col>
            <el-col span="2">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.status}}</span>
            </el-col>
            <el-col :span="2">
              <el-button type="text" style="width:100%;height:5vh;font-weight:500;color:#ffffff;background-color:#015D73;margin-left:3vh">
                <span style="font-size:1.0vw">Continue</span>
              </el-button>
            </el-col>
          </template>
          <div style="background-color: #F2F0F0">
            <el-row>
              <el-col span="13">
                <span style="color:#4D4D4D;padding-left: 1vw">Description:</span>
              </el-col>
              <el-col span="6">
                <span style="color:#4D4D4D">Qualification</span>
              </el-col>
              <el-col span="5">
                <i class="el-icon-error"></i>
                <span style="color:#4D4D4D">Not yet finished</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col span="13">
                <span style="color:#4D4D4D;padding-left: 1vw" v-if="personalTask.description!=null">{{personalTask.description}}</span>
                <span style="color:#4D4D4D;padding-left: 1vw" v-else>暂无</span>
              </el-col>
              <el-col span="6">
                <span style="color:#4D4D4D" v-if="personalTask.requests!=null">{{personalTask.requests}}</span>
                <span style="color:#4D4D4D" v-else>暂无</span>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>
        <el-collapse-item v-else>
          <template slot="title">
            <el-row style="background-color: #5ED5D1">
              <el-col span="4">
                <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;">{{personalTask.requester_id}}</span>
              </el-col>
              <el-col span="9" v-if="personalTask.type!=null">
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.type}}</span>
              </el-col>
              <el-col span="9" v-else>
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">暂无</span>
              </el-col>
              <el-col span="2">
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.reward}}</span>
              </el-col>
              <el-col span="3">
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.create_time}}</span>
              </el-col>
              <el-col span="2">
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.status}}</span>
              </el-col>
            </el-row>
          </template>
          <div style="background-color: #4D8D9D">
            <el-row>
              <el-col span="13">
                <span style="color:#ffffff;padding-left: 1vw">Description:</span>
              </el-col>
              <el-col span="6">
                <span style="color:#ffffff">Qualification</span>
              </el-col>
              <el-col span="5">
                <i class="el-icon-success"></i>
                <span style="color:#ffffff">Finished</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col span="13">
                <span style="color:#ffffff;padding-left: 1vw" v-if="personalTask.description!=null">{{personalTask.description}}</span>
                <span style="color:#ffffff;padding-left: 1vw" v-else>暂无</span>
              </el-col>
              <el-col span="6">
                <span style="color:#ffffff" v-if="personalTask.requests!=null">{{personalTask.requests}}</span>
                <span style="color:#ffffff" v-else>暂无</span>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>
      </el-collapse>

      <div class="block" style="text-align: center;margin-top:6vh">
        <el-pagination
          layout="prev, pager, next"
          :total="personalTaskList.length">
        </el-pagination>
      </div>
    </el-main>
    <el-main v-else>

    </el-main>
  </el-ontainer>
</template>

<script>
  import * as Vue from 'autoprefixer'

  export default {
      methods: {
        orderByWorkerNum(){
          var workerNum = document.getElementById('workerNum');
          var reward = document.getElementById('reward');
          var date = document.getElementById('date');
          workerNum.style.color = '#5ED5D1';
          reward.style.color = '#4D4D4D';
          date.style.color = '#4D4D4D';
        },
        orderByReward(){
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
            "status": null,
            "type": "asdf data",
            "restrictions": null,
            "requests": null,
            "requester_id": 1,
            "task_id": 8,
            "create_time":"2017-12-31",
          };
          this.$forceUpdate();
        },
        orderByDate(){
          let workerNum = document.getElementById('workerNum');
          let reward = document.getElementById('reward');
          let date = document.getElementById('date');
          workerNum.style.color = '#4D4D4D';
          reward.style.color = '#4D4D4D';
          date.style.color = '#5ED5D1';
        },
        click(){
          alert("a");
        },
        login () {
          this.$router.replace('/login')
        },
        register(){
          this.$router.replace('/register')
        },
        taskSquarePage(){
          this.page=1;
          this.$forceUpdate();
        },
        taskPage(){
          this.page=2;
          this.$forceUpdate();
        },
        helpPage(){
          this.page=3;
          this.$forceUpdate();
        }
      },
      data(){
        return{
          user:{
            username :"hyq",
            level:2
          },
          page:1,
          url_crowdsourcing:require("../../static/crowdTestingTag.png"),
          input_search: '',
          taskList:[
            {
              "name": "big_data",
              "description": "this is a task to distinguish",
              "reward": 40,
              "status": null,
              "type": "collecting data",
              "restrictions": null,
              "requests": null,
              "requester_id": 1,
              "task_id": 8,
              "create_time":"2017-12-31",
              "level":3
            },
            {
              "name": "classify",
              "description": "this is a task to classify",
              "reward": 15,
              "status": null,
              "type": "work",
              "restrictions": null,
              "requests": null,
              "requester_id": 2,
              "task_id": 7,
              "create_time":"2017-12-31",
              "level":2
            },
            {
              "name": "Tag",
              "description": "this is a tagging task",
              "reward": 30,
              "status": null,
              "type": null,
              "restrictions": null,
              "requests": null,
              "requester_id": 1,
              "task_id": 6,
              "create_time":"2017-12-31",
              "level":4
            }
          ],
          personalTaskList:[
            {
              "name": "Tag",
              "description": "this is a tagging task",
              "reward": 30,
              "status": "80%",
              "type": "collecting data",
              "restrictions": null,
              "requests": null,
              "requester_id": 1,
              "task_id": 1,
              "create_time":"2017-12-31",
              "level":3
            },
            {
              "name": "Tag",
              "description": "this is a tagging task",
              "reward": 30,
              "status": "100%",
              "type": "work",
              "restrictions": null,
              "requests": null,
              "requester_id": 1,
              "task_id": 2,
              "create_time":"2017-12-31",
              "level":1
            },
            {
              "name": "Tag",
              "description": "this is a tagging task",
              "reward": 30,
              "status": "70%",
              "type": "work",
              "restrictions": null,
              "requests": null,
              "requester_id": 1,
              "task_id": 3,
              "create_time":"2017-12-31",
              "level":2
            },
            {
              "name": "Tag",
              "description": "this is a tagging task",
              "reward": 30,
              "status": "100%",
              "type": null,
              "restrictions": null,
              "requests": null,
              "requester_id": 1,
              "task_id": 4,
              "create_time":"2017-12-31",
              "level":4
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
