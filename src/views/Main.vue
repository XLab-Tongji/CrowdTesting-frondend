<template>  
    <div class="main_bg" :style="{backgroundImage: 'url(' + bgImg + ')' }" style="height: 700px;">
        <!--导航--> 
        <div class="main-topbar">
            <el-row >
                <el-col :span="3">
                    <p style="color:#fff; margin-left:50px;">TJ众测</p>
                </el-col>
                 <el-col :span="18" >
                     <div class="topbar-title">
                <el-menu :default-active="activeIndex2"  mode="horizontal" @select="handleSelect"
                            background-color=rgba(0,0,0,0) text-color="#fff"  active-text-color="#ffd04b">
                  <el-menu-item index="1">主页</el-menu-item>
                  <el-menu-item index="2">项目详情</el-menu-item>
                  <el-menu-item index="3">价格</el-menu-item>
                  <el-menu-item index="4">工作原理</el-menu-item>
                </el-menu>
                 </div>
                </el-col>
                <el-col :span="3">
                    <p style="margin-left:60px;"><el-button  @click="login" style="background-color=rgba(0,0,0,0)">
                        登录
                        </el-button></p>
                </el-col>
      </el-row>  

        </div>
      
        <!--登录--> 
        <div class="main_reg">
            <el-row type="flex" justify="center">
                <el-col :span="3">     
                    <h1 style="color:#fff">TJ众测</h1>   
                    <el-button type="primary" @click="register" round>注册</el-button>
                </el-col>
            </el-row>
        </div>
    
    
    </div>
</template>

<script>
    export default {
        methods: {
            login () {
                this.$router.push('/login')
            },
            register(){
                this.$router.push('/register')
            }
        },
        data(){
            return{
                bgImg:require("../../static/bg.jpg")
            }
        }
    }
</script>

<style>
.main_reg{
    margin-top: 100px;
}
.main_reg h1{
    font-size: 50px;
}
.el-button--primary{
    margin-left: 40px;
}
</style>


