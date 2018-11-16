<template>
    
              <div class="sidebar">
                    <div class="sidebar_title">
                        <h5 > 个人信息</h5>
                    </div>
                    <el-menu 
                    default-active="1" class="el-menu-vertical-demo" 
                    background-color="#4D4D4D" text-color="#fff"  
                    active-text-color="#5ED5D1">
                    <el-menu-item index="1" @click="basic">                       
                        <span slot="title">基本信息</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="detail">                       
                        <span slot="title">详细信息</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="balance">                      
                        <span slot="title">我的钱包</span>
                    </el-menu-item>
                    </el-menu>
              </div>
      
</template>

<script>
export default {
    methods:{
        basic(){
            this.$router.push('/requester_homepage_basic')
        },
        detail(){
            this.$router.push('/requester_homepage_detail')
        },
        balance(){
            this.$router.push('/requester_homepage_balance')
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
