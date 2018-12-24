<template>
<div>
    <!--top bar-->
    <RequesterHomepageTopbar/>
    
    <el-row>
        <!--main-->
        <el-col :span="24" class="row_requester_main">         
                <div class="manage_modify">
                    <div class="title">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/requester_manage_main' }">管理</el-breadcrumb-item>                       
                        <el-breadcrumb-item>项目设置</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>  

                    <div class="manage_modify_box">
                         <div class="attribute box_containing">
                        <el-form label-position="left" label-width="120px" :model="user" style="width: 600px;" >
                            <el-form-item label="项目id">
                                <el-input v-model="id" disabled="true"></el-input>
                            </el-form-item> 
                            <el-form-item label="项目名称">
                                <el-input v-model="name"  disabled="true"></el-input>
                            </el-form-item>
                            <el-form-item label="项目描述">
                                <el-input v-model="describe"  type="textarea" :autosize="{ minRows: 3, maxRows: 5}"></el-input>
                            </el-form-item>
                            <el-form-item label="项目标签">
                                <el-input v-model="tag" placeholder="标签请用空格隔开"></el-input>
                            </el-form-item>
                            <el-form-item label="问题单价">
                                <el-input-number v-model="reward_per" :precision="2"
                                :step="0.1" :min="0" style="width:200px;margin-right:10px"
                                 disabled="true"></el-input-number>元
                                 <el-popover
                                    placement="right-start"
                                    title="属性说明"
                                    width="200"
                                    trigger="hover"
                                    content="回答每个问题（注意：不是每个项目）参与者可以获得的报酬">
                                     <i class="el-icon-info" slot="reference" style="padding-left:20px;color:#909399"></i>    
                                  </el-popover>    
                            </el-form-item>
                             <el-form-item label="完成人数">
                                <el-input-number v-model="population_per"
                                 style="width:200px;margin-right:10px"></el-input-number>人  
                                 <el-popover
                                    placement="right-start"
                                    title="属性说明"
                                    width="200"
                                    trigger="hover"
                                    content="每个问题由多少人完成">
                                     <i class="el-icon-info" slot="reference" style="padding-left:20px;color:#909399"></i>    
                                  </el-popover>                                 
                            </el-form-item>
                            <el-form-item label="完成时限">
                                <el-input-number v-model="time_per"
                                 style="width:200px;margin-right:10px"></el-input-number>小时
                                 <el-popover
                                    placement="right-start"
                                    title="属性说明"
                                    width="200"
                                    trigger="hover"
                                    content="参与者从开始答题到提交项目的时间限制">
                                     <i class="el-icon-info" slot="reference" style="padding-left:20px;color:#909399"></i>    
                                  </el-popover>                               
                            </el-form-item>
                            <el-form-item label="项目有效期"><!--限制：开始日期不能小于当前日期-->
                                <div class="block">
                                    <!--{{limi_value}}-->
                                    <el-date-picker
                                    v-model="limi_value"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                    </el-date-picker>
                                </div>
                            </el-form-item>
                            <el-form-item label="自动支付时间">
                                <el-input-number v-model="auto_pay"
                                 style="width:200px;margin-right:10px" :max="72" :min="0"></el-input-number>小时
                                  <el-popover
                                    placement="right-start"
                                    title="属性说明"
                                    width="200"
                                    trigger="hover"
                                    content="参与者完成项目后多久系统自动支付酬金给参与者">
                                     <i class="el-icon-info" slot="reference" style="padding-left:20px;color:#909399"></i>    
                                  </el-popover>       
                            </el-form-item>
                    
                            <div >
                            <el-form-item label="资质要求"  >
                                <el-select v-model="ex_condition" filterable multiple placeholder="请选择" style="width:400px">
                                    <el-option
                                    v-for="item in condition_options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-popover
                                    placement="right-start"
                                    title="属性说明"
                                    width="200"
                                    trigger="hover"
                                    content="参与者需要拥有哪些领域的知识才能更好地参与该项目（多选）">
                                     <i class="el-icon-info" slot="reference" style="padding-left:20px;color:#909399"></i>    
                                  </el-popover>       
                            </el-form-item>
                             <el-form-item label="等级要求">
                                <el-input-number v-model="worker_exp" 
                                 :min="0" style="width:200px;margin-right:10px"></el-input-number>
                                 <el-popover
                                    placement="right-start"
                                    title="属性说明"
                                    width="200"
                                    trigger="hover"
                                    content="参与者需要多高的经验才能更好地完成项目">
                                     <i class="el-icon-info" slot="reference" style="padding-left:20px;color:#909399"></i>    
                                  </el-popover>    
                            </el-form-item>
                            <el-form-item label="年龄要求">
                                <el-input-number v-model="worker_age" 
                                 :min="0" style="width:200px;margin-right:10px"></el-input-number>
                                
                            </el-form-item>
                            </div>
                            <el-form-item>
                              <el-button  @click="" :loading=this.button_disabled class="next_step1">
                                    提交
                                </el-button>
                                <el-button  @click="toDesign" :loading=this.button_disabled class="next_step1" type="primary">
                                    下一步
                                </el-button>
                            </el-form-item>
                        </el-form>
                    </div><!--attribute-->
                    </div>                                    
                </div>

                
            
        </el-col>

    </el-row>


