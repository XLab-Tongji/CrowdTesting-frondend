<template>
  <div style="height:100%">
    <RequesterHomepageTopbar/>
    <el-row>
      <el-col :span="4">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          background-color="#4D4D4D"
          text-color="#fff"
          active-text-color="#5ED5D1"
          style="height:570px">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">答题情况分析</span>
          </el-menu-item>
          <!--<el-submenu index="2">
            <template slot="title">
              <i class="el-icon-info"></i>
              <span>问卷可视化信息</span>
            </template>
            <el-menu-item index="2-1"><i class="el-icon-time"></i>日记录</el-menu-item>
          </el-submenu>-->
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div v-if="select_page==='1'" style="width:100%">
          <RequesterQuestionData/>
        </div>
        <div v-else  style="width:100%">
          <RequesterTimeAnalysis/>
        </div>
      </el-col>
    </el-row>



  </div>
</template>


<script>
  import RequesterHomepageTopbar from '@/components/RequesterNavi/RequesterHomepageTopbar.vue'
  import RequesterHomepageSidebar from '@/components/RequesterNavi/RequesterHomepageSidebar.vue'
  import RequesterQuestionData from '@/components/RequesterNavi/RequesterQuestionData.vue'
  import RequesterTimeAnalysis from '@/components/RequesterNavi/RequesterTimeAnalysis.vue'
  export default {
    components: {
      RequesterHomepageTopbar,
      RequesterHomepageSidebar,
      RequesterQuestionData,
      RequesterTimeAnalysis
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(this.select_page);
        this.select_page = String(key);
        console.log(this.select_page);
        this.$forceUpdate();
      }
    },
    data () {
      return {
        select_page: '1',
        clientHeight:''
      }
    },
    mounted () {
      this.clientHeight=document.documentElement.clientHeight;
      window.onresize = function temp() {
        this.clientHeight = document.documentElement.clientHeight;
        console.log("a");
        console.log(this.clientHeight);
      };
      /*ECharts图表
      let myChart = echarts.init(document.getElementById('myChart'));
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['0', '6H', '9H', '12H', '15H', '18H', '24H']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [1, 3, 4, 7, 4, 6, 9],
          type: 'line'
        }]
      })*/
    }
  }
</script>

<style scoped>
  template {
    height: 100%;
    width:100%
  }
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
