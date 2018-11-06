<template>
   <el-row type="flex" justify="center">
      <el-col :span="7">
          <el-button type="primary" @click="register_requester">作为发起人注册</el-button>
           <el-button type="primary" @click="register_worker">作为参与者注册</el-button>
      </el-col>
    </el-row>
</template>

<script>
    export default {
        methods: {
            register_requester () {
                this.$router.replace('/register_requester')
            },
            register_worker () {
                this.$router.replace('/register_worker')
            }
        }
    }
</script>
