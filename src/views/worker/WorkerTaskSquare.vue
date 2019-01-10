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
          <span style="padding-left: 1vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D;">单位酬金：</span>
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
              <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D;padding-right: 2vw"><b>只显示：</b></span>
              <el-checkbox label="可接受任务" border></el-checkbox>
              <el-checkbox label="推荐任务" border></el-checkbox>
            </el-checkbox-group>
          </template>
        </el-col>
      </el-row>
      <el-row>
        <el-col style="border-style:solid;border-width:0.3vh;border-color:#E6E6E6">
          <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D;padding-right: 3vw"><b>排序：</b></span>
          <el-button type="primary" style="color:#ffffff" @click="orderByWorkerNum" size="mini">
            参与人数
            <i class="el-icon-d-caret" v-if="heatOrder==0"></i>
            <i class="el-icon-caret-bottom" v-if="heatOrder==1"></i>
            <i class="el-icon-caret-top" v-if="heatOrder==2"></i>
          </el-button>
          <el-button type="success" style="color:#ffffff" @click="orderByReward" size="mini">
            单位酬金
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
        <el-col :span="7">
          <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh">项目名称</span>
        </el-col>
        <el-col :span="2">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">项目类型</span>
        </el-col>
        <el-col :span="2">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">参与人数</span>
        </el-col>
        <el-col :span="2">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">单位酬金</span>
        </el-col>
        <el-col :span="4">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">开始时间</span>
        </el-col>
        <el-col :span="4">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">预结束时间</span>
        </el-col>
        <el-col :span="3">
          <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">行为</span>
        </el-col>
      </el-row>
      <el-collapse accordion v-for = "task in showTaskList" id = "collapse" v-model="activeNames" :key="task.id">
          <el-collapse-item v-if="user.level<task.level || task.min_age > user.age || task.max_age < user.age">
            <template slot="title">
              <el-col :span="7" v-if="task.name!=null">
                <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.name}}</span>
              </el-col>
              <el-col :span="7" v-else>
                <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh">暂无</span>
              </el-col>
              <el-col :span="2">
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.type}}</span>
              </el-col>
              <el-col :span="2">
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.population}}</span>
              </el-col>
              <el-col :span="2">
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.reward}}元/题</span>
              </el-col>
              <el-col :span="4">
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.start_time}}</span>
              </el-col>
              <el-col :span="3">
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.end_time}}</span>
              </el-col>
              <el-col :span="3">
                <el-button type="text" style="vertical-align:middle;width:100%;font-weight:500;color:#000000;background-color:#ffffff" @click="preview(task.id)">
                  <span style="font-size:1.0vw">预览</span>
                </el-button>
              </el-col>
            </template>
            <div style="background-color: #F2F0F0">
              <el-row>
                <el-col :span="13">
                  <span style="color:#4D4D4D;padding-left: 1vw">项目领域:</span>
                </el-col>
                <!--<el-col :span="7">
                  <span style="color:#4D4D4D">限制条件:</span>
                </el-col>-->
                <el-col :span="3">
                  <span style="color:#4D4D4D">最低年龄:</span>
                </el-col>
                <el-col :span="3">
                  <span style="color:#4D4D4D">最高年龄:</span>
                </el-col>
                <el-col :span="5">
                  <span style="color:#4D4D4D">Level:&nbsp;&nbsp;{{task.level}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="13">
                  <span style="color:#4D4D4D;padding-left: 1vw" v-if="task.area!=null||task.area!=''">{{task.area}}</span>
                  <span style="color:#4D4D4D;padding-left: 1vw" v-else>暂无</span>
                </el-col>
                <!--<el-col :span="7">
                  <span style="color:#4D4D4D" v-if="task.restrictions!=null">{{task.restrictions}}</span>
                  <span style="color:#4D4D4D" v-else>暂无</span>
                </el-col>-->
                <el-col :span="3">
                  <span style="color:#4D4D4D">{{task.min_age}}</span>
                </el-col>
                <el-col :span="3">
                  <span style="color:#4D4D4D">{{task.max_age}}</span>
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
                <el-col :span="7" v-if="task.type!=null">
                  <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.name}}</span>
                </el-col>
                <el-col :span="7" v-else>
                  <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh">暂无</span>
                </el-col>
                <el-col :span="2">
                  <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.type}}</span>
                </el-col>
                <el-col :span="2">
                  <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.population}}</span>
                </el-col>
                <el-col :span="2">
                  <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.reward}}元/题</span>
                </el-col>
                <el-col :span="4">
                  <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.start_time}}</span>
                </el-col>
                <el-col :span="3">
                  <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{task.end_time}}</span>
                </el-col>
                <el-col :span="3">
                  <el-button type="text" style="vertical-align:middle;width:100%;font-weight:500;color:#ffffff;background-color:#015D73" @click="accept(task.id)">
                    <span style="vertical-align:middle;font-size:1.0vw">预览</span>
                  </el-button>
                </el-col>
              </el-row>
            </template>
            <div style="background-color: #4D8D9D">
              <el-row>
                <el-col :span="13">
                  <span style="color:#ffffff;padding-left: 1vw">项目领域:</span>
                </el-col>
                <!--<el-col :span="7">
                  <span style="color:#ffffff">限制条件:</span>
                </el-col>-->
                <el-col :span="3">
                  <span style="color:#ffffff">最低年龄:</span>
                </el-col>
                <el-col :span="3">
                  <span style="color:#ffffff">最高年龄:</span>
                </el-col>
                <el-col :span="5">
                  <span style="color:#ffffff">Level:&nbsp;&nbsp;{{task.level}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="13">
                  <span style="color:#ffffff;padding-left: 1vw" v-if="task.area!=null">{{task.area}}</span>
                  <span style="color:#ffffff;padding-left: 1vw" v-else>暂无</span>
                </el-col>
                <!--<el-col :span="7">
                  <span style="color:#ffffff" v-if="task.restrictions!=null||task.restrictions!=''">{{task.restrictions}}</span>
                  <span style="color:#ffffff" v-else>暂无</span>
                </el-col>-->
                <el-col :span="3">
                  <span style="color:#ffffff">{{task.min_age}}</span>
                </el-col>
                <el-col :span="3">
                  <span style="color:#ffffff">{{task.max_age}}</span>
                </el-col>
                <el-col :span="4">
                  <i class="el-icon-success"></i>
                  <span style="color:#ffffff">Enough.</span>
                </el-col>
              </el-row>
            </div>
          </el-collapse-item>
      </el-collapse>
      <!--<div class="block" style="text-align: center;margin-top:6vh">
        <el-pagination
          layout="prev, pager, next"
          :total="taskList.length">
        </el-pagination>
      </div>-->
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
        let newShowTaskListCopy = [];
        this.showTaskList = [];
        if(this.checkList.indexOf("可接受任务") != -1) {
          for (let taskIndex in showTaskListCopy) {
            let aTask = showTaskListCopy[taskIndex];
            if (aTask.level <= this.user.level && aTask.status != '100%' && aTask.min_age <= this.user.age && this.user.age <= aTask.max_age)
              newShowTaskListCopy.push(aTask);
          }
        }
        else{
          newShowTaskListCopy = showTaskListCopy;
        }
        let copy = newShowTaskListCopy;
        newShowTaskListCopy = [];
        if(this.checkList.indexOf("推荐任务") != -1) {
          for (let taskIndex in copy) {
            let aTask = copy[taskIndex];
            if (aTask.area != null && aTask.area.indexOf(this.user.work_area)!=-1)
              newShowTaskListCopy.push(aTask);
          }
        }
        else{
          newShowTaskListCopy = copy;
        }
        this.showTaskList = newShowTaskListCopy;
        console.log(this.showTaskList);
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
        if(this.endDate != '' && this.endDate < this.startDate) {
          let change = this.startDate;
          this.startDate = this.endDate;
          this.endDate = change;
        }
        console.log(this.endDate);
        console.log(this.startDate);
        for(let task in this.taskList){
          let aTask =this.taskList[task];
          if(aTask.reward >= minReward && aTask.reward <= maxReward){
            if(this.startDate != '' && this.startDate != null && aTask.start_time >= dateToString(this.startDate)) {
              if(this.endDate != ''&& this.endDate != null && aTask.start_time <= dateToString(this.endDate)) {
                if((aTask.name!= null && aTask.name.indexOf(this.keyword) >= 0) ||(aTask.description != null && aTask.description.indexOf(this.keyword) >= 0) || (aTask.restrictions != null && aTask.restrictions.indexOf(this.keyword) >= 0))
                  showTasks.push(aTask);
              }
              else if(this.endDate == ''|| this.endDate != null){
                if((aTask.name!= null && aTask.name.indexOf(this.keyword) >= 0) ||(aTask.description != null && aTask.description.indexOf(this.keyword) >= 0) || (aTask.restrictions != null && aTask.restrictions.indexOf(this.keyword) >= 0))
                  showTasks.push(aTask);
              }
            }
            else if(this.startDate == '' || this.startDate == null) {
              if(this.endDate != '' && this.endDate != null && aTask.start_time <= dateToString(this.endDate)) {
                if((aTask.name!= null && aTask.name.indexOf(this.keyword) >= 0) ||(aTask.description != null && aTask.description.indexOf(this.keyword) >= 0) || (aTask.restrictions != null && aTask.restrictions.indexOf(this.keyword) >= 0))
                  showTasks.push(aTask);
              }
              else if(this.endDate == '' || this.endDate == null ){
                if((aTask.name!= null && aTask.name.indexOf(this.keyword) >= 0) ||(aTask.description != null && aTask.description.indexOf(this.keyword) >= 0) || (aTask.restrictions != null && aTask.restrictions.indexOf(this.keyword) >= 0))
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
        this.showTaskList = newSort(this.showTaskList,'population');
        this.activeNames = [];
        switch(this.heatOrder){
          case 0:
            this.heatOrder = 1;
            break;
          case 1:
            this.heatOrder = 2;
            this.showTaskList.reverse();
            break;
          case 2:
            this.heatOrder = 1;
            break;
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
        this.showTaskList = newSort(this.showTaskList,'start_time');
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
        console.log(task_id);
        this.$router.push({ path: 'worker_task_preview', query: { task_id: task_id }})
      },
      accept(task_id){
        console.log(task_id);
        this.$router.push({ path: 'worker_task_details', query: { task_id: task_id }})
      },
    },
    data(){
      return{
        user:{
          username:this.$store.state.username,
          level:0,
          age:0,
          work_area:'',
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
        checkList:[],
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
      function dateToString(datetime){
        let date = datetime.slice(0,10);
        let time = datetime.slice(11,19)
        return date + ' ' + time;
      }
      let that=this;
      axios.get('/api/worker/find-myself')
        .then(function (response) {
          let worker = response.data.worker;
          that.user.age = worker.age;
          that.user.level = worker.level;
          that.user.work_area = worker.workArea;
          that.$forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
        });
      axios.get('/api/task/find-all')
        .then(function (response) {
          let tasks = response.data.tasks;
          let tasks_copy = tasks;
          if(tasks_copy == undefined ||tasks_copy == null){
            tasks_copy = [];
          }
          tasks = [];
          for(let i=0;i<tasks_copy.length;i++){
            if(tasks_copy[i].status != '100%'){
              tasks_copy[i].start_time = dateToString(tasks_copy[i].start_time);
              tasks_copy[i].end_time = dateToString(tasks_copy[i].end_time);
              tasks.push(tasks_copy[i]);
            }
          }
          axios.get('/api/personal-task/find-my-task')
            .then(function (response) {
              let personalTasks = response.data.tasks;
              if(personalTasks == undefined|| personalTasks==null){
                personalTasks = [];
              }
              let personalTaskList = [];
              for(let i=0;i<personalTasks.length;i++){
                personalTaskList.push(personalTasks[i].id);
              }
              that.personalTaskList = personalTaskList;
              let other_tasks = [];
              for(let i=0;i<tasks.length;i++){
                console.log(personalTaskList);
                if(personalTaskList != null && personalTaskList.indexOf(tasks[i].id)===-1){
                  other_tasks.push(tasks[i]);
                }
              }
              that.taskList = other_tasks;
              that.showTaskList = other_tasks;
              that.showTaskListCopy = other_tasks;
              that.$forceUpdate();
            })
            .catch(function (error) {
              console.log(error);
            });
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
