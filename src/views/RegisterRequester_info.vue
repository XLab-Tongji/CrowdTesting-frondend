<template>
<div style="background-color:#E4E5E6" >
    <el-row type="flex" justify="center">
        <el-col :span="8">          
            <!--login-->
            <div class="requester_box">
                <div style="text-align:center;margin:0 auto;">
                    <b style="font-size:30px;color:#303133;margin-bottom:20px;">创建新账号</b>
                    <br><span style="color:#909399;font-size:15px;">完善账户信息</span>
                </div>
                 <el-form label-position="top" label-width="60px" :model="user" :rules="rules" required>
                    <el-form-item label="" prop="tele">
                        <el-input v-model="user.tele" placeholder="手机号码">
                            <template slot="prepend">&nbsp;&nbsp;</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="inst">
                        <el-input v-model="user.inst" placeholder="公司/机构名称">
                            <template slot="prepend">&nbsp;&nbsp;</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="address">
                        <el-input v-model="user.address" placeholder="地址">
                            <template slot="prepend">&nbsp;&nbsp;</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="research_field">
                        <el-input v-model="user.research_field" placeholder="研究领域">
                            <template slot="prepend">&nbsp;&nbsp;</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="usage">
                        <el-input v-model="user.usage" placeholder="研究用途">
                            <template slot="prepend">&nbsp;&nbsp;</template>
                        </el-input>
                    </el-form-item>                  
                    <el-form-item style="padding-top:10px;">
                        <el-button  @click="register" class="register_button">注册</el-button>
                    </el-form-item>                
                </el-form>            
            </div>

        </el-col>

    </el-row>
</div>
</template>

<script scoped>
    export default {
        methods: {
           login () {
                this.$router.push('/login')
            },
            register(){
                axios.post('http://localhost:8080/',{
                    'tele':this.tele,
                    'inst':this.inst,//所在机构
                    'address':this.address,//地址
                    'research_field':this.research_field,//研究领域
                    'usage':this.usage,//用途
                }).then(function(response){
                    if(response.status == 200) {                 
                    }
                }).catch(function(error){
                   
                    });
                this.$router.push('/requester_main')
            }
        },
        data () {
            return {               
                user: {},
                rules: {
                    name: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    pwd: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ]
                }
            }
        }
    }
</script>

<style scoped>

.requester_box{
    background-color: #fff;
    border-style:solid;
    border-width: 1px;
    border-color:rgb(209, 209, 209);
    border-radius: 4px;
    padding:30px 40px;
    margin-top: 100px;
    margin-bottom: 110px;
    color:#606266
}
.el-form{
    margin-top: 30px;
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
    background-color: #00ACED;
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
