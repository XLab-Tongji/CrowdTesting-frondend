<template>
  <el-container>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 .el-main{
   padding: 0;
   font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
 }
 .el-row{
    margin: 0;
    padding: 0;
}
.row_requester_main{
  background-color:#F7F6F6;
  height:700px;
}
</style>
