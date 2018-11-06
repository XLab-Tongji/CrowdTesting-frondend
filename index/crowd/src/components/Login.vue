<template>
    <el-row type="flex" justify="center">
        <el-col :span="6">
            <h1 style="font-size:30px; margin-left:130px">TJ众测</h1>
            <div style=" border-style:solid; border-width: 1px; border-color:#E5E5E5; padding:50px 30px 30px 30px;">
                 <el-form :label-position="top" label-width="60px" :model="user" >
                     <el-form-item label="">
                         <b style="font-size:20px">登录</b>
                     </el-form-item>
                <el-form-item label="用户名">
                <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="user.pass" type="password"></el-input>
            </el-form-item>
            <el-form-item label="身份">
                <el-radio v-model="radio" label="1">发起人</el-radio>
                <el-radio v-model="radio" label="2">参与人</el-radio>
            </el-form-item>
            <el-form-item label="">
                <el-radio v-model="radio" label="1">在这台电脑上保持登录</el-radio>
            </el-form-item>
            <el-form-item>
                    <el-button type="primary"  @click="login">登录</el-button>
            </el-form-item>
        </el-form>
            </div>
            
        </el-col>
       
    </el-row>
</template>

<script>
    export default {
        methods: {
            login () {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        //验证用户名和密码
                        if (this.user.name === 'admin' && this.user.pass === '123') {
                            this.$notify({
                                type: 'success',
                                message: '欢迎你,' + this.user.name + '!',
                                duration: 3000 
                            })
                            this.$router.replace('/')
                        } else {
                            this.$message({
                                type: 'error',
                                message: '用户名或密码错误',
                                showClose: true
                            })
                        }
                    }
                    else {
                        return false
                    }
                })
            }
        },
        data () {
            return {
                user: {},
                rules: {
                    name: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    pass: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ]
                }
            }
        }
    }
</script>


