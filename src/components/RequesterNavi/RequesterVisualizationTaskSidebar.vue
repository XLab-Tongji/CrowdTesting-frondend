<template>
    
              <div class="sidebar">
                    <div class="sidebar_title">
                        <h5 > 任务列表</h5>
                    </div>
                    <el-menu
                    default-active="1" class="el-menu-vertical-demo" 
                    background-color="#4D4D4D" text-color="#fff"  
                    active-text-color="#5ED5D1">
                    <el-menu-item index="1" @click="task">                       
                        <span slot="title">task1</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="task">                       
                        <span slot="title">task2</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="task">                       
                        <span slot="title">task3</span>
                    </el-menu-item>
                    <el-menu-item index="4" @click="task">                       
                        <span slot="title">task4</span>
                    </el-menu-item>
                    </el-menu>
              </div>
      
</template>

<script>
export default {
    methods:{
        task(){
            this.$router.push('/requester_visualization_task')
        }
    }
}
</script>


<style scoped>
.sidebar{
    background-color: #4D4D4D;
    color: #fff;
    height:700px;
}
.sidebar_title{
    font:#fff;
    padding:30px 25px 0 25px;
}
.sidebar_title h5{
    border-bottom:solid 1px rgb(168, 168, 168);
    margin: 0;
    padding-bottom: 20px;
}
</style>
