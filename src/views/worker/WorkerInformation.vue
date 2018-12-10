<template>
  <el-container>
    <!--导航-->
    <WorkerHomepageTopbar/>
    <el-header height="30px" style=""></el-header>

    <el-main v-if="page==4">
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
            <el-menu-item index="1" @click="BasicInformation">
              <i class="el-icon-document"></i>
              <span slot="title">基本信息</span>
            </el-menu-item>
            <el-menu-item index="2" @click="DetailInformation">
              <i class="el-icon-document"></i>
              <span slot="title">详细信息</span>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-info"></i>
                <span slot="title">我的钱包</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1" @click="information3_1">余额</el-menu-item>
                <el-menu-item index="3-2" @click="information3_2">提现</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col span="1">
          <div style="color:#ffffff;width:100%;height:8vh"></div>
        </el-col>
        <el-col span="17">
          <el-collapse accordion v-if="information_page_menu==0.0">
              <template>
                <el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">

                  <el-form-item label="真实姓名">
                    <el-input v-model="worker.username"></el-input>
                  </el-form-item>
                  <el-form-item label="性别">
                    <el-select v-model="form.gender" placeholder="">
                      <el-option label="女" value="女"></el-option>
                      <el-option label="男" value="男"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="昵称">
                    <el-input v-model="worker.name"></el-input>
                  </el-form-item>
                  <el-form-item label="手机号">
                    <el-input v-model="worker.teleNumber"></el-input>
                  </el-form-item>
                  <el-form-item label="邮箱">
                    <el-input v-model="worker.email"></el-input>
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input v-model="form.password"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary">保存</el-button>
                    <el-button @click.native.prevent>取消</el-button>
                  </el-form-item>
                </el-form>
              </template>
              <div>
              </div>
        
          </el-collapse>
          <el-collapse accordion v-if="information_page_menu==1.1">
            <template>
              <el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">

                <el-form-item label="教育背景">
                  <el-select v-model="worker.education" placeholder="">
                    <el-option label="本科" value="本科"></el-option>
                    <el-option label="研究生" value="研究生"></el-option>
                    <el-option label="博士生" value="博士生"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="专业">
                  <el-input v-model="form.major"></el-input>
                </el-form-item>
                <el-form-item label="工作领域">
                  <el-input v-model="worker.workArea"></el-input>
                </el-form-item>
                <el-form-item label="工作地点">
                  <el-input v-model="form.workPlace"></el-input>
                </el-form-item>
            
                <el-form-item label="上网时长">
                  <el-select v-model="form.worktime" placeholder="">
                    <el-option label="1h" value="1h"></el-option>
                    <el-option label="2h" value="2h"></el-option>
                    <el-option label="3h" value="3h"></el-option>
                    <el-option label="4h" value="4h"></el-option>
                    <el-option label="5h" value="5h"></el-option>
                    <el-option label="6h" value="6h"></el-option>
                    <el-option label="7h" value="7h"></el-option>
                    <el-option label="8h" value="8h"></el-option>
                    <el-option label="9h" value="9h"></el-option>
                    <el-option label="10h" value="10h"></el-option>
                    <el-option label="11h" value="11h"></el-option>
                    <el-option label="12h" value="12h"></el-option>
                    <el-option label="13h" value="13h"></el-option>
                    <el-option label="14h" value="14h"></el-option>
                    <el-option label="15h" value="15h"></el-option>
                    <el-option label="16h" value="16h"></el-option>
                    <el-option label="17h" value="17h"></el-option>
                    <el-option label="18h" value="18h"></el-option>
                    <el-option label="19h" value="19h"></el-option>
                    <el-option label="20h" value="20h"></el-option>
                    <el-option label="21h" value="21h"></el-option>
                    <el-option label="22h" value="22h"></el-option>
                    <el-option label="23h" value="23h"></el-option>
                    <el-option label="24h" value="24h"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">保存</el-button>
                  <el-button @click.native.prevent>取消</el-button>
                </el-form-item>
              </el-form>
            </template>
          </el-collapse>
          <el-collapse accordion v-if="information_page_menu==1.2">
            <template>

              <el-card class="box-card">
              <div slot="header" class="clearfix">
              <span>余额信息</span>
              </div>

              </el-card>
            </template>
          </el-collapse>
          <el-collapse accordion v-if="information_page_menu==1.3">
            <template>
                  <el-table
                  :data="tableData"
                   style="width: 100%">
                   <el-table-column
                   prop="date"
                   label="日期"
                    width="180">
                </el-table-column>
                 <el-table-column
                  prop="money"
                   label="提现金额"
                   width="180">
                   </el-table-column>
                    <el-table-column
                   prop="method"
                     label=提现方式>
                  </el-table-column>
                   </el-table>
               </template>
          </el-collapse>
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
     components:{
        WorkerHomepageTopbar,
      },
    methods: {
      BasicInformation(){
        this.information_page_menu=0.0;
      },
      DetailInformation(){
        this.information_page_menu=1.1;
      },
      information3_1(){
        this.information_page_menu=1.2;
      },
      information3_2(){
        this.information_page_menu=1.3;
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
        this.information_page_menu='0.0';
        this.page=1;
        this.$forceUpdate();
      },
      taskPage(){
        this.information_page_menu='0.0';
        this.page=2;
        this.$forceUpdate();
      },
      helpPage(){
        this.information_page_menu='0.0';
        this.page=3;
        this.$forceUpdate();
      },
      informationPage(){
        this.information_page_menu='0.0';
        this.page=4;
        this.$forceUpdate();
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      onSubmit() {
        console.log('submit!');
      }
    },

    data() {
      return {
        user: {
          username: this.$store.state.username,
          level: 2
        },
        page: 4,
        information_page_menu: "0.0",
        url_crowdsourcing: require("../../../static/crowdTestingTag.png"),
        input_search: '',
        input_advice: '',
        information: [],
        activeNames: [],
        form:
          {
            name: '',
            region: '',
            gender: '',
            graduation: '',
            workdomain: '',
            workPlace: '',
            worktime: '',
            internettime: '',
            major: '',
            background: '',
            email: '',
            password: '',
            number: '',
            money:'',
            method:'',
          },
        worker: {
          age: 0,
          balance: 0,
          education: '',
          email: '',
          name: '',
          teleNumber: '',
          username: "good_day",
          withdrawnMethod: '',
          workArea: '',
          workerId:'',
        },
      }

    },

    created()
    {
      let that=this
      if(this.$route.params.page!=null)
      {
        this.page = this.$route.params.page;
      }
      axios.get('/api/worker/find-myself')
        .then(function (response) {
          console.log(response);
          that.worker = response.data.worker;
          that.$forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }
</script>

<style>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
