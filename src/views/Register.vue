<template>
<div>
    <!--logo-->
    <el-row type="flex" justify="center">
      <el-col :span="3" >
          <div style="width:500px; height:104px; margin-top:30px;">
                <img  :src="logo" height=50%; width=50%; />
                <p>选择身份注册新账号</p>
            </div>
      </el-col>
    </el-row>
    <!--choose -->
   <el-row style="margin-top:40px;">
      <el-col :span="12" style="text-align:center;margin:0 auto;">
          <img :src="people"/>
          <h3>Requester</h3>
          <div >
              <p class="info">这一角色能够发布任务<br>给Workers，并付给他们报酬</p>
          </div>
          <el-button  @click="register_requester">作为Requester注册</el-button>
      </el-col>
      <el-col :span="12" style="text-align:center;margin:0 auto;">
          <img :src="people"/>
          <h3>Worker</h3>
          <div class="info">
            <p>这一角色能够选择并完<br>成Requesters发布的任<br>务，并从中得到酬劳</p>
          </div>
          <el-button @click="register_worker">作为Worker注册</el-button>
      </el-col>
    </el-row>
</div>
</template>

<script>
    export default {
        methods: {
            register_requester () {
                this.$router.push('/register_requester')
            },
            register_worker () {
                this.$router.push('/register_worker')
            }
        },
        data(){
            return{
                logo:require("../../static/logo_black.png"),
                people:require("../../static/people.png")
            }
        }
    }
</script>

<style>
.el-button{
    border:solid 1px rgb(168, 168, 168);
    border-radius: 15px;
}
.info{
    margin:20px auto;
    font-size: 13px;
}
</style>
