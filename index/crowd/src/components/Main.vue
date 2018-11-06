<template>
    <div>
    <el-row type="flex" justify="center">
      <el-col :span="4">
          <el-button type="primary" @click="login">登录</el-button>
           <el-button type="primary" @click="register">注册</el-button>
      </el-col>
    </el-row>
    </div>
</template>

<script>
    export default {
        methods: {
            login () {
                this.$router.replace('/login')
            },
            register(){
                this.$router.replace('/register')
            }
        }
    }
</script>
