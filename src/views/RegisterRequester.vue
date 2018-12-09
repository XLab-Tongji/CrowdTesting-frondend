<template>
<div class="login_main" >
    <el-row type="flex" justify="center">
        <el-col :span="6">
            <!--logo-->
            <div style="height:500px;width:104px;text-align:center;margin-left: auto;margin-right:auto;margin-top:30px;">
                <img :src="logo" height=50%; width=50%; />
            </div>
            <!--login-->
            <div class="login_box">
                <b style="font-size:22px">创建新的Requester账号</b>
                 <el-form label-position="top" label-width="60px" :model="user" >
                    <el-form-item label="用户名">
                        <el-input v-model="user.name"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <el-input v-model="user.pass" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="user.pass" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="重新输入密码">
                        <el-input v-model="user.pass" type="password"></el-input>
                    </el-form-item>
                    <el-form-item style="padding-top:10px;">
                        <el-button  @click="register" class="register_button">注册</el-button>
                    </el-form-item>
                    <el-form-item >
                        <span>已经拥有账户？</span>
                        <div class="login_text"><b @click="login">登录</b></div>
                    </el-form-item>

                </el-form>
            </div>

        </el-col>

    </el-row>
</div>
</template>

<script>
    export default {
        methods: {
           login () {
                this.$router.push('/login')
            },
        },
        data () {
            return {
                logo:require("../../static/logo_black.png"),
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

<style>

.login_box{
    border-style:solid;
    border-width: 1px;
    border-color:rgb(209, 209, 209);
    border-radius: 10px;
    padding:30px 40px;
    margin-top: 20px;
}
.el-form--label-top .el-form-item__label{
    padding-bottom:0;
    font-size: 18px;
}
.el-form-item{
    margin-bottom: 10px;
}
.el-input__inner{
    border-radius: 12px;
}
.el-input__inner:hover{
    border-color: rgb(147, 206, 229);
}
.el-input__inner:focus {
    border-color: #42a5f5;
    box-shadow: 8px;
    transition-duration: .5s;
}
.register_button{
    width:100%;
    background-color: rgb(70, 214, 250);
    font-size: 18px;
    color: #fff;
}
.login_text{
    float:right;
}
.login_text:hover{
    color: rgb(22, 139, 185)
}

</style>
