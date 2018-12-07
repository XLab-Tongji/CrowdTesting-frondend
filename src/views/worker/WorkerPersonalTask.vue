<template>
  <el-container>
    <!--导航-->
    <WorkerHomepageTopbar/>
    <el-header height="30px" style=""></el-header>

    <el-main>
      <el-row style="color:#4D4D4D;margin-bottom: 3vh">
        <el-col :span="24">
          <span style="padding-left: 1vw">
            <b style="font-size:1.7vw;letter-spacing: 0.2vh">任务管理</b>
          </span>
        </el-col>
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
              <el-checkbox label="显示已完成任务" border></el-checkbox>
              <el-checkbox label="显示未完成任务" border></el-checkbox>
            </el-checkbox-group>
          </template>
        </el-col>
      </el-row>
      <el-row>
        <el-col style="border-style:solid;border-width:0.3vh;border-color:#E6E6E6">
          <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D;padding-right: 3vw"><b>排序：</b></span>
          <el-button type="success" style="color:#ffffff" @click="orderByReward" size="mini">报酬</el-button>
          <el-button type="danger" style="color:#ffffff" @click="orderByDate" size="mini">创建时间</el-button>
        </el-col>
      </el-row>
      <el-row style="background-color:#F2F0F0;height:5vh">
        <el-col :span="4">
          <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh">需求方</span>
        </el-col>
        <el-col :span="9">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">项目描述</span>
        </el-col>
        <el-col :span="2">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">报酬</span>
        </el-col>
        <el-col :span="3">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">创建时间</span>
        </el-col>
        <el-col :span="3">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">完成度</span>
        </el-col>
        <el-col :span="3">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">备注</span>
        </el-col>
      </el-row>
      <el-collapse accordion v-for = "personalTask in showTaskList" :key="personalTask.task_id">
        <el-collapse-item v-if="personalTask.status!='100%'">
          <template slot="title">
            <el-col :span="4">
              <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;">{{personalTask.requester_id}}</span>
            </el-col>
            <el-col :span="9" v-if="personalTask.type!=null">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.type}}</span>
            </el-col>
            <el-col :span="9" v-else>
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">暂无</span>
            </el-col>
            <el-col :span="2">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.reward}}</span>
            </el-col>
            <el-col :span="3">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.create_time}}</span>
            </el-col>
            <el-col :span="2">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.status}}</span>
            </el-col>
            <el-col :span="2">
              <el-button type="text" style="width:100%;height:5vh;font-weight:500;color:#ffffff;background-color:#015D73;margin-left:3vh" @click="continuation(personalTask.task_id)">
                <span style="font-size:1.0vw">继续</span>
              </el-button>
            </el-col>
          </template>
          <div style="background-color: #F2F0F0">
            <el-row>
              <el-col :span="13">
                <span style="color:#4D4D4D;padding-left: 1vw">简要描述：</span>
              </el-col>
              <el-col :span="6">
                <span style="color:#4D4D4D">限制条件：</span>
              </el-col>
              <el-col :span="5">
                <i class="el-icon-error"></i>
                <span style="color:#4D4D4D">Not yet finished</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="13">
                <span style="color:#4D4D4D;padding-left: 1vw" v-if="personalTask.description!=null">{{personalTask.description}}</span>
                <span style="color:#4D4D4D;padding-left: 1vw" v-else>暂无</span>
              </el-col>
              <el-col :span="6">
                <span style="color:#4D4D4D" v-if="personalTask.requests!=null">{{personalTask.requests}}</span>
                <span style="color:#4D4D4D" v-else>暂无</span>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>
        <el-collapse-item v-else>
          <template slot="title">
            <el-row style="background-color: #5ED5D1">
              <el-col :span="4">
                <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;">{{personalTask.requester_id}}</span>
              </el-col>
              <el-col :span="9" v-if="personalTask.type!=null">
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.type}}</span>
              </el-col>
              <el-col :span="9" v-else>
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">暂无</span>
              </el-col>
              <el-col :span="2">
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.reward}}</span>
              </el-col>
              <el-col :span="3">
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.create_time}}</span>
              </el-col>
              <el-col :span="2">
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.status}}</span>
              </el-col>
            </el-row>
          </template>
          <div style="background-color: #4D8D9D">
            <el-row>
              <el-col :span="13">
                <span style="color:#ffffff;padding-left: 1vw">简要描述:</span>
              </el-col>
              <el-col :span="6">
                <span style="color:#ffffff">限制条件</span>
              </el-col>
              <el-col :span="5">
                <i class="el-icon-success"></i>
                <span style="color:#ffffff">已完成</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="13">
                <span style="color:#ffffff;padding-left: 1vw" v-if="personalTask.description!=null">{{personalTask.description}}</span>
                <span style="color:#ffffff;padding-left: 1vw" v-else>暂无</span>
              </el-col>
              <el-col :span="6">
                <span style="color:#ffffff" v-if="personalTask.requests!=null">{{personalTask.requests}}</span>
                <span style="color:#ffffff" v-else>暂无</span>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>
      </el-collapse>

      <div class="block" style="text-align: center;margin-top:6vh">
        <el-pagination
          layout="prev, pager, next"
          :total="showTaskList.length">
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
        console.log(this.checkList);
        if(this.checkList.indexOf("显示已完成任务") != -1){
          for(let taskIndex in showTaskListCopy){
            let aTask = showTaskListCopy[taskIndex];
            if(aTask.level <= this.user.level && aTask.status == '100%')
              this.showTaskList.push(aTask);
          }
        }
        if(this.checkList.indexOf("显示未完成任务") != -1) {
          for (let taskIndex in showTaskListCopy) {
            let aTask = showTaskListCopy[taskIndex];
            if (aTask.level <= this.user.level && aTask.status != '100%')
              this.showTaskList.push(aTask);
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
      orderByReward(){
        this.showTaskList = newSort(this.showTaskList,'reward');
        this.activeNames = []
        this.$forceUpdate();
      },
      orderByDate(){
        this.showTaskList = newSort(this.showTaskList,'create_time');
        this.activeNames = []
        this.$forceUpdate();
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      click(){

      },
      continuation(task_id){
        this.$router.push({name: 'WorkerTaskContinuation', params: {task_id: task_id}})
      }
    },
    data(){
      return{
        user:{
          username :this.$store.state.username,
          level:2
        },
        taskList:[],
        showTaskList:[],
        showTaskCopy:[],
        minReward:'',
        maxReward:'',
        startDate:'',
        endDate:'',
        keyword:'',
        checkList:["显示已完成任务","显示未完成任务"],
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
      }
    },
    created()
    {
      let that=this
      axios.get('/api/personal-task/find-my-task')
        .then(function (response) {
          let personalTasks = response.data.tasks;
          console.log(personalTasks);
          that.taskList = personalTasks;
          that.showTaskList = personalTasks;
          that.showTaskListCopy = personalTasks;
          that.$forceUpdate();
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
