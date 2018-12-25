<template>
    
              <div class="sidebar">
                    <div class="sidebar_title">
                        <h5 > 个人信息</h5>
                    </div>
                    <el-menu 
                    :default-active="activeIndex" 
                    background-color="#4D4D4D" text-color="#fff"  
                    active-text-color="#5ED5D1"
                    @select="handleSelect" router>
                    <el-menu-item index="requester_homepage_basic" >
                        <i class="el-icon-menu"></i>                       
                        <span slot="title">基本信息{{path}}</span>
                    </el-menu-item>
                    <el-menu-item index="requester_homepage_detail">  
                        <i class="el-icon-menu"></i>                     
                        <span slot="title">详细信息</span>
                    </el-menu-item>
                    <el-menu-item index="requester_homepage_pic" > 
                        <i class="el-icon-menu"></i>                     
                        <span slot="title">图片仓库</span>
                    </el-menu-item>
                    <el-menu-item index="requester_homepage_balance" >   
                        <i class="el-icon-menu"></i>                   
                        <span slot="title">我的钱包</span>
                    </el-menu-item>
                    
                    </el-menu>
              </div>
      
</template>

<script>
export default {
    data() {
      return {
      }
    },
   computed:{
      activeIndex(){       
            return this.$route.path.replace('/','');
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(this);
        console.log(key,keyPath);
      }
    },
    created:{
      }
}
</script>


<style scoped>
.sidebar{
    background-color: #4D4D4D;
    color: #fff;
    height:700px;
    padding-left: 10px;
    padding-right: 10px;
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
.el-menu {
    border: 0px;
}
</style>
