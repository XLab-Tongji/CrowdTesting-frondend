<template>
<div>
    <RequesterHomepageTopbar/>
    <el-row>
        <el-col :span="4">
            <RequesterHomepageSidebar/>
        </el-col>
        <el-col :span="20" style="background-color:#F7F6F6">
                <div class="basic_info">
                    <div class="basic_info_title">
                        <span>基本信息</span>
                    </div>
                    <div class="box">
                        <el-form label-position="left" label-width="110px">
                            <el-form-item label="邮箱">
                                {{requester.eMail}}
                        <!--<el-input v-model="requester.eMail" disabled="true"></el-input>-->
                        </el-form-item>
                        <el-form-item label="用户名">
                          <el-input v-model="requester.username"></el-input>
                        </el-form-item>
                          <el-form-item label="真实姓名">
                            <el-input v-model="requester.name"></el-input>
                          </el-form-item>
                          <el-form-item label="性别">
                                <el-radio-group v-model="requester.gender">
                                    <el-radio-button label="男"></el-radio-button>
                                    <el-radio-button label="女"></el-radio-button>
                                </el-radio-group>
                                <!--<el-input v-model="requester.gender"></el-input>-->
                        </el-form-item>
                          <el-form-item label="年龄">
                            <el-input v-model="requester.age"></el-input>
                          </el-form-item>
                        <el-form-item label="手机号码">
                        <el-input v-model="requester.teleNumber"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button  type="primary" @click="modify" class="login_button">保存信息</el-button>
                        </el-form-item>
                      </el-form>

                      <el-dialog
                        :visible.sync="dialogVisible"
                        width="30%"
                        :before-close="handleClose">
                        <span>{{message}}</span>
                        <span slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                        </span>
                        </el-dialog>

                    </div>
                </div>


        </el-col>
    </el-row>

</div>
</template>


<script>
import RequesterHomepageTopbar from '@/components/RequesterNavi/RequesterHomepageTopbar.vue'
import RequesterHomepageSidebar from '@/components/RequesterNavi/RequesterHomepageSidebar.vue'
import * as axios from 'axios'

    export default {
        components:{
            RequesterHomepageTopbar,
            RequesterHomepageSidebar
        },
        methods: {
            modify(){
                let that = this;
                let param = new URLSearchParams();
                param.append('teleNumber',that.requester.teleNumber);
                param.append('username',that.requester.username);
                param.append('name',that.requester.name);
                param.append('eMail',that.requester.eMail);
                param.append('research_field',that.requester.research_field);
                param.append('institutionName',that.requester.institutionName);
                param.append('address',that.requester.address);
                param.append('payMethod',that.requester.payMethod);
                param.append('gender',that.requester.gender);
                param.append('age',that.requester.age);
                axios({
                    method:	'put',
                    url: '/api/requester/update',
                    data:param
                })
                    .then(function (response) {
                        console.log(response);
                        if(response.data.code[0] == "2"){
                            that.$message('修改成功！');

                        }
                        else if(response.data.code[0] == "4") {
                        that.wrong_pwd("输入格式有误")
                        }
                        else if(response.data.code == "500") {
                        that.wrong_pwd("服务器错误")
                        }
                    })
                    .catch(function (error) {
                    alert(error);
                    });
            }
        },
        data(){
            return{
               requester:{
                 requesterId: '',
                 username: "",
                 name: "",
                 teleNumber: "",
                 eMail: "",
                 research_field:"",
                 institutionName:'',
                 address: "",
                 payMethod: "",
                 gender:"",
                 age: '',
                 balance:"",
                 email:'',
               },
               dialogVisible:false
            }
        },
        created(){
          let that = this;
          axios({
            method:	'get',
            url: '/api/requester/find-myself',
          })
            .then(function (response) {
            //console.log(response);
             that.requester = response.data.requester;
             console.log(that.requester.gender,response);
            })
            .catch(function (error) {
              alert(error);
            });
        }
    }
</script>

<style scoped>
template {
    height: 100%;
    width:100%
    }
.basic_info{
    margin:30px;
    background-color: #fff;
    height: 640px;
    border: solid 1px #DCDFE6;
}
.basic_info_title{
    width: 600px;
    padding-top: 40px;
    padding-bottom: 20px;
    padding-left: 10px;
    margin-left: 50px;
    font-size: 25px;
    border-bottom:solid 1px #E4E7ED;
}
.box{
    width: 30%;
    padding-left: 60px;
    padding-top: 50px;
}
</style>
