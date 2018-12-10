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
                        <el-form label-position="left" label-width="150px" :model="user" style="width: 600px;" >                                            
                            <el-form-item label="项目名称">
                             <el-input v-model="name"></el-input>
                            </el-form-item>
                            <el-form-item label="项目描述">
                                <el-input v-model="discribe"  type="textarea" :autosize="{ minRows: 3, maxRows: 5}"></el-input>
                            </el-form-item>
                            <el-form-item label="项目标签">
                                <el-input v-model="discribe" placeholder="标签请用空格隔开"></el-input>
                            </el-form-item>
                            <el-form-item label="项目报酬">
                                <el-input-number v-model="reward_per" :precision="2" 
                                :step="0.1" style="width:200px;margin-right:10px"></el-input-number>元
                            </el-form-item>
                             <el-form-item label="完成每个问题的人数">
                                <el-input-number v-model="population_per" 
                                 style="width:200px;margin-right:10px"></el-input-number>人
                            </el-form-item>
                            <el-form-item label="完成项目的最长时限">
                                <el-input-number v-model="time_per" 
                                 style="width:200px;margin-right:10px"></el-input-number>小时                             
                            </el-form-item>                           
                            <el-form-item label="项目有效期"><!--限制：开始日期不能小于当前日期-->
                                <div class="block">                                   
                                    {{limi_value}}
                                    <el-date-picker
                                    v-model="limi_value"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                    </el-date-picker>
                                </div>
                            </el-form-item>
                            <el-form-item label="完成项目后多久自动支付给参与者">
                                <el-input-number v-model="auto_pay" 
                                 style="width:200px;margin-right:10px" :max="72"></el-input-number>小时                                   
                            </el-form-item>                          
                            <el-form-item label="参与者需要的额外资质"  >                               
                                <el-select v-model="ex_condition" filterable multiple placeholder="请选择" style="width:450px">
                                    <el-option
                                    v-for="item in condition_options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                             <el-form-item label="是否需要专家等级的参与者完成项目">
                                <el-switch v-model="if_expert" ></el-switch>
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
            activeName2: 'first',
            reward_per:0,
            population_per:0,
            time_per:0,
            auto_pay:0,
            if_expert:0,
            ex_condition:'',
            condition_options: [{
                value: '1',
                label: '计算机'
                }, {
                value: '2',
                label: '经济'
                }, {
                value: '3',
                label: '医学'
                }, {
                value: '4',
                label: '音乐'
                }, {
                value: '5',
                label: '设计'
                }],
        };
        },
        methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        created() {
            
        },
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
     margin:30px 80px;
}
</style>
