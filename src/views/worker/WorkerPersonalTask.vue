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
              <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D;padding-right: 3vw"><b>筛选：</b></span>
              <el-checkbox label="只显示未完成任务" border></el-checkbox>
            </el-checkbox-group>
          </template>
        </el-col>
      </el-row>
      <el-row>
        <el-col style="border-style:solid;border-width:0.3vh;border-color:#E6E6E6">
          <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;color:#4D4D4D;padding-right: 3vw"><b>排序：</b></span>
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
      <el-collapse accordion v-for = "personalTask in showTaskList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="personalTask.id">
        <el-collapse-item v-if="personalTask.finished!==1">
          <template slot="title">
            <el-col :span="7">
              <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;">{{personalTask.name}}</span>
            </el-col>
            <el-col :span="2" v-if="personalTask.type!=null">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.type}}</span>
            </el-col>
            <el-col :span="2" v-else>
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">暂无</span>
            </el-col>
            <el-col :span="2">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.population}}</span>
            </el-col>
            <el-col :span="2">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.reward}}</span>
            </el-col>
            <el-col :span="4">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.start_time}}</span>
            </el-col>
            <el-col :span="3">
              <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.end_time}}</span>
            </el-col>
            <el-col :span="2">
              <el-button type="text" style="width:100%;font-weight:500;color:#ffffff;background-color:#015D73;margin-left:3vh" @click="continuation(personalTask.id)">
                <span style="font-size:1.0vw">继续</span>
              </el-button>
            </el-col>
          </template>
          <div style="background-color: #F2F0F0">
            <el-row>
              <el-col :span="13">
                <span style="color:#4D4D4D;padding-left: 1vw">项目领域：</span>
              </el-col>
              <!--<el-col :span="7">
                <span style="color:#4D4D4D">限制条件：</span>
              </el-col>-->
              <el-col :span="3">
                <span style="color:#4D4D4D">最低年龄:</span>
              </el-col>
              <el-col :span="3">
                <span style="color:#4D4D4D">最高年龄:</span>
              </el-col>
              <el-col :span="5">
                <i class="el-icon-error"></i>
                <span style="color:#4D4D4D">Not yet finished</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="13">
                <span style="color:#4D4D4D;padding-left: 1vw" v-if="personalTask.area!=''">{{personalTask.area}}</span>
                <span style="color:#4D4D4D;padding-left: 1vw" v-else>暂无</span>
              </el-col>
              <!--<el-col :span="7">
                <span style="color:#4D4D4D" v-if="personalTask.restrictions!=null">{{personalTask.restrictions}}</span>
                <span style="color:#4D4D4D" v-else>暂无</span>
              </el-col>-->
              <el-col :span="3">
                <span style="color:#4D4D4D">{{personalTask.min_age}}</span>
              </el-col>
              <el-col :span="3">
                <span style="color:#4D4D4D">{{personalTask.max_age}}</span>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>
        <el-collapse-item v-else>
          <template slot="title">
            <el-row style="background-color: #5ED5D1">
              <el-col :span="7">
                <span style="padding-left: 2vw;font-size:1.0vw;font-weight:500;line-height: 5vh;">{{personalTask.name}}</span>
              </el-col>
              <el-col :span="2" v-if="personalTask.type!=null">
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.type}}</span>
              </el-col>
              <el-col :span="2" v-else>
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">暂无</span>
              </el-col>
              <el-col :span="2">
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.population}}</span>
              </el-col>
              <el-col :span="2">
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.reward}}</span>
              </el-col>
              <el-col :span="4">
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.start_time}}</span>
              </el-col>
              <el-col :span="3">
                <span style="font-size:1.0vw;font-weight:500;line-height: 5vh">{{personalTask.end_time}}</span>
              </el-col>
            </el-row>
          </template>
          <div style="background-color: #4D8D9D">
            <el-row>
              <el-col :span="13">
                <span style="color:#ffffff;padding-left: 1vw">项目领域:</span>
              </el-col>
              <!--<el-col :span="7">
                <span style="color:#ffffff">限制条件</span>
              </el-col>-->
              <el-col :span="3">
                <span style="color:#ffffff">最低年龄:</span>
              </el-col>
              <el-col :span="3">
                <span style="color:#ffffff">最高年龄:</span>
              </el-col>
              <el-col :span="5">
                <i class="el-icon-success"></i>
                <span style="color:#ffffff">已完成</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="13">
                <span style="color:#ffffff;padding-left: 1vw" v-if="personalTask.area!=''">{{personalTask.area}}</span>
                <span style="color:#ffffff;padding-left: 1vw" v-else>暂无</span>
              </el-col>
              <!--<el-col :span="7">
                <span style="color:#ffffff" v-if="personalTask.restrictions!=null">{{personalTask.restrictions}}</span>
                <span style="color:#ffffff" v-else>暂无</span>
              </el-col>-->
              <el-col :span="3">
                <span style="color:#ffffff">{{personalTask.min_age}}</span>
              </el-col>
              <el-col :span="3">
                <span style="color:#ffffff">{{personalTask.max_age}}</span>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>
      </el-collapse>

      <div class="block" style="text-align: center;margin-top:6vh">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total=showTaskList.length>
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
        if(this.checkList.indexOf("只显示未完成任务") != -1){
          for(let taskIndex in showTaskListCopy){
            let aTask = showTaskListCopy[taskIndex];
            if(aTask.status != '100%')
              this.showTaskList.push(aTask);
          }
        }
        else{
          for(let taskIndex in showTaskListCopy){
            this.showTaskList = showTaskListCopy;
          }
        }
      },
      search(){
        function dateToString(draftTimeV){
          draftTimeV = draftTimeV + "";
          let date = '';
          let month = new Array();
          month["Jan"] = '01'; month["Feb"] = '02'; month["Mar"] = '03'; month["Apr"] = '04'; month["May"] = '05'; month["Jun"] = '06';
          month["Jul"] = '07'; month["Aug"] = '08'; month["Sep"] = '09'; month["Oct"] = '10'; month["Nov"] = '11'; month["Dec"] = '12';
          let str = draftTimeV.split(" ");
          date = str[3] + "-";
          date = date + month[str[1]] + "-" + str[2];
          if(str[2]==undefined)
            date = ''
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
        if(dateToString(this.endDate) != '' && this.endDate < this.startDate && dateToString(this.startDate) != ''){
          let change = this.startDate;
          this.startDate = this.endDate;
          this.endDate = change;
        }
        console.log(this.endDate);
        console.log(this.startDate);
        for(let task in this.taskList){
          let aTask =this.taskList[task];
          if(aTask.reward >= minReward && aTask.reward <= maxReward){
            if(dateToString(this.startDate) != '' && aTask.start_time >= dateToString(this.startDate)) {
              if(dateToString(this.endDate) != '' && aTask.start_time <= dateToString(this.endDate)) {
                if((aTask.name!= null && aTask.name.indexOf(this.keyword) >= 0) ||(aTask.description != null && aTask.description.indexOf(this.keyword) >= 0) || (aTask.restrictions != null && aTask.restrictions.indexOf(this.keyword) >= 0))
                  showTasks.push(aTask);
              }
              else if(dateToString(this.endDate) == ''){
                if((aTask.name!= null && aTask.name.indexOf(this.keyword) >= 0) ||(aTask.description != null && aTask.description.indexOf(this.keyword) >= 0) || (aTask.restrictions != null && aTask.restrictions.indexOf(this.keyword) >= 0))
                  showTasks.push(aTask);
              }
            }
            else if(dateToString(this.startDate) == '') {
              if(dateToString(this.endDate) != '' && aTask.start_time <= dateToString(this.endDate)) {
                if((aTask.name!= null && aTask.name.indexOf(this.keyword) >= 0) ||(aTask.description != null && aTask.description.indexOf(this.keyword) >= 0) || (aTask.restrictions != null && aTask.restrictions.indexOf(this.keyword) >= 0))
                  showTasks.push(aTask);
              }
              else if(dateToString(this.endDate) == ''){
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
      orderByReward(){
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
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      click(){
      },
      continuation(task_id){
        this.$router.push({path: 'worker_task_continuation', query: {task_id: task_id}})
      },
      handleSizeChange(val) {
        this.pagesize = val;
//        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
      },
    },
    data(){
      return{
        user:{
          username:this.$store.state.username,
        },
        taskList:[],
        showTaskList:[],
        showTaskCopy:[],
        minReward:'',
        maxReward:'',
        startDate:'',
        endDate:'',
        keyword:'',
        checkList:[],
        activeNames:[],
        pickerOptions1: {
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
        pagesize:10,
        currentPage:1,
        value1: '',
        value2: '',
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
      let that=this
      axios.get('/api/personal-task/find-my-task')
        .then(function (response) {
          console.log(response);
          let personalTasks = response.data.tasks;
          if(personalTasks == undefined||personalTasks == null){
            personalTasks =[];
          }
          for(let i=0;i<personalTasks.length;i++){
            personalTasks[i].task.start_time = dateToString(personalTasks[i].task.start_time);
            personalTasks[i].task.end_time = dateToString(personalTasks[i].task.end_time);
            let a_task = {
              "id": personalTasks[i].task.id,
              "name": personalTasks[i].task.name,
              "description": personalTasks[i].task.description,
              "reward": personalTasks[i].task.reward,
              "status": personalTasks[i].status,
              "requesterid": personalTasks[i].task.requesterid,
              "type": personalTasks[i].task.type,
              "restrictions": personalTasks[i].task.restrictions,
              "start_time": personalTasks[i].task.start_time,
              "end_time": personalTasks[i].task.end_time,
              "population": personalTasks[i].task.population,
              "level": personalTasks[i].task.level,
              "time_limitation": personalTasks[i].task.time_limitation,
              "pay_time": personalTasks[i].task.pay_time,
              "area": personalTasks[i].task.area,
              "usage": personalTasks[i].task.usage,
              "min_age": personalTasks[i].task.min_age,
              "max_age": personalTasks[i].task.max_age,
              "requester_id": personalTasks[i].task.requester_id,
              "finished": personalTasks[i].finished,
            }
            that.taskList.push(a_task);
          }
          that.showTaskList = that.taskList;
          console.log(that.taskList);
          that.showTaskListCopy = that.taskList;
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
