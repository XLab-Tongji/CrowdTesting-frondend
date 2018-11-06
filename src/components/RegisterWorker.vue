<template>
    <el-row type="flex" justify="center">
        <el-col :span="6">
            <h1 style="font-size:30px; margin-left:130px">TJ众测</h1>
            <div style=" border-style:solid; border-width: 1px; border-color:#E5E5E5; padding:50px 30px 30px 30px;">
                 <el-form :label-position="top" label-width="60px" :model="user" >
                     <el-form-item label="">
                         <b style="font-size:20px">注册</b>
                     </el-form-item>
                       <!--user name-->
                <el-form-item label="用户名">
                <el-input v-model="user.name"></el-input>
            </el-form-item>
            <!--password-->
                <el-form-item label="邮箱">
                     <el-input v-model="user.email"></el-input>
                </el-form-item>
              <!--user name-->
              <el-form-item label="密码">
                <el-input v-model="user.pass" type="password"></el-input>
            </el-form-item>
            
            <el-form-item>
                    <el-button type="primary"  @click="register">注册</el-button>
            </el-form-item>
        </el-form>
            </div>
            
        </el-col>
       
    </el-row>
</template>

<script>
    export default {
        methods: {
           
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