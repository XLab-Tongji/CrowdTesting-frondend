<template>
<div>
    <!--top bar-->
    <RequesterHomepageTopbar/>
    
    <el-row>
        <!--sidebar-->
         <el-col :span="4">
          <RequesterCreateMainSidebar/>
        </el-col>

        <!--main-->
        <el-col :span="20" class="row_requester_main">         
                <div class="create_main">
                    <div class="create_main_title">
                        <span>创建项目</span>
                    </div>
                    <span class="create_main_explain">借助任务模板来快捷地创建新项目，或创建自定义项目</span>
                    <div class="box">
                        
                    </div>
                </div>

                <div class="create_main_box">
                    <el-col :span="6">
                        <el-card @click='questionnaire'>
                            <div  class="questionnaire">
                                <img :src="pro1_logo"/>
                                <h5>调查问卷</h5>
                                <p>提供一份调查问卷向参与者收集信息</p>
                            </div>
                        </el-card>
                    </el-col>

                    <el-col :span="1"><p></p></el-col>

                    <el-col :span="6">
                        <el-card @click='picrecognize'>
                            <div  class="picrecognize">
                                <img :src="pro1_logo"/>
                                <h5>图片识别</h5>
                                <p>按照要求选择图片</p>
                            </div>
                        </el-card>
                    </el-col>
                </div>
            
        </el-col>

    </el-row>


</div>
</template>

<script>
import RequesterHomepageTopbar from '@/components/RequesterNavi/RequesterHomepageTopbar.vue'
import RequesterCreateMainSidebar from '@/components/RequesterNavi/RequesterCreateMainSidebar.vue'

export default {
    components:{
            RequesterHomepageTopbar,  
            RequesterCreateMainSidebar         
        },
        data(){
            return{
                pro1_logo:require('../../../static/requester_create_logo1.png'),
                pro2_logo:require('../../../static/requester_create_logo2.png')
            }
        },
        methods:{
            questionnaire(){
                this.$router.push('/requester_create_main_pro1')
            },
            picrecognize(){
                this.$router.push('/requester_create_main_pro2')
            }
        }
}
</script>

<style scoped>
template {
    height: 100%;
    width:100%
    }
.create_main{
    margin:30px;
    background-color: #fff;
    height: 140px;
    border: solid 1px #DCDFE6;
    
}
.create_main_title{
    width: 600px;
    padding-top: 30px;
    padding-bottom: 20px;
    margin-bottom: 10px;
    padding-left: 10px;
    margin-left: 30px;
    font-size: 25px;
    border-bottom:solid 1px #E4E7ED;
    color: #303133;
}
.create_main_explain{
     margin-left: 40px;
     font-size: 15px;
     color: #909399;
}
.create_main_box{
    margin:30px;
}
.create_main_box .el-card{
    height: 260px;
    text-align: center;
    padding: 30px 30px;
}
.create_main_box h5{
    margin: 0px;
    padding: 10px 10px 10px 10px;
    border-bottom: solid 1px #EBEEF5;
    font-size: 18px;
    font-weight: 600;
    color: #303133;
}
.create_main_box p{
    font-size: 15px;
    color: #606266;
    padding-top: 10px;
}
</style>

