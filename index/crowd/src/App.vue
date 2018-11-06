<template>
  <el-container>
    <el-header class="header" height="70px">
      <p>TJ众测</p>
    </el-header>
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
  .header{
    background-color: #409EFF;
    color: white;
  }
</style>
