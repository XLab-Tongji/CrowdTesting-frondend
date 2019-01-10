<template>
  <el-container>
    <WorkerHomepageTopbar/>
    <el-header height="12px" style=""></el-header>
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
        <el-col :span="7" style="font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 2vh">
            <span style="font-size:1.0vw;margin-left: 25%">项目类型：</span>
            <span style="font-size:1.0vw">{{task.type}}</span>
          </div>
        </el-col>
        <el-col :span="7" style="font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 2vh">
            <span style="font-size:1.0vw;margin-left: 25%">资质：</span>
            <span style="font-size:1.0vw">Level {{task.level}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="7" style="font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh">
            <span style="font-size:1.0vw;margin-left: 25%">创建时间：</span>
            <span style="font-size:1.0vw">{{task.start_time}}</span>
          </div>
        </el-col>
        <el-col :span="7" style="font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh">
            <span style="font-size:1.0vw;margin-left: 25%">完成度：</span>
            <span style="font-size:1.0vw">{{task.status}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="7" style="font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh">
            <span style="font-size:1.0vw;margin-left: 25%">终止时间：</span>
            <span style="font-size:1.0vw">{{task.end_time}}</span>
          </div>
        </el-col>
        <el-col :span="7" style="font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh">
            <span style="font-size:1.0vw;margin-left: 25%">项目领域：</span>
            <span style="font-size:1.0vw" v-if="task.area!=''&&task.area!=null">{{task.area}}</span>
            <span style="font-size:1.0vw" v-else>暂无</span>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="7" style="font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh">
            <span style="font-size:1.0vw;margin-left: 25%">最低年龄：</span>
            <span style="font-size:1.0vw">{{task.min_age}}</span>
          </div>
        </el-col>
        <el-col :span="7" style="font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh">
            <span style="font-size:1.0vw;margin-left: 25%">最高年龄：</span>
            <span style="font-size:1.0vw">{{task.max_age}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="7" style="font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh;margin-bottom: 2vh">
            <span style="font-size:1.0vw;margin-left: 25%">时间限制（小时）：</span>
            <span style="font-size:1.0vw">{{task.time_limitation}}</span>
          </div>
        </el-col>
        <el-col :span="7" style="font-size:1.3vw;font-weight:500;color:#ffffff;background-color:#015D73">
          <div style="margin-top: 1vh;margin-bottom: 2vh">
            <span style="font-size:1.0vw;margin-left: 25%">支付时长（小时）：</span>
            <span style="font-size:1.0vw">{{task.pay_time}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top:6vh;margin-left:20%">
        <el-col style="font-size:1.3vw;font-weight:500;letter-spacing: 0.1vh;color:#4D4D4D;padding-left:1vw">
          <i class="el-icon-info"></i>
          <span>项目描述</span>
        </el-col>
      </el-row>
      <el-row style="margin-top:2vh;margin-left:20%">
        <el-col :span="18" style="font-size:1.1vw;font-weight:500;letter-spacing: 0.1vh;color:#4D4D4D;padding-left:1vw">
          <span v-if="task.description!=null">&nbsp;&nbsp;&nbsp;&nbsp;{{task.description}}</span>
          <span v-else>暂无</span>
        </el-col>
      </el-row>
      <el-row style="margin-top:6vh;margin-left:20%">
        <el-col style="font-size:1.3vw;font-weight:500;letter-spacing: 0.1vh;color:#4D4D4D;padding-left:1vw">
          <i class="el-icon-document"></i>
          <span>题目</span>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-bottom:6vh">
        <el-col :span="14">
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
                          <el-input placeholder="请输入内容" size="small" style="width:50%" v-model="answer[question_index[scope.row.question.id]-1].open_answer"></el-input>
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
                          <el-input placeholder="请输入内容" size="small" style="width:50%" v-model="answer[question_index[scope.row.question.id]-1].open_answer"></el-input>
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
                      <el-input type="textarea" :rows="3" placeholder="请输入内容" size="small" style="width:100%" v-model="answer[question_index[scope.row.question.id]-1].open_answer"></el-input>
                    </el-row>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-bottom:6vh">
        <el-col :span="2" style="text-align: center;font-size:1.3vw;font-weight:500;letter-spacing: 0.2vh;color:#ffffff;border-radius:4px;background-color:#ffffff">
          <el-button type="primary" @click="open_help">
            <span style="font-size:1.2vw">帮助</span>
          </el-button>
        </el-col>
        <el-col :span="2" style="text-align: center;font-size:1.3vw;font-weight:500;letter-spacing: 0.2vh;color:#ffffff;border-radius:4px;background-color:#ffffff">
          <span style="font-size:1.2vw">&nbsp;</span>
        </el-col>
        <el-col :span="2" style="text-align: center;font-size:1.3vw;font-weight:500;letter-spacing: 0.2vh;color:#ffffff;border-radius:4px;background-color:#ffffff">
          <el-button type="primary" @click="submit">
            <span style="font-size:1.2vw">提交</span>
          </el-button>
        </el-col>
      </el-row>
      <el-dialog title="填写说明" :visible.sync="helpDialogVisible">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请根据题目内容做出回答，具体要求如下：</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.请选择符合您想法的答案。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.所有标识必做的题目请在提交之前全部作答。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.请尽可能回答选做题。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.项目细节详见本页面上方。</p>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
  import * as Vue from 'autoprefixer'
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
      open_help() {
        this.helpDialogVisible = true;
      },
      submit(){
        let that = this;
        let answer = this.answer;
        console.log(answer);
        let success = true;
        this.$confirm('是否确认提交答案?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let flag = 0;
          console.log(that.answer);
          for(let i=0;i<that.questions.length;i++){
            if(that.questions[i].question.compulsory === 1){
              if(answer[i].type === 0){
                if(answer[i].radio===''){
                  flag = 1
                }
              }
              else if(answer[i].type === 1){
                if(answer[i].checkList.length===0){
                  flag = 1
                }
              }
              else if(answer[i].type === 2){
                if(answer[i].open_answer===''){
                  flag = 1
                }
              }
            }
          }
          console.log(flag);
          if(flag===1){
            that.$message("请至少作答所有的必答题！")
          }
          else {
            for (let i = 0; i < answer.length; i++) {
              if (answer[i].type == 0) {
                let open_answer_permission = 0;
                for(let j=0;j<answer[i].options.length;j++){
                  if(answer[i].radio == answer[i].options[j].id){
                    open_answer_permission = answer[i].options[j].openAnswerPermission;
                    break;
                  }
                }
                if(open_answer_permission == 0) {
                  let param = new URLSearchParams();
                  param.append('optionId', answer[i].radio);
                  axios({
                    method: 'post',
                    url: '/api/question/select-one',
                    data: param
                  })
                    .then(function (response) {
                    })
                    .catch(function (error) {
                      success = false;
                    });
                }
                else{
                  let param1 = new URLSearchParams();
                  param1.append('optionId', answer[i].radio);
                  axios({
                    method: 'post',
                    url: '/api/question/select-one',
                    data: param1
                  })
                    .then(function (response) {
                    })
                    .catch(function (error) {
                      success = false;
                    });
                  let param = new URLSearchParams();
                  param.append('optionId', answer[i].radio);
                  param.append('content', answer[i].open_answer);
                  axios({
                    method: 'post',
                    url: '/api/question/answer-one',
                    data: param
                  })
                    .then(function (response) {
                    })
                    .catch(function (error) {
                      success = false;
                    });
                }
              }
              else if (answer[i].type == 1) {
                for (let j = 0; j < answer[i].checkList.length; j++) {
                  let open_answer_permission = 0;
                  for(let k=0;k<answer[i].options.length;k++){
                    if(answer[i].checkList[j] == answer[i].options[k].id){
                      open_answer_permission = answer[i].options[k].openAnswerPermission;
                      break;
                    }
                  }
                  if(open_answer_permission === 0) {
                    let param = new URLSearchParams();
                    param.append('optionId', answer[i].checkList[j]);
                    axios({
                      method: 'post',
                      url: '/api/question/select-one',
                      data: param
                    })
                      .then(function (response) {
                      })
                      .catch(function (error) {
                        success = false;
                      });
                  }
                  else{
                    let param1 = new URLSearchParams();
                    param1.append('optionId', answer[i].checkList[j]);
                    axios({
                      method: 'post',
                      url: '/api/question/select-one',
                      data: param1
                    })
                      .then(function (response) {
                      })
                      .catch(function (error) {
                        success = false;
                      });
                    let param = new URLSearchParams();
                    param.append('optionId', answer[i].checkList[j]);
                    param.append('content', answer[i].open_answer);
                    axios({
                      method: 'post',
                      url: '/api/question/answer-one',
                      data: param
                    })
                      .then(function (response) {
                      })
                      .catch(function (error) {
                        success = false;
                      });
                  }
                }
              }
              else if (answer[i].type === 2) {
                let param1 = new URLSearchParams();
                param1.append('optionId', that.answer[i].options[0].id);
                axios({
                  method: 'post',
                  url: '/api/question/select-one',
                  data: param1
                })
                  .then(function (response) {
                  })
                  .catch(function (error) {
                    success = false;
                  });
                let param = new URLSearchParams();
                param.append('optionId', that.answer[i].options[0].id);
                param.append('content', that.answer[i].open_answer);
                axios({
                  method: 'post',
                  url: '/api/question/answer-one',
                  data: param
                })
                  .then(function (response) {
                  })
                  .catch(function (error) {
                    success = false;
                  });
              }
            }
            if (success === true) {
              let param = new URLSearchParams();
              param.append('taskId', that.task.id);
              axios({
                method: 'post',
                url: '/api/question/finish',
                data: param
              })
                .then(function (response) {
                  that.$message("提交成功！");
                  that.$router.push({ name: 'WorkerPersonalTask'})
                })
                .catch(function (error) {
                  that.$message("提交失败！");
                });
            }
          }
        }).catch(() => {
          console.log("a");
          that.$message({
            type: 'info',
            message: '取消提交'
          });
        });
      },
      taskSquarePage () {
        this.$router.push({ name: 'WorkerTaskSquare', params: { page: 1 }})
      },
      taskPage () {
        this.$router.push({ name: 'WorkerTaskSquare', params: { page: 2 }})
      },
      helpPage () {
        this.$router.push({ name: 'WorkerTaskSquare', params: { page: 3 }})
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
          level: 2
        },
        page: 1,
        help_page_menu: "0.0",
        url_crowdsourcing: require("../../../static/crowdTestingTag.png"),
        input_search: '',
        input_advice: '',
        task: {},
        questions:[],
        answer:[],
        question_index:[],
        helpDialogVisible:false,
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
      let question_title = [];
      axios.get('/api/task/find-by-id',
        {params:{'id': task_id}})
        .then(function (response) {
          let task = response.data.task;
          that.task = task;
          task.start_time = dateToString(task.start_time);
          task.end_time = dateToString(task.end_time);
          that.$forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
        });
      axios.get('/api/question/see-all-question',
        {params:{'taskId': task_id}})
        .then(function (response) {
          that.questions = response.data.Questions;
          console.log(that.questions);
          for(let i=0;i<that.questions.length;i++){
            that.question_index[that.questions[i].question.id] = i + 1;
            let an_answer = {
              options:that.questions[i].options,
              type:that.questions[i].question.type,
              radio:'',
              checkList:[],
              open_answer:'',
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
