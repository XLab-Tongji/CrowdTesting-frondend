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
                        <el-input ></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input type="password"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱">
                        <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="手机号码">
                        <el-input></el-input>
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
    export default {
        components:{
            RequesterHomepageTopbar,
            RequesterHomepageSidebar
        },
        methods: {
            
        },
        data(){
            return{
               
            }
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
