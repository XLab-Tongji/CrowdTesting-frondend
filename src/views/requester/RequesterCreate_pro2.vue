<template>
 <div>
    <!--top bar-->
    <RequesterHomepageTopbar/>

    <el-row class="row_requester_main">
      <el-col :span="24">
          <div class="create">
              <div class="create_title">
                  <span>创建新项目</span>
              </div>            
          </div>

          <div class="create_box">
                <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                <el-tab-pane label="项目属性" name="first">
                    <div class="attribute box_containing">
                        <el-form label-position="left" label-width="120px" :model="user" >                                            
                            <el-form-item label="项目名称">
                             <el-input v-model="name"></el-input>
                            </el-form-item>
                            <el-form-item label="项目描述">
                                <el-input v-model="discribe" ></el-input>
                            </el-form-item>
                            <el-form-item label="项目标签">
                                <el-input v-model="discribe" ></el-input>
                            </el-form-item>
                            <el-form-item label="每个任务的报酬">
                                <el-input v-model="reward_per" ></el-input>
                            </el-form-item>
                             <el-form-item label="完成每个问题的人数">
                                <el-input v-model="populat_per" ></el-input>
                            </el-form-item>
                            <el-form-item label="完成每个任务的最长时限">
                                <el-input v-model="time_per" ></el-input>
                            </el-form-item>
                            <el-form-item label="完成每个任务的最长时限">
                                <el-input v-model="time_per" ></el-input>
                            </el-form-item>
                            <el-form-item label="项目有效期">
                                <el-input v-model="limitation" ></el-input>
                            </el-form-item>
                            <el-form-item label="自动支付给参与者">
                                <el-input v-model="auto_pay" ></el-input>
                            </el-form-item>
                            <el-form-item >
                                <el-radio v-model="if_expert" label="1">是否需要专家等级的参与者完成项目？</el-radio>
                            </el-form-item>
                            <el-form-item label="参与者需要的额外资质：">
                                <el-input v-model="ex_condition" ></el-input>
                            </el-form-item>
                            <el-form-item >
                                <el-radio v-model="if_adult" label="1">项目中的问题是否含有成人内容？</el-radio>
                            </el-form-item>
                            <el-form-item>
                                <el-button  @click="" :loading=this.button_disabled class="next_step1" type="primary">
                                    下一步
                                </el-button>
                            </el-form-item> 
                        </el-form>
                    </div><!--attribute-->
                </el-tab-pane>


                <el-tab-pane label="设计布局" name="second">设计布局</el-tab-pane>
                <el-tab-pane label="项目预览" name="third">项目预览</el-tab-pane>

            </el-tabs>
            </div>
      </el-col>
      
    </el-row>


</div>
</template>

<script>
import RequesterHomepageTopbar from '@/components/RequesterNavi/RequesterHomepageTopbar.vue'
export default {
    components:{
            RequesterHomepageTopbar   
        },
        data() {
        return {
            activeName2: 'first'
        };
        },
        methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
        }
}
</script>

<style scoped>
.row_requester_main{
    height: auto;
}
.create{
    margin:30px;
    background-color: #fff;
    height: 100px;
    border: solid 1px #DCDFE6;
}
.create_title{
    width: 600px;
    padding-top: 30px;
    padding-bottom: 20px;
    margin-bottom: 10px;
    padding-left: 10px;
    margin-left: 30px;
    font-size: 25px;
    color: #303133;
}
.create_box{
    margin:30px;
    background-color: #fff;
     border: solid 1px #DCDFE6;
     
}
.box_containing{
     margin:30px;
}
.attribute{
    width: 800px;
}
</style>
