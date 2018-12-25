<template>
<div>
    <!--top bar-->
    <RequesterHomepageTopbar/>

    <el-row>
        <!--main-->
        <el-col :span="24" class="row_requester_main">
                <div class="manage_main">
                    <div class="manage_main_title">
                        <span>管理项目</span>
                    </div>
                    <span class="manage_main_explain">查看项目结果，对正在进行的项目部分设置进行修改</span>
                    <div class="box">

                    </div>
                </div>

                <div class="manage_main_box">
                    <div>
                        <el-table
                            :data="tableData"
                            stripe
                            :default-sort = "{prop: 'id', order: 'ascending'}"
                            style="width: 100%">
                            <el-table-column
                            prop="id"
                            label="项目id"
                            width="100">
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="项目名称"
                            width="240">
                            </el-table-column>
                            <el-table-column
                            prop="start_time"
                            label="创建时间"
                            sortable
                            width="180">
                            </el-table-column>
                            <el-table-column
                            prop="end_time"
                            label="截止日期"
                            sortable
                            width="180">
                            </el-table-column>
                            <el-table-column
                            prop="status"
                            label="项目状态"
                            width="120">
                            </el-table-column>
                            <el-table-column
                            prop="population"
                            label="参与人数"
                            width="180">
                            </el-table-column>
                            <el-table-column
                            label="操作"
                            width="180">
                            <template slot-scope="scope">
                                <el-button @click="showResult"  size="small">查看结果</el-button>
                            </template>
                            </el-table-column>
                        </el-table>
                     </div>
                </div>

        </el-col>

    </el-row>


</div>
</template>

<script>
import RequesterHomepageTopbar from '@/components/RequesterNavi/RequesterHomepageTopbar.vue'
import axios from 'axios'

export default {
    components:{
            RequesterHomepageTopbar,
        },
        data(){
            return{
                tableData:[]
            }
        },
        methods:{
          showResult(){

          }
        },
        created(){
          let that = this;
          axios.get('/api/requester/find-myself')
            .then(function (response) {
              let requester_id = response.data.requester.requesterId;
              console.log(requester_id);
              axios.get('/api/task/find-by-requester-id',{ params:{ requesterid: requester_id}})
                .then(function (response) {
                  that.tableData = response.data.tasks;
                  console.log(that.tableData);
                })
                .catch(function (error) {
                  console.log(error);
                });
            })
            .catch(function (error) {
              console.log(error);
            });
        }
}
</script>

<style scoped>
template {
    height: 100%;
    width:100%
    }
.manage_main{
    margin:30px;
    background-color: #fff;
    height: 140px;
    border: solid 1px #DCDFE6;

}
.manage_main_title{
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
.manage_main_explain{
     margin-left: 40px;
     font-size: 15px;
     color: #909399;
}
.manage_main_box{
    margin:30px;
    padding: 20px;
    background-color: #fff;
    border: solid 1px #DCDFE6;
}

</style>

