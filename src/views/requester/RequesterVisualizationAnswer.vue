<template>
<div>
    <RequesterHomepageTopbar/>
    <el-row>
        <el-col :span="4">          
            <RequesterVisualizationSidebar/>
        </el-col>
        <el-col :span="20" style="background-color:#F7F6F6">         
                <div class="basic_info">
                    <div class="box">
                        <el-form label-position="left" label-width="220px" :model="user" >                                            
                       
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="task1" name="first">

                           <div style="float:right;">
                           <el-button type="primary" @click="task">查看答题详情</el-button>
                           </div>

                       </el-tab-pane>
                       <el-tab-pane label="task2" name="second">
                           <div style="float:right;">
                           <el-button type="primary" @click="task">查看答题详情</el-button>
                           </div>
                       </el-tab-pane>
                       <el-tab-pane label="task3" name="third">
                           <div style="float:right;">
                           <el-button type="primary" @click="task">查看答题详情</el-button>
                           </div>
                       </el-tab-pane>
                       <el-tab-pane label="task4" name="fourth">
                           <div style="float:right;">
                           <el-button type="primary" @click="task">查看答题详情</el-button>
                           </div>
                       </el-tab-pane>
                     </el-tabs>

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
import RequesterVisualizationSidebar from '@/components/RequesterNavi/RequesterVisualizationSidebar.vue'
    export default {
        components:{
            RequesterHomepageTopbar,
            RequesterVisualizationSidebar,      
        },
       data () {
      return {
            methods:{
                task(){
                this.$router.push('/requester_visualization_task')
                }
            }
      }
    }}
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
