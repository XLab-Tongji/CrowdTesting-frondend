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
                        <el-form label-position="left" label-width="120px" :model="user" >
                            <el-form-item label="项目名称">
                             <el-input v-model="name"></el-input>
                            </el-form-item>
                            <el-form-item label="项目描述">
                                <el-input v-model="discribe" ></el-input>
                            </el-form-item>
                            <el-form-item label="项目标签">
                                <el-input v-model="discribe" ></el-input>
                            </el-form-item>
                            <el-form-item label="每个任务的报酬">
                                <el-input v-model="reward_per" ></el-input>
                            </el-form-item>
                             <el-form-item label="完成每个问题的人数">
                                <el-input v-model="populat_per" ></el-input>
                            </el-form-item>
                            <el-form-item label="完成每个任务的最长时限">
                                <el-input v-model="time_per" ></el-input>
                            </el-form-item>
                            <el-form-item label="完成每个任务的最长时限">
                                <el-input v-model="time_per" ></el-input>
                            </el-form-item>
                            <el-form-item label="项目有效期">
                                <el-input v-model="limitation" ></el-input>
                            </el-form-item>
                            <el-form-item label="自动支付给参与者">
                                <el-input v-model="auto_pay" ></el-input>
                            </el-form-item>
                            <el-form-item >
                                <el-radio v-model="if_expert" label="1">是否需要专家等级的参与者完成项目？</el-radio>
                            </el-form-item>
                            <el-form-item label="参与者需要的额外资质：">
                                <el-input v-model="ex_condition" ></el-input>
                            </el-form-item>
                            <el-form-item >
                                <el-radio v-model="if_adult" label="1">项目中的问题是否含有成人内容？</el-radio>
                            </el-form-item>
                            <el-form-item>
                                <el-button  @click="" :loading=this.button_disabled class="next_step1" type="primary">
                                    下一步
                                </el-button>
                            </el-form-item>
                        </el-form>
                    </div><!--attribute-->
                </el-tab-pane>

                <el-tab-pane label="设计布局" name="second">
                  <el-row type="flex" justify="center" style="margin-top:6vh;margin-bottom:6vh">
                    <el-col span="16">
                      <el-input
                        type="textarea"
                        :autosize="{ minRows: 20, maxRows: 20}"
                        placeholder="请输入问卷"
                        v-model="text_area1"
                        id="input_area">
                      </el-input>
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
                      <el-button type="primary">
                        <span style="font-size:1.2vw">提交</span>
                      </el-button>
                    </el-col>
                  </el-row>
                </el-tab-pane>
                <el-tab-pane label="项目预览" name="third">
                  <el-row type="flex" justify="center" style="margin-top:6vh;margin-bottom:6vh">
                    <el-col span="16">
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
                                <span>{{ scope.row.question_num }}.{{ scope.row.question_title.question_content }}【单选题】</span>
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
                                <span>{{ scope.row.question_num }}.{{ scope.row.question_title.question_content }}【多选题】</span>
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
                                <span>{{ scope.row.question_num }}.{{ scope.row.question_title.question_content }}【简答题】</span>
                              </div>
                            </template>
                          </el-table-column>
                        </el-table>
                      </template>
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
      }
      let questions = []
      let index = 0;
      for(let i=0;i<lines.length;i++) {
        let line = lines[i];
        if(line==='')
          continue;
        let num = 0;
        line = line.replace(" ","");
        let first = line.split(".")[0];
        if(!isNaN(parseInt(first,10))){
          let new_question = {
            question_title:{
              question_content:'',
              resource_loading:0,
              type:0,
            },
            options:[]
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
      if(questions.length!==0)
        console.log(questions[index].options);
      return questions;
    }
  },
  data() {
    return {
      activeName2: 'first',
      text_area1: '',
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    open_help(){

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
     margin:30px;
}
.attribute{
    width: 800px;
}
</style>
