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
                <div class="create_pro1">
                    <div class="create_pro1_title">
                        <span>调查问卷</span>
                        <div style="float:right;">
                            <el-button type="primary" @click="create">创建项目</el-button>
                        </div>
                    </div>
                    
                    <div class="box">
                        
                    </div>
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
        methods:{
            create(){
                this.$router.push('/requester_create_pro1')
            }
        }
}
</script>

<style scoped>
template {
    height: 100%;
    width:100%
    }
.create_pro1{
    margin:30px;
    background-color: #fff;
    height: 100px;
    border: solid 1px #DCDFE6;
}
.create_pro1_title{
    width: 600px;
    padding-top: 30px;
    padding-bottom: 20px;
    margin-bottom: 10px;
    padding-left: 10px;
    margin-left: 30px;
    font-size: 25px;
    color: #303133;
}

</style>

