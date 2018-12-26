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
                        <span>详细信息</span>
                    </div>
                    <div class="box">
                        <el-form label-position="left" label-width="110px" :model="user" >
                        <el-form-item label="公司/机构名称">
                        <el-input v-model="requester.institutionName"></el-input>
                        </el-form-item>
                        <el-form-item label="地址">
                            <el-input v-model="requester.address"></el-input>
                        </el-form-item>
                        <el-form-item label="研究领域">
                        <el-input v-model="requester.research_field"></el-input>
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
            modify(){
                let that = this;
                let param = new URLSearchParams();
                param.append('teleNumber',that.requester.teleNumber);
                param.append('username',that.requester.username);
                param.append('name',that.requester.name);
                param.append('eMail',that.requester.eMail);
                param.append('research_field',that.requester.research_field); 
                param.append('institutionName',that.requester.institutionName);
                param.append('address',that.requester.address);
                param.append('payMethod',that.requester.payMethod);
                param.append('gender',that.requester.gender);      
                param.append('age',that.requester.age);       
                axios({
                    method:	'post',
                    url: '/api/requester/update',
                })
                    .then(function (response) {
                        console.log(response);
                        if(response.data.code[0] == "2"){
                            that.$message('修改成功！');                           
                            
                        }
                        else if(response.data.code[0] == "4") {
                        that.wrong_pwd("输入格式有误")              
                        }  
                        else if(response.data.code == "500") {
                        that.wrong_pwd("服务器错误")              
                        }                      
                    })
                    .catch(function (error) {
                    alert(error);
                    });
            }
        },
        data(){
            return{
               requester:{
                 requesterId: '',
                 username: "",
                 name: "",
                 teleNumber: "",
                 eMail: "",
                 research_field:"",
                 institutionName:'',
                 address: "",
                 payMethod: "",
                 gender:"",
                 age: '',
                 balance:"",
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
