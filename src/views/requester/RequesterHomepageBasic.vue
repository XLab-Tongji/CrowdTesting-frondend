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
                        <el-form label-position="left" label-width="110px" :model="user" >                                            
                        <el-form-item label="用户名">
                        <el-input v-model="username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input type="password" v-model="pwd"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱">
                        <el-input v-model="email"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号码">
                        <el-input v-model="tele"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button  type="primary" @click="modify" class="login_button">保存信息</el-button>
                        </el-form-item>
                        
                        
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
import axios from 'axios'   

   export default {
        components:{
            RequesterHomepageTopbar,
            RequesterHomepageSidebar
        },
        created:function(){
            this.getBasics();
        },
        methods: {
            getBasics(){
                axios(
                    {
                        url:'http://localhost:8080/requester/find-by-username',
                        method:'POST',
                        params:{
                            username:this.$route.query.name
                        }
                    }
                ).then((response)=>{
                    if (response.data.status == 200) {
                    }
                    else
                        throw response;
                    if (response.data.status == "200") {
                        this.username=response.username;
                        this.email=response.email;
                        this.tele=response.teleNumber;
                        this.pwd=response.password;
                    }
                }).catch(function (error) {
                    if (error.status == 500) {
                    swal("Error", "服务器错误！", "error");
                    }
                });     
            },
            modify(){
                axios.post('http://localhost:8080/requester/find-by-username',{
                    "username":this.username,
                    "email":this.email,
                    "tele":this.teleNumber,
                    "pwd":this.password
                }).then(function(response){
                    if(response.status == 200) {
                    this.$message({
                    message: '修改成功',
                    type: 'success'
                    });
                    }
                }).catch(function(error){
                   
                    });
            }
        },
        data(){
           return{
                username:username,
                email:email,
                tele:tele,
                pwd:pwd
           }
        },
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