</div>
</template>

<script>
import RequesterHomepageTopbar from '@/components/RequesterNavi/RequesterHomepageTopbar.vue'

export default {
    components:{
            RequesterHomepageTopbar,        
        },
        created:function(){
            this.getBasics();
        },
        methods: {
            getBasics(){
                axios(
                    {
                        url:'http://localhost:8080/task/attribute',
                        method:'POST',
                        params:{
                            //输入id
                        }
                    }
                ).then((response)=>{
                    if (response.data.status == 200) {
                    }
                    else
                        throw response;
                    if (response.data.status == "200") {
                        this.id=response.id;
                        this.name=response.name;
                        this.discribe=response.discribe;
                        this.tag=response.tag;
                        this.reward=response.reward;
                        this.population=response.population;
                        this.finish_time=response.finish_time;
                        this.limitation=response.limitation;
                        this.pay_time=response.pay_time;
                        this.condition=response.condition;
                        this.if_expert=response.if_expert;
                    }
                }).catch(function (error) {
                    if (error.status == 500) {
                    swal("Error", "服务器错误！", "error");
                    }
                });     
            },
            modify(){
                axios.post('http://localhost:8080/task/attribute',{
                    "id":this.id,
                    "name":this.name,
                    "discribe":this.discribe,
                    "tag":this.tag,
                    "reward":this.reward,
                    "population":this.population,
                    "finish_time":this.finish_time,
                    "limitation":this.limitation,
                    "pay_time":this.pay_time,                  
                    "if_expert":this.if_expert
                    
                }).then(function(response){
                    if(response.status == 200) {
                    this.$message({
                    message: '修改成功',
                    type: 'success'
                    });
                    }
                }).catch(function(error){
                   
                    });
            }
        },
        data(){
           return{
                describe:'',
            limi_value:'',
            activeName2: 'first',
            reward_per:0,
            population_per:0,
            time_per:0,
            auto_pay:0,
            if_expert:0,
            ex_condition:'',
            name:'',
            tag:'',
            worker_exp:'',
            worker_age:'',
            condition_options: [{
                value: '计算机',
                label: '计算机'
                }, {
                value: '医药',
                label: '医药'
                }, {
                value: '教育',
                label: '教育'
                }, {
                value: '财经',
                label: '财经'
                }, {
                value: '政法',
                label: '政法'
                },
                {
                value: '科研',
                label: '科研'
                },
                {
                value: '公益',
                label: '公益'
                },
                {
                value: '音乐',
                label: '音乐'
                },
                {
                value: '设计',
                label: '设计'
                },
                {
                value: '行政',
                label: '行政'
                },
                {
                value: '交通',
                label: '交通'
                },
                {
                value: '交通',
                label: '交通'
                }
                ],
            worker_condition_seen:0,             
           }
        },
}
</script>

<style scoped>
template {
    height: 100%;
    width:100%
    }
.manage_modify{
    margin:30px;
    background-color: #fff;
    border: solid 1px #DCDFE6;
    
}
.title{
    width: 600px;
    padding-top: 30px;
    padding-bottom: 20px;
    margin-bottom: 10px;
    padding-left: 10px;
    margin-left: 30px;
    font-size: 25px;
    color: #303133;
}
.manage_modify_box{
   margin-left: 50px;
   margin-top: 10px;
   width: 800px;
}

</style>

