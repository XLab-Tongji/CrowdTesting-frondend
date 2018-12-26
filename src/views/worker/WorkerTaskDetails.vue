<template>
  <el-container>
    <!--导航-->
    <WorkerHomepageTopbar/>
    <el-header height="12px"></el-header>
    <el-main>
      <el-row type="flex" justify="center" style="margin-top: 2vh">
        <el-col :span="14" style="text-align: center">
          <span style="font-size:2.5vw;font-weight:600;letter-spacing: 0.2vh;color:#015D73">{{task.name}}</span>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top:3vh">
        <el-col :span="2" style="text-align: center;font-size:1.3vw;font-weight:500;letter-spacing: 0.2vh;color:#ffffff;border-radius:4px;background-color:#5ED5D1">
          <i class="el-icon-loading"></i>
          <span>进行中</span>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top:6vh">
        <el-col :span="7" style="text-align: center;font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 2vh">
            <span style="font-size:1.0vw">项目类型：</span>
            <span style="font-size:1.0vw">{{task.type}}</span>
          </div>
        </el-col>
        <el-col :span="7" style="text-align: center;font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 2vh">
            <span style="font-size:1.0vw">资质：</span>
            <span style="font-size:1.0vw">{{task.level}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="7" style="text-align: center;font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh">
            <span style="font-size:1.0vw">创建时间：</span>
            <span style="font-size:1.0vw">{{task.start_time}}</span>
          </div>
        </el-col>
        <el-col :span="7" style="text-align: center;font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh">
            <span style="font-size:1.0vw">完成度：</span>
            <span style="font-size:1.0vw">{{task.status}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="7" style="text-align: center;font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh">
            <span style="font-size:1.0vw">终止时间：</span>
            <span style="font-size:1.0vw">{{task.end_time}}</span>
          </div>
        </el-col>
        <el-col :span="7" style="text-align: center;font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh">
            <span style="font-size:1.0vw">项目领域：</span>
            <span style="font-size:1.0vw" v-if="task.area!=''&&task.area!=null">{{task.area}}</span>
            <span style="font-size:1.0vw" v-else>暂无</span>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="7" style="text-align: center;font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh">
            <span style="font-size:1.0vw">最低年龄：</span>
            <span style="font-size:1.0vw">{{task.min_age}}</span>
          </div>
        </el-col>
        <el-col :span="7" style="text-align: center;font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh">
            <span style="font-size:1.0vw">最高年龄：</span>
            <span style="font-size:1.0vw">{{task.max_age}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="7" style="text-align: center;font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh;margin-bottom: 2vh">
            <span style="font-size:1.0vw">时间限制（小时）：</span>
            <span style="font-size:1.0vw">{{task.time_limitation}}</span>
          </div>
        </el-col>
        <el-col :span="7" style="text-align: center;font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh;margin-bottom: 2vh">
            <span style="font-size:1.0vw">支付时长（小时）：</span>
            <span style="font-size:1.0vw">{{task.pay_time}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top:6vh">
        <el-col :span="3" style="font-size:1.3vw;font-weight:500;letter-spacing: 0.1vh;color:#4D4D4D;padding-left:1vw">
          <i class="el-icon-info"></i>
          <span>项目描述</span>
        </el-col>
      </el-row>
      <el-row style="margin-top:2vh">
        <el-col style="font-size:1.1vw;font-weight:500;letter-spacing: 0.1vh;color:#4D4D4D;padding-left:1vw">
          <span v-if="task.description!=null">&nbsp;&nbsp;&nbsp;&nbsp;{{task.description}}</span>
          <span v-else>暂无</span>
        </el-col>
      </el-row>
      <el-row style="margin-top:6vh">
        <el-col :span="3" style="font-size:1.3vw;font-weight:500;letter-spacing: 0.1vh;color:#4D4D4D;padding-left:1vw">
          <i class="el-icon-document"></i>
          <span>样例</span>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top:6vh;margin-bottom:6vh">
        <el-col :span="16">
          <template>
            <el-table
              :data="questions"
              :show-header=false
              :border=false
              stripe
              style="width: 100%;height:100%"
              id="show_table">
              <el-table-column>
                <template slot-scope="scope">
                  <div v-if="scope.row.question.type===0">
                    <div v-if="scope.row.question.compulsory===1">
                      <span>{{ question_index[scope.row.question.id] }}.{{ scope.row.question.content }}【单选题】（必做）</span>
                      <div v-if="scope.row.question.resource_loading===1">
                        <img :src="pic.link" style="width:250px;height:200px;margin-left:20px" v-for="pic in scope.row.resources">
                      </div>
                    </div>
                    <div v-else>
                      <span>{{ question_index[scope.row.question.id] }}.{{ scope.row.question.content }}【单选题】</span>
                      <div v-if="scope.row.question.resource_loading===1">
                        <img :src="pic.link" style="width:250px;height:200px;margin-left:20px" v-for="pic in scope.row.resources">
                      </div>
                    </div>
                    <template>
                      <div v-for="option in scope.row.options">
                        <el-radio v-model="answer[question_index[scope.row.question.id]-1].radio" :label="String(option.id)">{{option.content}}
                        </el-radio>
                        <div v-if="option.openAnswerPermission===1">
                          <el-input placeholder="请输入内容" size="small" style="width:50%"></el-input>
                        </div>
                      </div>
                    </template>
                  </div>
                  <div v-else-if="scope.row.question.type===1">
                    <div v-if="scope.row.question.compulsory===1">
                      <span>{{ question_index[scope.row.question.id] }}.{{ scope.row.question.content }}【多选题】（必做）</span>
                      <div v-if="scope.row.question.resource_loading===1">
                        <img :src="pic.link" style="width:250px;height:200px;margin-left:20px" v-for="pic in scope.row.resources">
                      </div>
                    </div>
                    <div v-else>
                      <span>{{ question_index[scope.row.question.id] }}.{{ scope.row.question.content }}【多选题】</span>
                      <div v-if="scope.row.question.resource_loading===1">
                        <img :src="pic.link" style="width:250px;height:200px;margin-left:20px" v-for="pic in scope.row.resources">
                      </div>
                    </div>
                    <template>
                      <div v-for="option in scope.row.options">
                        <el-checkbox v-model="answer[question_index[scope.row.question.id]-1].checkList" :label="String(option.id)">{{option.content}}
                        </el-checkbox>
                        <div v-if="option.openAnswerPermission===1">
                          <el-input placeholder="请输入内容" size="small" style="width:50%"></el-input>
                        </div>
                      </div>
                    </template>
                  </div>
                  <div v-else-if="scope.row.question.type===2">
                    <div v-if="scope.row.question.compulsory===1">
                      <span>{{ question_index[scope.row.question.id] }}.{{ scope.row.question.content }}【简答题】（必做）</span>
                      <div v-if="scope.row.question.resource_loading===1">
                        <img :src="pic.link" style="width:250px;height:200px;margin-left:20px" v-for="pic in scope.row.resources">
                      </div>
                    </div>
                    <div v-else>
                      <span>{{ question_index[scope.row.question.id] }}.{{ scope.row.question.content }}【简答题】</span>
                      <div v-if="scope.row.question.resource_loading===1">
                        <img :src="pic.link" style="width:250px;height:200px;margin-left:20px" v-for="pic in scope.row.resources">
                      </div>
                    </div>
                    <el-row>
                      <el-input type="textarea" :rows="3" placeholder="请输入内容" size="small" style="width:100%"></el-input>
                    </el-row>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top:6vh">
        <el-col :span="2" style="text-align: center;font-size:1.3vw;font-weight:500;letter-spacing: 0.2vh;color:#ffffff;border-radius:4px;background-color:#ffffff">
          <el-button type="text" style="width:100%;font-weight:500;color:#ffffff;background-color:#015D73" @click="accept" v-if="accepted==0">
            <span style="font-size:1.2vw">参与</span>
          </el-button>
          <el-button type="text" style="width:100%;font-weight:500;color:#ffffff;background-color:#015D73" @click="begin" v-if="accepted==1">
            <span style="font-size:1.2vw">开始</span>
          </el-button>
        </el-col>
        <el-col :span="2" style="text-align: center;font-size:1.3vw;font-weight:500;letter-spacing: 0.2vh;color:#ffffff;border-radius:4px;background-color:#ffffff">
          <span style="font-size:1.2vw">&nbsp;</span>
        </el-col>
        <el-col :span="2" style="text-align: center;font-size:1.3vw;font-weight:500;letter-spacing: 0.2vh;color:#ffffff;border-radius:4px;background-color:#ffffff">
          <el-button type="text" style="width:100%;font-weight:500;color:#ffffff;background-color:#015D73" @click="back">
            <span style="font-size:1.2vw">返回</span>
          </el-button>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import axios from 'axios'
  import WorkerHomepageTopbar from '@/components/WorkerNavi/WorkerHomepageTopbar.vue'
  export default {
    components:{
      WorkerHomepageTopbar,
    },
    methods: {
      back(){
        this.$router.push('worker_task_square')
      },
      begin(){
        this.$router.push({ path: 'worker_task_continuation', query: { task_id: this.task.id }});
      },
      accept(){
        let that = this;
        this.$confirm('是否确认接受该任务?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let param = new URLSearchParams();
          param.append('taskId',that.task.id);
          console.log(that.task.id);
          axios({
            method:	'post',
            url: '/api/personal-task/add',
            data:param
          })
            .then(function (response) {
              if(response.data.code[0] == "2") {
                that.accepted = 1;
                that.$message({
                  type: 'success',
                  message: '参与成功!'
                });
                that.$forceUpdate();
              }
              else{
                that.$message('参与失败！');
              }
            })
            .catch(function (error) {
              console.log(error);
              that.$message('参与失败！');
            });
        }).catch(() => {
          that.$message({
            type: 'info',
            message: '取消参与'
          });
        });
      },
      handleOpen (key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath);
      }
    },
    data () {
      return {
        user: {
          username: this.$store.state.username,
          level: this.$store.state.level,
        },
        page: 1,
        questions: [],
        answer:[],
        question_index:[],
        help_page_menu: "0.0",
        url_crowdsourcing: require("../../../static/crowdTestingTag.png"),
        input_search: '',
        input_advice: '',
        task: {},
        accepted:0,
      }
    },
    created()
    {
      function dateToString(datetime){
        let date = datetime.slice(0,10);
        let time = datetime.slice(11,19)
        return date + ' ' + time;
      }
      let task_id = this.$route.query.task_id;
      let that=this;
      let param = new URLSearchParams();
      console.log("a");
      console.log(task_id);
      param.append('id',task_id);
      axios.get('/api/task/find-by-id',
        {params:{'id': task_id}})
        .then(function (response) {
          let task = response.data.task;
          task.start_time = dateToString(task.start_time);
          task.end_time = dateToString(task.end_time);
          that.task = task;
          that.$forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
        });
      axios.get('/api/question/see-all-question',
        {params:{'taskId': task_id}})
        .then(function (response) {
          let questions = response.data.Questions;
          if(questions.length >= 5){
            that.questions = questions.slice(0,5);
          }
          else{
            that.questions = questions;
          }
          for (let i = 0; i < that.questions.length; i++) {
            that.question_index[that.questions[i].question.id] = i + 1;
            let an_answer = {
              type: that.questions[i].question.type,
              radio: '',
              checkList: [],
              open_answer: '',
            }
            that.answer.push(an_answer);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
</script>

<style scoped>
</style>
