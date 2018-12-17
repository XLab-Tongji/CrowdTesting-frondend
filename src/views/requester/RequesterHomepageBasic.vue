<template>
<div>
    <RequesterHomepageTopbar/>
    <el-row>
        <el-col :span="4">
            <RequesterHomepageSidebar/>
        </el-col>
        <el-col :span="20" style="background-color:#F7F6F6">
                <div class="basic_info">
                    <div class="basic_info_title">
                        <span>基本信息</span>
                    </div>
                    <div class="box">
                        <el-form label-position="left" label-width="110px">
                        <el-form-item label="用户名">
                          <el-input v-model="requester.username"></el-input>
                        </el-form-item>
                          <el-form-item label="真实姓名">
                            <el-input v-model="requester.name"></el-input>
                          </el-form-item>
                          <el-form-item label="性别">
                          <el-input v-model="requester.gender"></el-input>
                        </el-form-item>
                          <el-form-item label="年龄">
                            <el-input v-model="requester.age"></el-input>
                          </el-form-item>
                        <el-form-item label="邮箱">
                        <el-input v-model="requester.eMail"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号码">
                        <el-input v-model="requester.teleNumber"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button  type="primary" @click="modify" class="login_button">保存信息</el-button>
                        </el-form-item>
                      </el-form>
                    </div>
                </div>

        </el-col>
    </el-row>

</div>
</template>


<script>
import RequesterHomepageTopbar from '@/components/RequesterNavi/RequesterHomepageTopbar.vue'
import RequesterHomepageSidebar from '@/components/RequesterNavi/RequesterHomepageSidebar.vue'
import * as axios from 'axios'

    export default {
        components:{
            RequesterHomepageTopbar,
            RequesterHomepageSidebar
        },
        methods: {

        },
        data(){
            return{
               requester:{
                 requesterId: 0,
                 username: "",
                 name: "",
                 teleNumber: "",
                 eMail: "",
                 research_field:"",
                 institutionName:'',
                 address: "",
                 payMethod: "",
                 gender:"",
                 age: 30,
                 balance:0,
                 email:'',
               }
            }
        },
        created(){
          let that = this;
          axios({
            method:	'get',
            url: '/api/requester/find-myself',
          })
            .then(function (response) {
              console.log(response);
             that.requester = response.data.requester;
            })
            .catch(function (error) {
              alert(error);
            });
        }
    }
</script>

<style scoped>
template {
    height: 100%;
    width:100%
    }
.basic_info{
    margin:30px;
    background-color: #fff;
    height: 640px;
    border: solid 1px #DCDFE6;
}
.basic_info_title{
    width: 600px;
    padding-top: 40px;
    padding-bottom: 20px;
    padding-left: 10px;
    margin-left: 50px;
    font-size: 25px;
    border-bottom:solid 1px #E4E7ED;
}
.box{
    width: 30%;
    padding-left: 60px;
    padding-top: 50px;
}
</style>
