<template>
  <el-container>
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

        <el-col :span="2" style = "background-color:#5ED5D1" v-if="page==4">
          <el-button type="text" style="color:#ffffff;width:100%;height:8vh;font-weight:600"  @click="informationPage">
            <span style="font-size:1.4vw">{{user.username}}</span>
          </el-button>
        </el-col>
        <el-col :span="2" style = "background-color:#4D4D4D" v-else>
          <el-button type="text" style="color:#ffffff;width:100%;height:8vh;font-weight:600" @click="informationPage">
            <span style="font-size:1.4vw">{{user.username}}</span>
          </el-button>
        </el-col>

        <el-col :span="1" style = "background-color:#4D4D4D">
          <el-button type="text" style="color:#ffffff;width:100%;height:8vh">
            <span style="font-size:1.1vw">登出</span>
          </el-button>
        </el-col>
      </el-row>
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
        <el-col span="1">
          <div style="color:#ffffff;width:100%;height:8vh"></div>
        </el-col>
        <el-col span="17">
          <el-collapse accordion v-if="information_page_menu==0.0">
            <el-collapse-item>
              <template>
	            <el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
	            <el-form-item label="真实姓名">
		           	<el-input v-model="form.name"></el-input>
	          	</el-form-item>
	          	<el-form-item label="性别">
	        	  	<el-select v-model="form.gender" placeholder="">
		      	    	<el-option label="女" value="女"></el-option>
		       	    	<el-option label="男" value="男"></el-option>
	        	  	</el-select>
	           	</el-form-item>
              <el-form-item label="昵称">
		           	<el-input v-model="form.nickname"></el-input>
	          	</el-form-item>
              <el-form-item label="手机号">
		           	<el-input v-model="form.number"></el-input>
	          	</el-form-item>
              <el-form-item label="邮箱">
	        	   	<el-input v-model="form.email"></el-input>
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
            </el-collapse-item>
          </el-collapse>
          <el-collapse accordion v-if="information_page_menu==1.1">
          <template>
           	<el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">

        		<el-form-item label="教育背景">
		      	<el-select v-model="form.background" placeholder="">
			      	<el-option label="本科" value="本科"></el-option>
		       		<el-option label="研究生" value="研究生"></el-option>
              <el-option label="博士生" value="博士生"></el-option>
		      	</el-select>
        		</el-form-item>

            <el-form-item label="入学年份">
	      		<el-select v-model="form.enrollment" placeholder="">
		      		<el-option label="2004" value="2004"></el-option>
			      	<el-option label="2005" value="2005"></el-option>
              <el-option label="2006" value="2006"></el-option>
              <el-option label="2007" value="2007"></el-option>
			       	<el-option label="2008" value="2008"></el-option>
              <el-option label="2009" value="2009"></el-option>
              <el-option label="2010" value="2010"></el-option>
			      	<el-option label="2011" value="2011"></el-option>
              <el-option label="2012" value="2012"></el-option>
              <el-option label="2013" value="2013"></el-option>
	       			<el-option label="2014" value="2014"></el-option>
              <el-option label="2015" value="2015"></el-option>
              <el-option label="2016" value="2016"></el-option>
	      			<el-option label="2017" value="2017"></el-option>
              <el-option label="2018" value="2018"></el-option>
	      		</el-select>
	        	</el-form-item>

            <el-form-item label="毕业年份">
		         	<el-select v-model="form.graduation" placeholder="">
		        		<el-option label="2004" value="2004"></el-option>
			        	<el-option label="2005" value="2005"></el-option>
                <el-option label="2006" value="2006"></el-option>
                <el-option label="2007" value="2007"></el-option>
			        	<el-option label="2008" value="2008"></el-option>
                <el-option label="2009" value="2009"></el-option>
                <el-option label="2010" value="2010"></el-option>
			         	<el-option label="2011" value="2011"></el-option>
                <el-option label="2012" value="2012"></el-option>
                <el-option label="2013" value="2013"></el-option>
		        		<el-option label="2014" value="2014"></el-option>
                <el-option label="2015" value="2015"></el-option>
                <el-option label="2016" value="2016"></el-option>
		        		<el-option label="2017" value="2017"></el-option>
                <el-option label="2018" value="2018"></el-option>
		         	</el-select>
	         	</el-form-item>

            <el-form-item label="专业">
		        	<el-input v-model="form.major"></el-input>
	          	</el-form-item>
            <el-form-item label="工作领域">
	         		<el-input v-model="form.workdomain"></el-input>
         		</el-form-item>
            <el-form-item label="工作地点">
	        		<el-input v-model="form.workplace"></el-input>
	         	</el-form-item>
            <el-form-item label="在线时间">
	          	<el-input v-model="form.worktime"></el-input>
	          </el-form-item>
            <el-form-item label="上网时长">
		        	<el-select v-model="form.internettime" placeholder="">
			        	<el-option label="1" value="1"></el-option>
		        		<el-option label="2" value="2"></el-option>
                <el-option label="3" value="3"></el-option>
                <el-option label="4" value="4"></el-option>
		         		<el-option label="5" value="5"></el-option>
                <el-option label="6" value="6"></el-option>
                <el-option label="7" value="7"></el-option>
		        		<el-option label="8" value="8"></el-option>
                <el-option label="9" value="9"></el-option>
                <el-option label="10" value="10"></el-option>
		         		<el-option label="11" value="11"></el-option>
                <el-option label="12" value="12"></el-option>
                <el-option label="13" value="13"></el-option>
		        		<el-option label="14" value="14"></el-option>
                <el-option label="15" value="15"></el-option>
                <el-option label="16" value="16"></el-option>
			        	<el-option label="17" value="17"></el-option>
                <el-option label="18" value="18"></el-option>
                <el-option label="19" value="19"></el-option>
				        <el-option label="20" value="20"></el-option>
                <el-option label="21" value="21"></el-option>
                <el-option label="22" value="22"></el-option>
			        	<el-option label="23" value="23"></el-option>
                <el-option label="24" value="24"></el-option>
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

  export default {
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

      data(){
        return{
          user:{
            username :"UserName",
            level:2
          },
          page:1,
          information_page_menu:"0.0",
          url_crowdsourcing:require("../../../static/crowdTestingTag.png"),
          input_search: '',
          input_advice: '',
          form:
            {
              name:'',
              region:'',
            },
        }
      }
    }
</script>

<style scoped>

</style>
