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
                        <el-table
                             :data="tableData"
                             style="width: 100%">
                             <el-table-column
                                 prop="num"
                                 label="序号"
                                 width="180">
                             </el-table-column>
                              <el-table-column
                                 prop="date"
                                 label="发布日期"
                                 width="180">
                             </el-table-column>
                             <el-table-column
                                 prop="people"
                                 label="答题人数"
                                 width="180">
                             </el-table-column>
                             <el-table-column
                                 prop="rate"
                                 label="平均正确率"
                                 width="180">
                             </el-table-column>
                             </el-table>
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
        name: "chart",
        methods: {
            
        },
       data () {
      return {
          tableData: [{
                  num:'1',
                  date: '2018-05-02',
                  people: '500',
                  rate: '80%'
                 }, 
                 {
                  num:'2',
                  date: '2018-06-02',
                  people: '375',
                  rate: '30%'
                 }, 
                 {
                  num:'3',
                  date: '2018-08-11',
                  people: '274',
                  rate: '90%'
                 }, 
                 {
                  num:'4',
                  date: '2018-10-02',
                  people: '180',
                  rate: '100%'
                 }]
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
.basic_info_title{
    width: 600px;
    padding-top: 40px;
    padding-bottom: 20px;
    padding-left: 10px;
    margin-left: 50px;
    font-size: 25px;
    border-bottom:solid 1px #E4E7ED;
}
.box{
    width: 30%;
    padding-left: 60px;
    padding-top: 50px;
}
</style>
