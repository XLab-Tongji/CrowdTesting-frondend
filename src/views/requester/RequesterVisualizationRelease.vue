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
                        <el-form label-position="left" label-width="110px" :model="user" >                                            
                        <div id="main" style="width: 500px;height: 400px;"></div>
	                  <div class="col-xs-4">
                          <h3>条形图</h3>
	                  </div>
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
            RequesterVisualizationSidebar
        },
        data(){
			
	}}
option = {
            xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
             },
            yAxis: {
             type: 'value'
            },
            series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
             }]
            }

</script>

 <script type="text/javascript">
            var myChart = echarts.init(document.getElementById("main"));
            var option = {
                title:{
                    text:"第一个演示示例"
                },
                tooltip:{
                    text:"this is tool tip"
                },
                legend:{
                    data:['答题人数']
                },
                xAxis:{
                    data:["1","2","3","4","5","6"]
                },
                yAxis:{},
                series:[{
                            name:["答题人数"],
                            type:"bar",
                            data:[5,20,36,6,43,67]
                        }]
            };

            // myChart.setOption(option);

            myChart.setOption({
                title:{
                   title:{
                    text:"第一个演示示例"
                },
                tooltip:{
                    text:"this is tool tip"
                },
                legend:{
                    data:['答题人数']
                },
                xAxis:{
                    data:["1","2","3","4","5","6"]
                },
                yAxis:{},
                series:[{
                            name:["答题人数"],
                            type:"bar",
                            data:[5,20,36,6,43,67]
                        }]
			});
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


