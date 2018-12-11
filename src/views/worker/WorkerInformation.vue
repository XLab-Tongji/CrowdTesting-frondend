<template>
  <el-container>
    <!--导航-->
    <WorkerHomepageTopbar/>
    <el-header height="30px" style="">
    </el-header>

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
        <el-col :span="16">
          <el-collapse accordion v-if="information_page_menu==0.0" v-model="activeName">
            <el-collapse-item name="1">
              <template>
                <el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">

                  <el-form-item label="真实姓名">
                    <el-input v-model="worker.name"></el-input>
                  </el-form-item>
                  <el-form-item label="性别">
                    <el-select v-model="worker.gender" placeholder="">
                      <el-option label="女" value="0"></el-option>
                      <el-option label="男" value="1"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="昵称">
                    <el-input v-model="worker.username"></el-input>
                  </el-form-item>
                  <el-form-item label="手机号">
                    <el-input v-model="worker.teleNumber"></el-input>
                  </el-form-item>
                  <el-form-item label="邮箱">
                    <el-input v-model="worker.email"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary">保存</el-button>
                    <el-button @click.native.prevent>取消</el-button>
                  </el-form-item>
                </el-form>
              </template>
              <div>
              </div>
            </el-collapse-item>
          </el-collapse>
          <el-collapse accordion v-if="information_page_menu==1.1">
            <template>
              <el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;margin-top:10vh">
                <el-form-item label="专业">
                  <el-input v-model="worker.major"></el-input>
                </el-form-item>
                <el-form-item label="工作领域">
                  <el-input v-model="worker.workArea"></el-input>
                </el-form-item>
                <el-form-item label="学历水平">
                  <el-input v-model="worker.education"></el-input>
                </el-form-item>
                <el-form-item label="等级">
                  <span style="margin-left:2vh">{{worker.level}}</span>
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
              <section>余额
              </section>
            </template>
          </el-collapse>
          <el-collapse accordion v-if="information_page_menu==1.3">
            <template>
              <section>提现信息
              </section>
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
        activeName: '1',
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
          major:'',
          level:'',
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

<style scoped>

</style>
