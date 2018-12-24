<template>
  <div>
    <el-row type="flex" justify="center" style="margin-top:2vh">
      <el-col :span="12">
        <el-collapse accordion v-for = "a_question in questions" @change="changeQuestion" :key="a_question.question.id" v-model="activeName">
            <el-collapse-item :name="a_question.question.id">
              <template slot="title">
                <el-col :span="14">
                  <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh">{{a_question.question.content}}</span>
                </el-col>
              </template>
              <div style="height:500px" :id ="a_question.question.id">
              </div>
            </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import  * as axios from 'axios'
  import echarts from 'echarts'

  export default {
    methods: {
      changeQuestion () {
        let index = 0;
        for (let i = 0; i < this.questions.length; i++) {
          if (parseInt(this.activeName) === this.questions[i].question.id) {
            index = i;
          }
        }
        let data = [];
        let key_value = [];
        for (let j = 0; j < this.questions[index].options.length; j++) {
          data.push(this.questions[index].options[j].content);
          key_value.push({
            value: this.questions[index].selectedCounts[j],
            name: this.questions[index].options[j].content
          });
        }
        // console.log(option_copy.legend.data);
        // console.log(option_copy.series.data);
        // console.log(option_copy);
        let myChart = echarts.init(document.getElementById(this.questions[index].question.id))
        let option ={
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
            data: []  //注意要和数据的name相对应
          },
          color:['#ff7474','#ffc95e','#f0a042','#ff9f8c','#ff7f50','#BC8F8F'],
          series: [
            {
              name: '选项',
              type: 'pie',
              radius: ['10%', '50%'], //调整大小
              center: ['50%', '50%'],   //调整位置
              data: [],
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
        console.log(option);
        option.legend.data = data;
        option.series[0].data = key_value.sort(function (a, b) {
          return a.value - b.value;
        });
        myChart.setOption(option)
      }
    },
    data () {
      return {
        activeName: '',
        questions:[],
        task_id: 1,
      }
    },
    beforeMount:function(){
      let that =this;
      let questions = [];
      axios.get('/api/question/see-all-answer',
        {params:{'taskId': that.task_id}})
        .then(function (response) {
          //console.log(response);
          that.questions = response.data.Questions;
          questions = response.data.Questions;
          that.$forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  }
</script>

<style scoped>
</style>
