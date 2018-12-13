<template>  
    <div >
        <!--导航--> 
            <el-row class="main_topbar">
                <el-col :span="3">
                    <div class="topbar_title">
                        <img :src="logo_small"/>
                    </div>
                </el-col>
                 <el-col :span="18" >
                     <div >
                <el-menu :default-active="activeIndex"  mode="horizontal" @select="handleSelect"
                            background-color="#313233" text-color="#fff"  active-text-color="#ffd04b">
                  <el-menu-item index="1" @click="homepage">主页</el-menu-item>
                  <el-menu-item index="2" @click='feature'>简介</el-menu-item>
                  <el-menu-item index="3" @click="price">定价</el-menu-item>
                </el-menu>
                 </div>
                </el-col>
                <!--登录--> 
                <el-col :span="3">                  
                    <el-button  @click="login" type="text"
                        style="color:#DCDFE6;margin-left:60px;margin-top:10px" >
                        登录
                    </el-button>
                </el-col>
            </el-row><!--topbar end-->          
        
            <el-row>
                <el-col :span="24">   
                    <div class="main_reg">
                        <div class="reg1">
                            <h2>简介</h2>
                            <p>
                                TJ众测是一个众包市场，允许个人和企业(称为Requester)使用24/7、
                                全球分布的劳动力(称为Worker)执行任务。您可以在平台上法宝宝项目，如
                                “识别水果篮图像中的红苹果”，“完成调查问卷”等。Worker可以使用这个网站查找要处理的任务、
                                提交问题并管理他们的帐户。
                            </p>
                        </div>
                        <div class="reg2">

                        </div>
                    </div>
                </el-col>
            </el-row>
    
    
    </div>
</template>

<script scoped>
    export default {
        methods: {
            login () {
                this.$router.push('/login')
            },
            register(){
                this.$router.push('/register')
            },
            homepage(){
                this.$router.push('/')
            },
            feature(){
                this.$router.push('/main_feature')
            },
            price(){
                this.$router.push('/main_price')
            }
        },
        data(){
            return{
                bgImg:require("../../static/bg.jpg"),
                logo:require('../../static/logo_white_big.png'),
                logo_small:require('../../static/logo_white.png'),
                activeIndex:'2'
            }
        }
    }
</script>

<style scoped>
.main_reg{
    margin:50px 0;
}
.main_topbar{
    background-color: rgb(49, 50, 51);
     height: 60px;
}
.topbar_title{
    color:#fff; 
    margin-left:30px;
    margin-top: 15px;
    font-size: 70%;
}
.register_button{
    width: 250px;
    height: 50px;
    font-size: 17px;
}
h2{
    font-weight: 300;
    color: #DC8C1B;
}
p{
    line-height: 35px;
}
.reg1{
    padding:0  170px;
    padding-bottom: 40px;
    border-bottom: 1px solid #E4E7ED;
}
</style>


