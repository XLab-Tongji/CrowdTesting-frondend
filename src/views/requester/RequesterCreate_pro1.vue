<template>
 <div>
    <!--top bar-->
    <RequesterHomepageTopbar/>

    <el-row class="row_requester_main">
      <el-col :span="24">
          <div class="create">
              <div class="create_title">
                  <span>创建新项目</span>
              </div>
          </div>

          <div class="create_box">
                <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                <el-tab-pane label="项目属性" name="first">
                    <div class="attribute box_containing">
                        <el-form label-position="left" label-width="120px" style="width: 600px;" >
                            <el-form-item label="项目名称">
                             <el-input v-model="task.name"></el-input>
                            </el-form-item>
                            <el-form-item label="项目描述">
                                <el-input v-model="task.description"  type="textarea" :autosize="{ minRows: 3, maxRows: 5}"></el-input>
                            </el-form-item>
                            <el-form-item label="项目类型">
                                
                                <el-select v-model="task.type"  placeholder="请选择">
                                    <el-option label="问卷调查"  value="问卷调查"></el-option>
                                    <el-option label="图片标记"  value="图片标记"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="问题单价">
                                <el-input-number v-model="task.reward" :precision="2"  type="number"
                                :step="0.1" :min="0" style="width:200px;margin-right:10px"></el-input-number>元
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
                                <el-input-number v-model="population" :min="0" type="number"
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
                            <el-form-item label="推荐完成时间">
                                <el-input-number v-model="task.time_limitation" :precision="2" :min="0" type="number"
                                 style="width:200px;margin-right:10px"></el-input-number>小时
                                 <el-popover
                                    placement="right-start"
                                    title="属性说明"
                                    width="200"
                                    trigger="hover"
                                    content="推荐参与者从开始答题到提交项目的时间">
                                     <i class="el-icon-info" slot="reference" style="padding-left:20px;color:#909399"></i>
                                  </el-popover>
                            </el-form-item>
                            <el-form-item label="项目有效期"><!--限制：开始日期不能小于当前日期-->
                                <div class="block">
                                    <!--{{limi_value}}-->
                                    <el-date-picker
                                    v-model="limi_value"
                                    type="datetimerange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                    </el-date-picker>
                                </div>
                            </el-form-item>
                            <el-form-item label="自动支付时间">
                                <el-input-number v-model="task.pay_time" :precision="2" type="number"
                                 style="width:200px;margin-right:10px" :max="72" :min="0"></el-input-number>小时
                                  <el-popover
                                    placement="right-start"
                                    title="属性说明"
                                    width="200"
                                    trigger="hover"
                                    content="参与者完成项目后多久系统自动支付酬金给参与者（不超过72小时）">
                                     <i class="el-icon-info" slot="reference" style="padding-left:20px;color:#909399"></i>
                                  </el-popover>
                            </el-form-item>
                            <el-form-item label="额外要求">
                              <el-switch
                                v-model="worker_condition_seen"
                                active-color="#13ce66"
                                >
                              </el-switch>
                              <el-popover
                                    placement="right-start"
                                    title="属性说明"
                                    width="200"
                                    trigger="hover"
                                    content="对参与者是否有额外的条件限制">
                                     <i class="el-icon-info" slot="reference" style="padding-left:20px;color:#909399"></i>
                                  </el-popover>
                            </el-form-item>
                            <div v-if="worker_condition_seen">
                            <el-form-item label="推荐领域"  >
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
                                <el-input-number v-model="task.level" type="number"
                                 :min="0" style="width:200px;margin-right:10px"></el-input-number>
                                 <el-popover
                                    placement="right-start"
                                    title="属性说明"
                                    width="200"
                                    trigger="hover"
                                    content="参与者需要多高的等级才能更好地完成项目">
                                     <i class="el-icon-info" slot="reference" style="padding-left:20px;color:#909399"></i>
                                  </el-popover>
                            </el-form-item>
                            <el-form-item label="年龄要求">
                                <el-input-number v-model="task.min_age" type="number"
                                 :min="0" style="width:200px;margin-right:10px"></el-input-number>
                                 <span style="margin-right:10px;"> — </span>
                                 <el-input-number v-model="task.max_age"
                                 :min="0" style="width:200px;margin-right:10px"></el-input-number>
                            </el-form-item>
                            </div>
                            <el-form-item>
                              <el-button class="next_step1" @click="submitTaskInformation">
                                    保存设置
                                </el-button>
                                <el-button  @click="toDesign" class="next_step1" type="primary" v-if="have_saved">
                                    下一步
                                </el-button>
                            </el-form-item>
                        </el-form>
                    </div><!--attribute-->
                </el-tab-pane>


                  <el-tab-pane label="设计布局" name="second">
                    <el-row type="flex" justify="center" style="margin-top:6vh;margin-bottom:6vh">
                      <el-col :span="8">
                        <el-input
                          type="textarea"
                          :autosize="{ minRows: 20, maxRows: 20}"
                          placeholder="请输入问卷"
                          v-model="text_area1"
                          id="input_area">
                        </el-input>
                      </el-col>
                      <el-col :span="8">
                        <template>
                          <el-table
                            :data="questions"
                            :show-header=false
                            :border=true
                            :max-height="432"
                            :height="432"
                            stripe
                            style="width: 100%;height:100%"
                            id="show_table">
                            <el-table-column>
                              <template slot-scope="scope">
                                <div v-if="scope.row.question_title.type===0">
                                  <div v-if="scope.row.question_title.must===0">
                                    <span>{{ scope.row.question_num }}.{{ scope.row.question_title.question_content }}【单选题】(选填)</span>
                                    <el-button type="primary" icon="el-icon-plus" size="mini" @click="showAddPic(scope.$index)">图片</el-button>
                                  </div>
                                  <div v-else>
                                    <span>{{ scope.row.question_num }}.{{ scope.row.question_title.question_content }}【单选题】(必填)</span>
                                    <el-button type="primary" icon="el-icon-plus" size="mini" @click="showAddPic(scope.$index)">图片</el-button>
                                  </div>
                                  <template>
                                    <div v-for="option in scope.row.options">
                                      <el-radio  :label=option.option_number>{{option.content}}
                                      </el-radio>
                                      <div v-if="option.open_answer_permission===1">
                                        <el-input placeholder="请输入内容" size="small" style="width:50%"></el-input>
                                      </div>
                                    </div>
                                  </template>
                                </div>
                                <div v-else-if="scope.row.question_title.type===1">
                                  <div v-if="scope.row.question_title.must===0">
                                    <span>{{ scope.row.question_num }}.{{ scope.row.question_title.question_content }}【多选题】(选填)</span>
                                    <el-button type="primary" icon="el-icon-plus" size="mini" @click="showAddPic(scope.$index)">图片</el-button>
                                  </div>
                                  <div v-else>
                                    <span>{{ scope.row.question_num }}.{{ scope.row.question_title.question_content }}【多选题】(必填)</span>
                                    <el-button type="primary" icon="el-icon-plus" size="mini" @click="showAddPic(scope.$index)">图片</el-button>
                                  </div>
                                  <template>
                                    <div v-for="option in scope.row.options">
                                      <el-checkbox  :label=option.option_number>{{option.content}}
                                      </el-checkbox>
                                      <div v-if="option.open_answer_permission===1">
                                        <el-input placeholder="请输入内容" size="small" style="width:50%"></el-input>
                                      </div>
                                    </div>
                                  </template>
                                </div>
                                <div v-else-if="scope.row.question_title.type===2">
                                  <div v-if="scope.row.question_title.must===0">
                                    <span>{{ scope.row.question_num }}.{{ scope.row.question_title.question_content }}【简答题】（选填）</span>
                                    <el-button type="primary" icon="el-icon-plus" size="mini" @click="showAddPic(scope.row.question_id)">图片</el-button>
                                  </div>
                                  <div v-else>
                                    <span>{{ scope.row.question_num }}.{{ scope.row.question_title.question_content }}【简答题】（必填）</span>
                                    <el-button type="primary" icon="el-icon-plus" size="mini" @click="showAddPic(scope.$index)">图片</el-button>
                                  </div>
                                </div>
                              </template>
                            </el-table-column>
                          </el-table>
                        </template>
                      </el-col>
                    </el-row>
                    <el-dialog title="添加图片" :visible.sync="dialogVisible">
                      <template>
                        <el-table
                          :data="images"
                          style="width: 100%">
                          <el-table-column type="expand">
                            <template slot-scope="scope">
                              <el-form label-position="left" inline>
                                <el-form-item label="">
                                  <el-row style="width:514px">
                                  <div v-for="picture in images[scope.$index].resources">
                                  <el-col :span="7" :key="picture.id" style="margin-left: 10px">
                                    <el-card :body-style="{ padding: '0px' }" style="width:150px">
                                      <img :src="picture.link" class="image" style="width: 150px;height:120px">
                                      <div style="text-align:center">
                                        <el-button type="text" class="button" v-if="questions[index_of_questions].resource.length === 0 || questions[index_of_questions].resource.indexOf(picture.id)===-1" @click="addPicture(picture.id)">添加</el-button>
                                        <el-button type="text" class="button" v-else @click="deletePicture(picture.id)">删除</el-button>
                                      </div>
                                    </el-card>
                                  </el-col>
                                  </div>
                                  </el-row>
                                </el-form-item>
                              </el-form>
                            </template>
                          </el-table-column>
                          <el-table-column
                            label="目录"
                            prop="photoAlbum.name">
                          </el-table-column>
                        </el-table>
                      </template>
                    </el-dialog>
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
                  </el-tab-pane>

            </el-tabs>
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
            RequesterHomepageTopbar
        },
    computed: {
      questions:function(){
        let lines = this.text_area1.split("\n");
        let question_title = {
          question_content:'',
          resource_loading:0,
          type:0,
        }
        let question = {
          question_num:0,
          question_title:'',
          options:[],
          resource:[],
        }
        let questions = [];
        let index = 0;
        let num = 0;
        for(let i=0;i<lines.length;i++) {
          let line = lines[i];
          if(line==='')
            continue;
          line = line.replace(" ","");
          let first = line.split(".")[0];
          if(!isNaN(parseInt(first,10))){
            num = 0;
            let new_question = {
              question_title:{
                question_content:'',
                resource_loading:0,
                type:0,
                must:1,
              },
              options:[],
              resource:[],
            }
            questions.push(new_question);
            index = questions.length - 1;
            questions[index].question_num = index + 1;
            questions[index].question_title.type = 0;
            if(questions[index].options.length===0)
              questions[index].question_title.type = 2;
            if(line.indexOf("【单选题】") !== -1){
              questions[index].question_title.type = 0;
              line = line.replace('【单选题】','');
            }
            else if(line.indexOf("【多选题】") !== -1){
              questions[index].question_title.type = 1;
              line = line.replace('【多选题】','');
            }
            else if (line.indexOf("【简答题】") !== -1){
              questions[index].question_title.type = 2;
              line = line.replace('【简答题】','');
            }
            if(line.indexOf("（选填）") !== -1){
              questions[index].question_title.must = 0;
              line = line.replace('（选填）','');
            }
            else if(line.indexOf("（必填）") !== -1){
              questions[index].question_title.must = 1;
              line = line.replace('（选填）','');
            }
            if(line.split(".").length<2)
              questions[index].question_title.question_content = '';
            else
              questions[index].question_title.question_content = line.split(".")[1];
            questions[index].options = [];
            num = 0;
          }
          else{
            let option = {
              option_number: 0,
              content: '',
              question_id: 0,
              open_answer_permission: 0,
            }
            if(questions.length!==0) {
               if(questions[index].question_title.type === 2)
                 questions[index].question_title.type = 0;
            }
            if(first.length===1&&((first[0]>='A'&&first[0]<='Z')||(first[0]>='a'&&first[0]<='z'))){
              let arr = line.split("");
              arr.splice(1,1);
              arr.splice(0,1);
              line = arr.join("");
            }
            if(line.indexOf("【填空】") !== -1){
              option.open_answer_permission = 1;
              line = line.replace('【填空】','');
            }
            else
              option.open_answer_permission = 0;
            option.content = line;
            num = num + 1;
            option.option_number = num;
            if(questions.length!==0)
              questions[index].options.push(option);
          }
        }
        return questions;
      }
    },
        data() {
          return {
            task:{
              name:'',
              description:'',
              reward:0,
              status:0,
              type:'',
              restrictions:'暂无',
              start_time:'',
              end_time:'',
              level:0,
              time_limitation:0,
              pay_time:0,
              area:'',
              usage:'',
              min_age:0,
              max_age:100,
            },
            activeName2: 'first',
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
                }

                ],
            worker_condition_seen:false,
            ex_condition:[],
            text_area1: '',
            task_id: 2,
            dialogVisible:false,
            index_of_questions:0,
            images:[],
            limi_value:'',
            population:0,
            task_submit:false,
            refresh:false,
            have_saved:false
          };
        },
        created(){
          let that = this;
          axios({
          method: 'get',
          url: '/api/image/findImages',
          })
          .then(function (response) {
              if (response.data.code[0] == "2") {
                that.images = response.data.images;
              }
          })
        .catch(function (error) {
          success = false;
          console.log(error);
        });
        },
        methods: {
          showAddPic(index){
            this.index_of_questions = index;
            this.dialogVisible = true;
          },
          submit() {
            this.$confirm('是否确认提交?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              console.log(this.questions);
              if(this.task_submit==true) {
                while (!this.refresh) {
                }
                this.submit = false;
                let questions = this.questions;
                let task_id = this.task_id;
                let that = this;
                let success = true;
                that.refresh = false;
                console.log(questions);
                for (let i = 0; i < questions.length; i++) {
                  let resource_loading = 0;
                  if (questions[i].resource.length > 0) {
                    resource_loading = 1;
                  }
                  let param = new URLSearchParams();
                  param.append('taskId', task_id);
                  param.append('content', questions[i].question_title.question_content);
                  param.append('resourceLoading', resource_loading);
                  param.append('type', questions[i].question_title.type);
                  param.append('compulsory', questions[i].question_title.must);
                  axios({
                    method: 'post',
                    url: '/api/question/add-question',
                    data: param
                  })
                    .then(function (response) {
                      console.log(response);
                      if (response.data.code[0] == "2") {
                        let question_id = response.data.questionId;
                        console.log(question_id);
                        for (let j = 0; j < questions[i].options.length; j++) {
                          questions[i].options[j].question_id = question_id;
                          console.log(questions[i].options[j].question_id);
                          let parama = new URLSearchParams();
                          parama.append('content', questions[i].options[j].content);
                          parama.append('questionId', questions[i].options[j].question_id);
                          parama.append('openAnswerPermission', questions[i].options[j].open_answer_permission);
                          parama.append('optionNumber', questions[i].options[j].option_number);
                          console.log(parama);
                          axios({
                            method: 'post',
                            url: '/api/question/add-option',
                            data: parama
                          })
                            .then(function (response) {
                              console.log(response);
                              if (response.data.code[0] == "2") {
                                console.log(response);
                                
                              }
                            })
                            .catch(function (error) {
                              success = false;
                              console.log(error);
                            });
                        }
                        for (let k = 0; k < questions[i].resource.length; k++) {
                          let paramb = new URLSearchParams();
                          paramb.append('questionId', question_id);
                          paramb.append('resourceId', questions[i].resource[k]);
                          axios({
                            method: 'post',
                            url: '/api/question/add-resource',
                            data: paramb
                          })
                            .then(function (response) {
                              console.log(response);
                              if (response.data.code[0] == "2") {
                                console.log(response);
                              }
                            })
                            .catch(function (error) {
                              success = false;
                              console.log(error);
                            });
                        }
                        that.$router.push({path: 'requester_manage_main'});
                      }
                    })
                    .catch(function (error) {
                      success = false;
                      console.log(error);
                    });
                }
                if (success == true) {
                  that.$message("提交成功！");
                }
                else {
                  that.$message("上传失败！");
                }
              }
              else{
                this.$message("请先提交任务信息！");
              }
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '取消提交'
              });
            });
          },
          handleClick(tab, event) {
            console.log(tab, event);
          },
          toDesign(){
            this.activeName2='second';
          },
          open_help() {},
          addPicture(picture_id){
            this.questions[this.index_of_questions].resource.push(picture_id);
            console.log(this.questions);
          },
          deletePicture(picture_id){
            this.questions[this.index_of_questions].resource.splice(this.questions[this.index_of_questions].resource.indexOf(picture_id),1);
            console.log(this.questions);
          },
          submitTaskInformation(){
            function dateToString(draftTimeV){
              draftTimeV = draftTimeV + "";
              let date = '';
              let month = new Array();
              month["Jan"] = 1; month["Feb"] = 2; month["Mar"] = 3; month["Apr"] = 4; month["May"] = 5; month["Jan"] = 6;
              month["Jul"] = 7; month["Aug"] = 8; month["Sep"] = 9; month["Oct"] = 10; month["Nov"] = 11; month["Dec"] = 12;
              let str = draftTimeV.split(" ");
              date = str[3] + "-";
              date = date + month[str[1]] + "-" + str[2] + ' ' + str[4];
              return date;
            }
            let that = this;
            this.$confirm('是否确认提交任务信息?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              let param = new URLSearchParams();
              let area = '';
              for(let i=0;i<that.ex_condition.length;i++){
                area += that.ex_condition[i] + ';'
              }
              param.append('name', that.task.name);
              param.append('description', that.task.description);
              param.append('reward', that.task.reward);
              param.append('status', 0);
              param.append('type', that.task.type);
              param.append('restrictions', that.task.restrictions);
              param.append('start_time', dateToString(that.limi_value[0]));
              param.append('end_time', dateToString(that.limi_value[1]));
              param.append('level', that.task.level);
              param.append('time_limitation', that.task.time_limitation);
              param.append('pay_time', that.task.pay_time);
              param.append('area', area);
              param.append('usage', that.task.usage);
              param.append('min_age', that.task.min_age);
              param.append('max_age', that.task.max_age);
              axios({
                method: 'post',
                url: '/api/task/add',
                data: param
              })
                .then(function (response) {
                  that.task_id = response.data.taskId;
                  that.refresh = true;
                  that.task_submit = true;
                  that.$message("提交成功！");
                  that.have_saved=true;
                })
                .catch(function (error) {
                  console.log(error);
                  that.$message("上传失败！");
                });
            }).catch(() => {
              that.$message({
                type: 'info',
                message: '取消提交'
              });
            });
          }
        }
}
</script>

<style scoped>
.row_requester_main{
    height: auto;
}
.create{
    margin:30px;
    background-color: #fff;
    height: 100px;
    border: solid 1px #DCDFE6;
}
.create_title{
    width: 600px;
    padding-top: 30px;
    padding-bottom: 20px;
    margin-bottom: 10px;
    padding-left: 10px;
    margin-left: 30px;
    font-size: 25px;
    color: #303133;
}
.create_box{
    margin:30px;
    background-color: #fff;
     border: solid 1px #DCDFE6;

}
.box_containing{
     margin:30px 80px;
}


</style>
