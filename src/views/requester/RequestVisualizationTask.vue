<template>
<div>
    <RequesterHomepageTopbar/>
    <el-row>
        <el-col :span="4">          
            <RequesterVisualizationTaskSidebar/>
        </el-col>
        <el-col :span="20" style="background-color:#F7F6F6">         
                <div class="basic_info">
                    <div class="box">
                        <el-form label-position="left" label-width="110px" :model="user" >                                            
                        
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
import RequesterVisualizationTaskSidebar from '@/components/RequesterNavi/RequesterVisualizationTaskSidebar.vue'
    export default {
        components:{
            RequesterHomepageTopbar,
            RequesterVisualizationTaskSidebar
        },
        methods: {
           handleClick(tab, event) {
            console.log(tab, event);
        }
        },
        data(){
            return{
               
        }
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
.box{
    width: 80%;
    padding-left: 60px;
    padding-top: 50px;
}
</style>
