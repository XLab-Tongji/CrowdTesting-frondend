<template>
  <el-container>
    <!--导航-->
    <WorkerHomepageTopbar/>
    <el-header height="30px" style=""></el-header>
    <el-main>
      <el-row style="color:#4D4D4D;margin-bottom: 3vh">
        <span style="padding-left: 1vw">
        <b style="font-size:1.7vw;letter-spacing: 0.2vh">任务广场</b>
        </span>
      </el-row>
      <el-row>
        <el-col style="border-style:solid;border-width:0.3vh;border-color:#E6E6E6">
          <span style="padding-left: 1vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D;"><b>按条件查找：</b></span>
          <span style="padding-left: 1vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D;">报酬：</span>
          <el-input v-model="minReward" placeholder="" size="mini" style="width:6%"></el-input>
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D;">-</span>
          <el-input v-model="maxReward" placeholder="" size="mini" style="width:6%"></el-input>
          <span style="padding-left: 1vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D;">时间：</span>
          <el-date-picker
            v-model="startDate"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1"
            style="width:10%" size="mini">
          </el-date-picker>
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D;">-</span>
          <el-date-picker
            v-model="endDate"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1"
            style="width:10%" size="mini">
          </el-date-picker>
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D;padding-left: 1vw;">关键字：</span>
          <el-input v-model="keyword" placeholder="请输入任意关键字" style="width:15%" size="mini"></el-input>
          <el-button type="primary" icon="el-icon-search" size="mini" @click="search">搜索</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col style="border-style:solid;border-width:0.3vh;border-color:#E6E6E6">
          <template>
            <el-checkbox-group v-model="checkList" size="mini" @change="handleCheckedChange">
              <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D;padding-right: 3vw"><b>筛选：</b></span>
              <el-checkbox label="显示可接受任务" border></el-checkbox>
              <el-checkbox label="显示等级过高任务" border></el-checkbox>
              <el-checkbox label="显示已完成任务" border></el-checkbox>
              <el-checkbox label="显示未完成任务" border></el-checkbox>
            </el-checkbox-group>
          </template>
        </el-col>
      </el-row>
      <el-row>
        <el-col style="border-style:solid;border-width:0.3vh;border-color:#E6E6E6">
          <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D;padding-right: 3vw"><b>排序：</b></span>
          <el-button type="primary" style="color:#ffffff" @click="orderByWorkerNum" size="mini">
            热度
            <i class="el-icon-d-caret" v-if="heatOrder==0"></i>
            <i class="el-icon-caret-bottom" v-if="heatOrder==1"></i>
            <i class="el-icon-caret-top" v-if="heatOrder==2"></i>
          </el-button>
          <el-button type="success" style="color:#ffffff" @click="orderByReward" size="mini">
            报酬
            <i class="el-icon-d-caret" v-if="rewardOrder==0"></i>
            <i class="el-icon-caret-top" v-if="rewardOrder==1"></i>
            <i class="el-icon-caret-bottom" v-if="rewardOrder==2"></i>
          </el-button>
          <el-button type="danger" style="color:#ffffff" @click="orderByDate" size="mini">
            创建时间
            <i class="el-icon-d-caret" v-if="dateOrder==0"></i>
            <i class="el-icon-caret-top" v-if="dateOrder==1"></i>
            <i class="el-icon-caret-bottom" v-if="dateOrder==2"></i>
          </el-button>
        </el-col>
      </el-row>
      <el-row style="background-color:#F2F0F0;height:5vh">
        <el-col :span="4">
          <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;">需求方</span>
        </el-col>
        <el-col :span="9">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">项目名称</span>
        </el-col>
        <el-col :span="2">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">热度</span>
        </el-col>
        <el-col :span="2">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">报酬</span>
        </el-col>
        <el-col :span="4">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">创建时间</span>
        </el-col>
        <el-col :span="3">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">行为</span>
        </el-col>
      </el-row>
      <el-collapse accordion v-for = "task in showTaskList" id = "collapse" v-model="activeNames" :key="task.task_id">
        <div v-if="personalTaskList.indexOf(task)===-1">
        <el-collapse-item v-if="user.level<task.level">
          <template slot="title">
            <el-col :span="4">
              <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;">{{task.requester_id}}</span>
            </el-col>
            <el-col :span="9" v-if="task.name!=null">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.name}}</span>
            </el-col>
            <el-col :span="9" v-else>
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">暂无</span>
            </el-col>
            <el-col :span="2">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">10000</span>
            </el-col>
            <el-col :span="2">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.reward}}</span>
            </el-col>
            <el-col :span="3">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.create_time}}</span>
            </el-col>
            <el-col :span="1">
            <el-button type="text" style="height:5vh;font-weight:500;color:#000000" @click="preview(task.task_id)">
              <span style="font-size:1.0vw">preview</span>
            </el-button>
            </el-col>
            <el-col :span="2">
              <el-button type="text" style="width:70%;height:5vh;font-weight:500;color:#000000;margin-left:3vh">
                <span style="height:5vh;font-weight:500;color:#000000">Quality</span>
              </el-button>
            </el-col>
          </template>
          <div style="background-color: #F2F0F0">
            <el-row>
              <el-col :span="13">
                <span style="color:#4D4D4D;padding-left: 1vw">Description:</span>
              </el-col>
              <el-col :span="6">
                <span style="color:#4D4D4D">Qualification</span>
              </el-col>
              <el-col :span="5">
                <span style="color:#4D4D4D">Level:&nbsp;&nbsp;{{task.level}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="13">
                <span style="color:#4D4D4D;padding-left: 1vw" v-if="task.description!=null">{{task.description}}</span>
                <span style="color:#4D4D4D;padding-left: 1vw" v-else>暂无</span>
              </el-col>
              <el-col :span="6">
                <span style="color:#4D4D4D" v-if="task.requests!=null">{{task.requests}}</span>
                <span style="color:#4D4D4D" v-else>暂无</span>
              </el-col>
              <el-col :span="4">
                <i class="el-icon-error"></i>
                <span style="color:#4D4D4D">Not enough.</span>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>
        <el-collapse-item v-else>
          <template slot="title">
            <el-row style="background-color: #5ED5D1">
            <el-col :span="4">
              <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;">{{task.requester_id}}</span>
            </el-col>
            <el-col :span="9" v-if="task.type!=null">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.type}}</span>
            </el-col>
            <el-col :span="9" v-else>
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">暂无</span>
            </el-col>
            <el-col :span="2">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">10000</span>
            </el-col>
            <el-col :span="2">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.reward}}</span>
            </el-col>
            <el-col :span="3">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{String(task.create_time)}}</span>
            </el-col>
            <el-col :span="1">
              <el-button type="text" style="height:5vh;font-weight:500;color:#000000" @click="preview(task.task_id)">
                <span style="font-size:1.0vw">preview</span>
              </el-button>
            </el-col>
            <el-col :span="2">
              <el-button type="text" style="vertical-align:middle;width:70%;font-weight:500;color:#ffffff;background-color:#015D73;margin-left:3vh" @click="accept(task.task_id)">
                <span style="vertical-align:middle;font-size:1.0vw">Accept</span>
              </el-button>
            </el-col>
            </el-row>
          </template>
          <div style="background-color: #4D8D9D">
            <el-row>
              <el-col :span="13">
                <span style="color:#ffffff;padding-left: 1vw">Description:</span>
              </el-col>
              <el-col :span="6">
                <span style="color:#ffffff">Qualification</span>
              </el-col>
              <el-col :span="5">
                <span style="color:#ffffff">Level:&nbsp;&nbsp;{{task.level}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="13">
                <span style="color:#ffffff;padding-left: 1vw" v-if="task.description!=null">{{task.description}}</span>
                <span style="color:#ffffff;padding-left: 1vw" v-else>暂无</span>
              </el-col>
              <el-col :span="6">
                <span style="color:#ffffff" v-if="task.requests!=null">{{task.requests}}</span>
                <span style="color:#ffffff" v-else>暂无</span>
              </el-col>
              <el-col :span="4">
                <i class="el-icon-success"></i>
                <span style="color:#ffffff">Enough.</span>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>
        </div>
      </el-collapse>
      <div class="block" style="text-align: center;margin-top:6vh">
        <el-pagination
          layout="prev, pager, next"
          :total="taskList.length">
        </el-pagination>
      </div>
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
        handleCheckedChange(){
          let showTaskListCopy = this.showTaskListCopy;
          this.showTaskList = [];
          if(this.checkList.indexOf("显示可接受任务") != -1){
            if(this.checkList.indexOf("显示已完成任务") != -1){
              for(let taskIndex in showTaskListCopy){
                let aTask = showTaskListCopy[taskIndex];
                if(aTask.level <= this.user.level && aTask.status == '100%')
                  this.showTaskList.push(aTask);
              }
            }
            if(this.checkList.indexOf("显示未完成任务") != -1){
              for(let taskIndex in showTaskListCopy){
                let aTask = showTaskListCopy[taskIndex];
                if(aTask.level <= this.user.level && aTask.status != '100%')
                  this.showTaskList.push(aTask);
              }
            }
          }
          if(this.checkList.indexOf("显示等级过高任务") != -1){
            if(this.checkList.indexOf("显示已完成任务") != -1){
              for(let taskIndex in showTaskListCopy){
                let aTask = showTaskListCopy[taskIndex];
                if(aTask.level > this.user.level && aTask.status == '100%')
                  this.showTaskList.push(aTask);
              }
            }
            if(this.checkList.indexOf("显示未完成任务") != -1){
              for(let taskIndex in showTaskListCopy){
                let aTask = showTaskListCopy[taskIndex];
                if(aTask.level > this.user.level && aTask.status != '100%')
                  this.showTaskList.push(aTask);
              }
            }
          }
        },
        search(){
          function dateToString(draftTimeV){
            draftTimeV = draftTimeV + "";
            let date = '';
            let month = new Array();
            month["Jan"] = 1; month["Feb"] = 2; month["Mar"] = 3; month["Apr"] = 4; month["May"] = 5; month["Jan"] = 6;
            month["Jul"] = 7; month["Aug"] = 8; month["Sep"] = 9; month["Oct"] = 10; month["Nov"] = 11; month["Dec"] = 12;
            let str = draftTimeV.split(" ");
            date = str[3] + "-";
            date = date + month[str[1]] + "-" + str[2];
            return date;
          }
          let showTasks = [];
          let minReward = 0;
          let maxReward = 0;
          if(this.minReward==''){
            minReward = 0;
          }
          else if(!isNaN(parseInt(this.minReward,10))){
            minReward = parseInt(this.minReward);
          }
          else{
            alert("请输入正确的数值！")
            return;
          }
          if(this.maxReward==''){
            maxReward = Number.MAX_VALUE;
          }
          else if(!isNaN(parseInt(this.maxReward,10))){
            maxReward = parseInt(this.maxReward);
          }
          else{
            alert("请输入正确的数值！")
            return;
          }
          if(parseInt(this.maxReward) < parseInt(this.minReward)) {
            let change = this.maxReward;
            this.maxReward = this.minReward;
            this.minReward = change;
            let change_num = maxReward;
            maxReward = minReward;
            minReward = change_num;
          }
          if(this.endDate < this.startDate) {
            let change = this.startDate;
            this.startDate = this.endDate;
            this.endDate = change;
          }
          for(let task in this.taskList){
            let aTask =this.taskList[task];
            if(aTask.reward >= minReward && aTask.reward <= maxReward){
              if(this.startDate != '' && aTask.create_time >= dateToString(this.startDate)) {
                if(this.endDate != '' && aTask.create_time <= dateToString(this.endDate)) {
                  if((aTask.name!= null && aTask.name.indexOf(this.keyword) >= 0) ||(aTask.description != null && aTask.description.indexOf(this.keyword) >= 0) || (aTask.requests != null && aTask.requests.indexOf(this.keyword) >= 0))
                    showTasks.push(aTask);
                  }
                else if(this.endDate == ''){
                    if((aTask.name!= null && aTask.name.indexOf(this.keyword) >= 0) ||(aTask.description != null && aTask.description.indexOf(this.keyword) >= 0) || (aTask.requests != null && aTask.requests.indexOf(this.keyword) >= 0))
                      showTasks.push(aTask);
                }
              }
              else if(this.startDate == '') {
                if(this.endDate != '' && aTask.create_time <= dateToString(this.endDate)) {
                  if((aTask.name!= null && aTask.name.indexOf(this.keyword) >= 0) ||(aTask.description != null && aTask.description.indexOf(this.keyword) >= 0) || (aTask.requests != null && aTask.requests.indexOf(this.keyword) >= 0))
                    showTasks.push(aTask);
                }
                else if(this.endDate == ''){
                  if((aTask.name!= null && aTask.name.indexOf(this.keyword) >= 0) ||(aTask.description != null && aTask.description.indexOf(this.keyword) >= 0) || (aTask.requests != null && aTask.requests.indexOf(this.keyword) >= 0))
                    showTasks.push(aTask);
                }
              }
            }
          }
          this.showTaskList = showTasks;
          this.showTaskListCopy = this.showTaskList;
          this.$forceUpdate();
        },
        orderByWorkerNum(){
          this.rewardOrder = 0;
          this.dateOrder = 0;
          this.activeNames = [];
          switch(this.heatOrder){
            case 0:
              this.heatOrder = 1;
            case 1:
              this.heatOrder = 2;
            case 2:
              this.heatOrder = 1;
          }
        },
        orderByReward(){
          this.heatOrder = 0;
          this.dateOrder = 0;
          this.showTaskList = newSort(this.showTaskList,'reward');
          this.activeNames = []
          switch(this.rewardOrder){
            case 0:
              this.rewardOrder = 1;
              break;
            case 1:
              this.rewardOrder = 2;
              this.showTaskList.reverse();
              break;
            case 2:
              this.rewardOrder = 1;
              break;
          }
          this.$forceUpdate();
        },
        orderByDate(){
          this.heatOrder = 0;
          this.rewardOrder = 0;
          this.showTaskList = newSort(this.showTaskList,'create_time');
          this.activeNames = []
          switch(this.dateOrder){
            case 0:
              this.dateOrder = 1;
              break;
            case 1:
              this.dateOrder = 2;
              this.showTaskList.reverse();
              break;
            case 2:
              this.dateOrder = 1;
              break;
          }
          this.$forceUpdate();
        },
        click(){
          alert("a");
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        preview(task_id){
          this.$router.push({ name: 'WorkerTaskPreview', params: { task_id: task_id }})
        },
        accept(task_id){
          this.$router.push({ name: 'WorkerTaskDetails', params: { task_id: task_id }})
        },
      },
      data(){
        return{
          user:{
            username:this.$store.state.username,
            level:this.$store.state.level,
          },
          input_advice: '',
          taskList:[],
          showTaskList:[],
          showTaskCopy:[],
          minReward:'',
          maxReward:'',
          startDate:'',
          endDate:'',
          keyword:'',
          checkList:["显示可接受任务","显示等级过高任务","显示已完成任务","显示未完成任务"],
          personalTaskList:[],
          activeNames:[],
          pickerOptions1: {
            disabledDate(time) {
              return time.getTime() > Date.now();
            },
            shortcuts: [{
              text: '今天',
              onClick(picker) {
                picker.$emit('pick', new Date());
              }
            }, {
              text: '昨天',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
              }
            }, {
              text: '一周前',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
              }
            }]
          },
          value1: '',
          value2: '',
          heatOrder: 0,
          rewardOrder: 0,
          dateOrder: 0,
        }
      },
    created()
    {
      let that=this
      if(this.$route.params.page!=null)
      {
        this.page = this.$route.params.page;
      }
      axios.get('/api/task/find-all')
        .then(function (response) {
          let tasks = response.data.tasks;
          that.taskList = tasks;
          that.showTaskList = tasks;
          that.showTaskListCopy = that.showTaskList;
          that.$forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
        });
      axios.get('/api/personal-task/find-my-task')
        .then(function (response) {
          let personalTasks = response.data.tasks;
          that.personalTaskList = personalTasks;
          that.$forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  function newSort(array,key){
    return array.sort(function(a,b){
      let x=a[key];
      let y=b[key];
      return ((x>y)?-1:((x<y)?1:0));
    });}
</script>

<style scoped>

</style>
