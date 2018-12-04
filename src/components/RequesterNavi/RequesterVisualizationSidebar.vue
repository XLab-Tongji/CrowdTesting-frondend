<template>
    
              <div class="sidebar">
                    <div class="sidebar_title">
                        <h5 > 问卷可视化信息</h5>
                    </div>
                    <el-menu
                    default-active="1" class="el-menu-vertical-demo" 
                    background-color="#4D4D4D" text-color="#fff"  
                    active-text-color="#5ED5D1">
                    <el-menu-item index="1" @click="release">                       
                        <span slot="title">发布任务</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="answer">                       
                        <span slot="title">回答情况</span>
                    </el-menu-item>
                    </el-menu>
              </div>
      
</template>

<script>
export default {
    methods:{
        release(){
            this.$router.push('/requester_visualization_release')
        },
        answer(){
            this.$router.push('/requester_visualization_answer')
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
