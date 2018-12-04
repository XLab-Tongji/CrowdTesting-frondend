<template>
<div class="login_main" >
    <el-row type="flex" justify="center">
        <el-col :span="6">
            <!--logo-->
            <div style="width=500px; height=104px;text-align:center;margin:0 auto;padding-top:40px;">
                <img :src="logo" height=50%; width=50%; />
            </div>
            <!--login-->
            <div class="login_box">
                <b style="font-size:22px">登录</b>
                 <el-form label-position="top" label-width="60px" :model="user" >
                    <el-form-item label="邮箱">
                        <el-input v-model="email"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="pwd" type="password"></el-input>
                    </el-form-item>
                    <el-form-item >
                        <el-radio v-model="radio" label="1">在这台电脑上保持登录</el-radio>
                    </el-form-item>
                    <el-form-item>
                        <el-button  @click="loginRequester" :loading=this.button_disabled class="login_button">以Requester身份登录</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button  @click="loginWorker" :loading=this.button_disabled class="login_button">以Worker身份登录</el-button>
                    </el-form-item>
                    <el-form-item >
                        <span>忘记密码？</span>
                    </el-form-item>
                    <el-form-item>
                        <div class="sign_up">
                            <el-button  @click="register" style="width:100%;">注册新账户</el-button>
                        </div>
                    </el-form-item>
                </el-form>
            </div>

        </el-col>

    </el-row>
</div>
</template>

<script>
    import * as axios from 'axios'

    let self = this;
    export default {
      computed: {
        getToken () {
          return this.$store.state.token;
        }
      },
      methods: {
        setToken: function() {
          this.$store.commit('newToken', this.textValue)
        },
        register(){
          this.$router.push('/register')
        },
        loginRequester:function () {
          let token_pointer = this
          this.button_disabled = true;
          if (this.email == "") {
            this.$message({
              message: '请输入用户名',
              type: 'warning'
            });
          }
          else if (this.pwd == "") {
            this.$message('请输入密码');
          }
          else
          {
            let param = new URLSearchParams();
            let self = this;
            param.append('username',this.email);
            param.append('password',this.pwd);
            axios({
              method:	'post',
              url: '/api/login',
              data:param
            })
              .then(function (response) {
                console.log(response);
                if(response.data.code[0] == "2") {
                  let token = response.data.X_Auth_Token;
                  let username = self.email;
                  let user_information = {
                    token: token,
                    username: username
                  }
                  token_pointer.$store.commit('UserLogin', user_information);
                  console.log(token_pointer.$store.state.token);
                }
                else if(response.data.code[0] == "4") {

                }
                else if(response.data.code[0] == "5") {
                  alert("服务器错误")
                }
              })
              .catch(function (error) {
                alert(error);
              });
          }
        },
        loginWorker:function () {
          let token_pointer = this
          this.button_disabled = true;
          if (this.email == "") {
            this.$message({
              message: '请输入用户名',
              type: 'warning'
            });
          }
          else if (this.pwd == "") {
            this.$message('请输入密码');
          }
          else
          {
            let param = new URLSearchParams();
            param.append('username',this.email);
            param.append('password',this.pwd);
            axios({
              method:	'post',
              url: '/api/login',
              data:param
            })
              .then(function (response) {
                if(response.data.code[0] == "2") {
                  let token = response.data.X_Auth_Token;
                  let username = self.email;
                  let user_information = {
                    token: token,
                    username: username
                  }
                  token_pointer.$store.commit('UserLogin', user_information);
                  console.log(token_pointer.$store.state.token);
                }
                else if(response.data.code[0] == "4") {

                }
                else if(response.data.code[0] == "5") {
                  alert("服务器错误")
                }
              })
              .catch(function (error) {
                alert(error);
              });
          }
        }
      },
      data () {
        return {
          email:'',
          pwd:''
        }
      }
    }
</script>

<style scoped>

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
.login_button{
    width:100%;
    background-color: rgb(70, 214, 250);
    color: #fff;
}
.sign_up{
    border-top: solid 1px rgb(224, 224, 224);
    padding-top: 20px;
}

</style>



