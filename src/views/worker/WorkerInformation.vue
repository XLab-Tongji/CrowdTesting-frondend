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
        <el-col :span="1">
          <div style="color:#ffffff;width:100%;height:8vh"></div>
        </el-col>
        <el-col :span="17">
          <el-collapse accordion v-if="information_page_menu==0.0">
              <template>
                <el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">

                  <el-form-item label="真实姓名">
                    <el-input v-model="worker.username"></el-input>
                  </el-form-item>
                  <el-form-item label="性别">
                    <el-select v-model="worker.gender" placeholder="">
                      <el-option label="女" value="女"></el-option>
                      <el-option label="男" value="男"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="昵称">
                    <el-input v-model="worker.name"></el-input>
                  </el-form-item>
                   <el-form-item label="年龄">
                    <el-input v-model="worker.age"></el-input>
                  </el-form-item>
                  <el-form-item label="手机号">
                    <el-input v-model="worker.teleNumber"></el-input>
                  </el-form-item>
                  <el-form-item label="邮箱">
                    {{worker.email}}
                  </el-form-item>
                  <!--<el-form-item label="密码">
                    <el-button plain @click="updatepassword">修改密码</el-button>
                  </el-form-item>-->
                   <el-form-item label="经验值">
                    {{  worker.level}}
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="confirmupdate">保存</el-button>
                    <el-button plain @click="cancel">取消</el-button>
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
                  <el-input v-model="worker.major"></el-input>
                </el-form-item>

                <el-form-item label="工作领域">
                   <el-select v-model="worker.workArea" placeholder="">
                    <el-option label="计算机" value="计算机"></el-option>
                    <el-option label="医药" value="医药"></el-option>
                    <el-option label="教育" value="教育"></el-option>
                    <el-option label="财经" value="财经"></el-option>
                    <el-option label="政法" value="政法"></el-option>
                    <el-option label="科研" value="科研"></el-option>
                    <el-option label="公益" value="公益"></el-option>
                    <el-option label="行政" value="行政"></el-option>
                    <el-option label="交通" value="交通"></el-option>
                    <el-option label="音乐" value="音乐"></el-option>
                    <el-option label="设计" value="设计"></el-option>
                  </el-select>
                </el-form-item>
               
                <el-form-item>
                  <el-button type="primary" @click="confirmupdate">保存</el-button>
                  <el-button plain  @click="cancel">取消</el-button>
                </el-form-item>
              </el-form>
            </template>
          </el-collapse>
          <el-collapse accordion v-if="information_page_menu==1.2">
            <template>

              <el-card class="box-card">
              <div slot="header" class="clearfix">
               <span style="font-size:15px; ">
                                    余额:
                                </span><br>
                                <p style="font-size:30px;">
                                    <span >{{worker.balance}}</span>  元
                                </p>
                <div class="operation">
                            <span>
                                <el-button type="success"  @click="open">提现</el-button>
                            </span>
                        </div>
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
  
  let self = this;
  export default {
     components:{
        WorkerHomepageTopbar,
      },
    methods: {
      open() {
        this.$message('余额不足，无法提现');
      },
      cancel() {
        this.$message('系统将不会保留你的任何更改');
      },
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
      },
      updatepassword() {
        let that = this
        this.button_disabled = true;
        this.role = ""
        if(this.password == ""){
          this.$message({
            message: '请输入原密码',
            type: 'warning'
          })
        }
        else{
          let param = new URLSearchParams();
          let self = this;
          param.append('password',this.password);
          axios({
            method: 'put',
            url: '/api/worker/find-myself',
            data:param
          })
          .then(function(reponse) {
            console.log(reponse);
            if(reponse.data.code[0] == "2") {
              let token = response.data.X_Auth_Token;
              that.$store.commit('password', token);
                  that.wrong_pwd = "";
                  console.log(that.$store.state.token);
                  axios.defaults.headers.common['X_Auth_Token'] = that.$store.state.token;
                  axios.get('/api/worker/find-myself')
                    .then(function (response) {
                      console.log(response);
                      let username = response.data.worker.username;
                      let user_information = {
                        username :'',
                        level:0,
                      }
                      user_information.username = username;
                      that.$store.commit('password', user_information);
                      that.$router.replace("/worker_information");
                      that.button_disabled = false;
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }
                else if(response.data.code[0] == "4") {
                  that.wrong_pwd = "用户名或密码错误";
                  that.button_disabled = false;
                }
                else if(response.data.code[0] == "5") {
                  that.wrong_pwd("服务器错误")
                  that.button_disabled = false;
                }
              })
              .catch(function (error) {
                alert(error);
                token_pointer.button_disabled = false;
              })
        }
      },
      confirmupdate() {
        let that = this
        this.button_disabled = true;
          let param = new URLSearchParams();
          let self = this;
          param.append('username',this.worker.username);
          param.append('name',this.worker.name);
          param.append('teleNumber',this.worker.teleNumber);
          param.append('eMail',this.worker.eMail);
          param.append('education',this.worker.education);
          param.append('workArea',this.worker.workArea);
          param.append('age',this.worker.age);
          param.append('gender',this.worker.gender);
          param.append('major',this.worker.major);
          axios({
            method: 'put',
            url: '/api/worker/update',
            data:param
          })
          .then(function(reponse) {
            console.log(reponse);
            if(reponse.data.code[0] == "2") {
                   self.$message("修改成功")
                }
                else if(response.data.code[0] == "4") {
                  that.wrong_pwd = "用户名或密码错误";
                  that.button_disabled = false;
                }
                else if(response.data.code[0] == "5") {
                  that.wrong_pwd("服务器错误")
                  that.button_disabled = false;
                }
              })
              .catch(function (error) {
                alert(error);
                token_pointer.button_disabled = false;
              })
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
            workArea: '',
            worktime: '',
            major: '',
            background: '',
            email: '',
            password: '',
            number: '',
            money:'',
            method:'',
            age:'',
            level:'',
          },
        worker: {
          age: '',
          balance: '',
          education: '',
          email: '',
          name: '',
          teleNumber: '',
          username: '',
          withdrawnMethod: '',
          workArea: '',
          workerId:'',
          level:'',
          password:'',
          gender:'男',
          major:'',
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
    width: 640px;
  }
  .operation{
    margin-top: 50px;
}
.operation span{
    margin:0 10px;
}
</style>