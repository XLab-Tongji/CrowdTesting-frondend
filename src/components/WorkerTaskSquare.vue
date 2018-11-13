<template>
  <el-ontainer>
    <!--导航-->
    <el-header height="12vh" style="">
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



    <el-main v-if="page==3">
      <el-row>
      <el-col :span="6">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#4D4D4D"
          text-color="#fff"
          active-text-color="#5ED5D1">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-question"></i>
              <span>常见问题</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="help1_1">Requster身份</el-menu-item>
              <el-menu-item index="1-2" @click="help1_2">Worker身份</el-menu-item>
              <el-menu-item index="1-3" @click="help1_3">支付/提现方式</el-menu-item>
              <el-menu-item index="1-4" @click="help1_4">合作平台</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-info"></i>
              <span slot="title">新手指南</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1" @click="help2_1">Requster身份</el-menu-item>
              <el-menu-item index="2-2" @click="help2_2">Worker身份</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3" @click="help3">
            <i class="el-icon-document"></i>
            <span slot="title">问题反馈</span>
          </el-menu-item>
          <el-menu-item index="4" @click="help4">
            <i class="el-icon-setting"></i>
            <span slot="title">个人设置</span>
          </el-menu-item>
        </el-menu>
      </el-col>
        <el-col span="1">
          <div style="color:#ffffff;width:100%;height:8vh"></div>
        </el-col>
        <el-col span="17">
          <el-collapse accordion v-if="help_page_menu==0.0">
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                <el-col span="17">
                  <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">什么是TJ众测？</span>
                </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">TJ众测主要解决什么问题？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">使用TJ众测可以完成什么样的工作？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse accordion v-if="help_page_menu==1.1">
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">如何发布一个任务？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">如何对参与工作的员工水平进行限制？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">如何修改我的个人信息？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">任务结果是如何被检查的？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">如何修改任务信息？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse accordion v-if="help_page_menu==1.2">
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">如何参与一个任务？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">如何查看任务详细信息？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">如何修改我的个人信息？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">当我拒绝工作时会发生什么？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">我如何提升我的等级？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse accordion v-if="help_page_menu==1.3">
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">费用是如何计算的？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">在计算时适用什么舍入规则？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">工人的工资是多少？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">支付方式有哪些？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
          </el-collapse>
          <div v-if="help_page_menu==3">
            <el-col span="17">
              <span style="padding-left: 10vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D">请在下方提出宝贵的意见或建议：</span>
            </el-col>
            <el-col span="17" style="padding-left: 10vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D">
              <el-input type="textarea" :rows="10" v-model="input_advice" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col span="17">
              <div style="height:5vh"></div>
            </el-col>
            <el-col span="17" style="padding-left: 10vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D">
              <el-button type="text" style="width:20%;height:5vh;font-weight:500;color:#ffffff;background-color:#015D73;margin-left:25vh">
                <span style="font-size:1.0vw">提交</span>
              </el-button>
            </el-col>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-ontainer>
</template>

<script>
  import * as Vue from 'autoprefixer'

  export default {
      methods: {
        help1_1(){
          this.help_page_menu=1.1;
        },
        help1_2(){
          this.help_page_menu=1.2;
        },
        help1_3(){
          this.help_page_menu=1.3;
        },
        help1_4(){
          this.help_page_menu=1.4;
        },
        help2_1(){
          this.help_page_menu=2.1;
        },
        help2_2(){
          this.help_page_menu=2.2;
        },
        help3(){
          this.help_page_menu=3;
        },
        help4(){
          this.help_page_menu=4;
        },
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
          this.help_page_menu='0.0';
          this.page=1;
          this.$forceUpdate();
        },
        taskPage(){
          this.help_page_menu='0.0';
          this.page=2;
          this.$forceUpdate();
        },
        helpPage(){
          this.help_page_menu='0.0';
          this.page=3;
          this.$forceUpdate();
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      },

      data(){
        return{
          user:{
            username :"hyq",
            level:2
          },
          page:1,
          help_page_menu:"0.0",
          url_crowdsourcing:require("../../static/crowdTestingTag.png"),
          input_search: '',
          input_advice: '',
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
