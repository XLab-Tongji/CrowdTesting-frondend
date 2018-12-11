<template>
  <el-row type="flex" justify="center" style="margin-top:2vh">
    <el-col :span="12">
      <div>
        <div style="width: 100%;height: 400px" id="echartss"></div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import * as axios from 'axios'
  import echarts from 'echarts'

  export default {
    methods: {},
    data () {
      return {
        option: {
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
      }
    },
    mounted: function () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('echartss'));
      // 绘制图表，this.echarts1_option是数据
      myChart.setOption(this.option)
    },
  }
</script>

<style scoped>

</style>
