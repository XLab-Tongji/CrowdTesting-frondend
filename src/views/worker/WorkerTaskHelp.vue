<template>
  <el-container>
    <!--导航-->
    <WorkerHomepageTopbar/>
    <el-header style="height:30px"></el-header>
    <el-main>
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
        <el-col :span="1">
          <div style="color:#ffffff;width:100%;height:8vh"></div>
        </el-col>
        <el-col :span="17">
          <el-collapse accordion v-if="help_page_menu==0.0" class="question">
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col :span="17">
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
                  <el-col :span="17">
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
                  <el-col :span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">使用TJ众测可以完成什么样的工作？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse accordion v-if="help_page_menu==1.1" class="question">
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col :span="17">
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
                  <el-col :span="17">
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
                  <el-col :span="17">
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
                  <el-col :span="17">
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
                  <el-col :span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">如何修改任务信息？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse accordion v-if="help_page_menu==1.2" class="question">
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col :span="17">
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
                  <el-col :span="17">
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
                  <el-col :span="17">
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
                  <el-col :span="17">
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
                  <el-col :span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">我如何提升我的等级？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse accordion v-if="help_page_menu==1.3" class="question">
            <el-collapse-item>
              <template slot="title">
                <el-row style="background-color: #4D4D4D">
                  <el-col :span="17">
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
                  <el-col :span="17">
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
                  <el-col :span="17">
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
                  <el-col :span="17">
                    <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#ffffff">支付方式有哪些？</span>
                  </el-col>
                </el-row>
              </template>
              <div>
              </div>
            </el-collapse-item>
          </el-collapse>
          <div v-if="help_page_menu==3">
            <el-col :span="17">
              <span style="padding-left: 10vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D">请在下方提出宝贵的意见或建议：</span>
            </el-col>
            <el-col :span="17" style="padding-left: 10vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D">
              <el-input type="textarea" :rows="10" v-model="input_advice" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="17">
              <div style="height:5vh"></div>
            </el-col>
            <el-col :span="17" style="padding-left: 10vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D">
              <el-button type="text" style="width:20%;height:5vh;font-weight:500;color:#ffffff;background-color:#015D73;margin-left:25vh">
                <span style="font-size:1.0vw">提交</span>
              </el-button>
            </el-col>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import * as Vue from 'autoprefixer'
  import axios from 'axios'
  import WorkerHomepageTopbar from '@/components/WorkerNavi/WorkerHomepageTopbar.vue'


  export default {
    components: {
      WorkerHomepageTopbar,
    },
    methods: {
      help1_1 () {
        this.help_page_menu = 1.1;
      },
      help1_2 () {
        this.help_page_menu = 1.2;
      },
      help1_3 () {
        this.help_page_menu = 1.3;
      },
      help1_4 () {
        this.help_page_menu = 1.4;
      },
      help2_1 () {
        this.help_page_menu = 2.1;
      },
      help2_2 () {
        this.help_page_menu = 2.2;
      },
      help3 () {
        this.help_page_menu = 3;
      },
      help4 () {
        this.help_page_menu = 4;
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    },
    data () {
      return {
        help_page_menu: 0.0,
        input_advice: '',
      }
    },
  }
</script>

<style>
  .question{
    margin-right:2vh;
  }
</style>
