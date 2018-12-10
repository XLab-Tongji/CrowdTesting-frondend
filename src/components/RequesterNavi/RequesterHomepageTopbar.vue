<template>   
<el-row>
    <div class="topbar">
        <el-col :span="4">
                <div class="topbar_title">
                    <img :src="logo">
                </div>
                
            </el-col>
        <el-col :span="16">
            <el-menu :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#313233"
                    text-color="#fff"
                    active-text-color="#5ED5D1">
                <el-menu-item index="1" @click="main">主页</el-menu-item>
                <el-menu-item index="2" @click="create">创建</el-menu-item>
                <el-menu-item index="3" @click="manage">管理</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="4">
            <el-card  class="topbar_user">  
                <div >            
                    <user @click="personal">user name</user>
                    <span>   |   </span>
                    <user @click="signout">sign out</user>     
                </div>          
            </el-card>
        </el-col>
    </div>
</el-row>
</template>

<script>
    export default { 
        methods: {
            create(){
                this.$router.push('/requester_create_main')
            },
            manage(){
                this.$router.push('/requester_manage_main')
            },
            personal(){
                this.$router.push('/requester_homepage_basic')
            },
            signout(){
                this.$router.push('/')
            },
            main(){
               this.$router.push('/requester_main') 
            }

        },
        data(){
            return{
                logo:require('../../../static/logo_white.png')
            }
        }
    }
</script>


<style>
.topbar{
    background-color: rgb(49, 50, 51);
    color: #fff;
    height: 60px;
}
.topbar_title{
    color:#fff; 
    margin-left:50px;
    margin-top: 13px;
    font-size: 70%;
}
.topbar_control{
    font-size: 120%;
}
.topbar_user{ 
    /*margin-top:23px;  */ 
    font-size: 15px;
    font-weight: 200;
    background-color: rgba(0,0,0,0);
    color: #fff;
    border: none;
}
.topbar_user user{
    padding-right: 20px;
 
}
.topbar_user user:hover{
   cursor:pointer;
   color: rgb(121, 185, 245)
}

</style>

