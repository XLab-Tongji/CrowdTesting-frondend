<template>
                <div class="sidebar">
                    <div class="sidebar_title">
                        <h5 @click="create_main"> 创建项目</h5>
                    </div>
                    <el-menu 
                    class="el-menu-vertical-demo" 
                    background-color="#4D4D4D" text-color="#fff"  
                    active-text-color="#5ED5D1">
                    <el-menu-item index="1" @click="create_pro1">                       
                        <span slot="title">调查问卷</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="create_pro2">                       
                        <span slot="title">图片喜好</span>
                    </el-menu-item>
                    </el-menu>
              </div>
      
</template>

<script>
export default {
    methods:{
        create_main(){
             this.$router.push('/requester_create_main')
        },
        create_pro1(){
            this.$router.push('/requester_create_main_pro1')
        },
        create_pro2(){
            this.$router.push('/requester_create_main_pro2')
        },
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
