<template>
  <div>
  <el-row type="flex" justify="center" style="margin-top:2vh" v-for="question in questions">
      <el-col :span="12">
        <div>
          <div style="width: 100%;height: 400px" :id='question.question.id'></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import  * as axios from 'axios'
  import echarts from 'echarts'

  export default {
    methods: {},
    data () {
      return {
        questions:[],
        task_id: 1,
        option: {
          title: {
            text: '流量来源',
            left: 'center',
            textStyle: {
              color: '#4D4D4D',
              fontStyle: 'normal',//标题字体,\
              fontWeight:600,
            }
          },
          tooltip: {
            trigger: 'item',//以具体项目触发弹窗
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          //图例，选择要显示的项目
          legend: {
            bottom: 10,
            left:'center',
            textStyle:{
              fontSize:14
            },
            textStyle: {
              color: '#000'
            },
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']  //注意要和数据的name相对应
          },
          color:['#ff7474','#ffc95e','#f0a042','#ff9f8c','#ff7f50','#BC8F8F'],
          series: [
            {
              name: '选项',
              type: 'pie',
              radius: ['10%', '50%'], //调整大小
              center: ['50%', '50%'],   //调整位置
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 274, name: '联盟广告'},
                {value: 235, name: '视频广告'},
                {value: 400, name: '搜索引擎'}
              ].sort(function (a, b) {
                return a.value - b.value;
              }),

              label: { //饼图图形的文本标签
                normal: {
                  show: true,
                  position: 'inside',
                  fontSize:'10',
                  formatter:'{d}%'
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
            }
          ]
        }
      }
    },
    beforeMount:function(){
      let that =this;
      let questions = [];
      axios.get('/api/question/see-all-answer',
        {params:{'taskId': that.task_id}})
        .then(function (response) {
          console.log(response);
          that.questions = response.data.Questions;
          questions = response.data.Questions;
          that.$forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    updated: function(){
      console.log(this.questions);
      for(let i=0;i<this.questions.length;i++) {
        let data = [];
        let key_value = [];
        let option_copy =this.option;
        option_copy.title.text = this.questions[i].question.content;
        for(let j=0;j<this.questions[i].options.length;j++) {
          data.push(this.questions[i].options[j].content);
          key_value.push({value:this.questions[i].selectedCounts[j],name:this.questions[i].options[j].content});
        }
        option_copy.legend.data = data;
        option_copy.series.data = key_value.sort(function (a, b) {
          return a.value - b.value;
        });
        console.log(option_copy.legend.data);
        console.log(option_copy.series.data);
        console.log(option_copy);
        let myChart = echarts.init(document.getElementById(this.questions[i].question.id))
        // 绘制图表，this.echarts1_option是数据
        myChart.setOption(option_copy)
      }
    }

  }
</script>

<style scoped>

</style>
