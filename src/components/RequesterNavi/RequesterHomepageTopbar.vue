<template>
<el-row>
    <div class="topbar">
        <el-col :span="4">
                <div class="topbar_title">
                    <img :src="logo">
                </div>

            </el-col>
        <el-col :span="16">
            <el-menu :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                     router
                    background-color="#313233"
                    text-color="#fff"
                    active-text-color="#5ED5D1">
                <el-menu-item index="requester_manage_main" @click="manage">管理</el-menu-item>
                <el-menu-item index="requester_create_pro1" @click="create">创建</el-menu-item>

            </el-menu>
        </el-col>
        <el-col :span="3">
          <el-button type="text" style="color:#ffffff;width:100%;height:60px" @click="informationPage">
            <span>{{user.username}}</span>
          </el-button>
        </el-col>

        <el-col :span="1" style = "background-color:#313233">
          <el-button type="text" style="color:#ffffff;width:100%;height:60px" @click="logout">
            <span>退出</span>
          </el-button>
        </el-col>
    </div>
</el-row>
</template>

<script>
    export default {
        methods: {
            informationPage(){
                this.$router.push('/requester_homepage_basic')
            },
            logout(){
              this.$store.commit('UserLogout');
              this.$router.replace('/login')
            },
            handleSelect(key, keyPath) {
                console.log(this);
                console.log(key,keyPath);
            }
        },
        computed:{
            activeIndex(){
                    return this.$route.path.replace('/','');
            }
        },
        data(){
            return{
              user:{
                username:this.$store.state.username,
              },
              logo:require('../../../static/logo_white.png')
            }
        }
    }
</script>


<style >
.topbar{
    background-color: rgb(49, 50, 51);
    color: #fff;
    height: 60px;
}
.topbar_title{

    color: #fff;

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

