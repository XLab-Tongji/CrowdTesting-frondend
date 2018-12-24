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
                        <span>图片仓库</span>
                    </div>
                    <div class="box">
                        <!--相册列表-->
                        <div class="wrapper" >
                        <el-card class="pic_box " v-for="item in picFile" 
                            :key="item.id"
                            >
                            <img class="img" :src="item.url" @click="show_list(item.id)">
                            <!-- <img :src="item.url" alt="照片"> -->
                            <!--<span class="count">{{item.list.length}}</span>-->
                            
                            <div class="names">{{item.title}}</div>
                        </el-card>
                        <div class="addAlbum" @click="dialogFormVisible = true">
                            <i class="el-icon-plus" style="padding-top:63px;color:#8C939D;font-size:25px;"></i>
                        </div>

                        <el-dialog title="创建新相簿" :visible.sync="dialogFormVisible">
                        <el-form :model="newAlbum">
                            <el-form-item label="相簿名称">
                            <el-input v-model="newAlbum.name" autocomplete="off"></el-input>
                            </el-form-item>                          
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="addAlbum">确 定</el-button>
                        </div>
                        </el-dialog>
                        </div>

                       
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

        },
        data(){           
            return{
                dialogFormVisible: false,
                picFile:[
                  {
                      id:'1',
                      title:'album1',
                      url:'../../../static/pics/album1/1.jpg'
                  },
                  {
                      id:'2',
                      title:'album2',
                      url:'../../../static/pics/album2/6.jpg'
                  }
                ],
                newAlbum:{
                    name:''
                }
            }
        },
        created() {
           
        },
        methods: {
           show_list(id){
               this.$router.push('/requester_homepage_pic/'+id );
           },
           addAlbum(){    
            let that = this;
            let param = new URLSearchParams();
            param.append('name',that.newAlbum.name);        
            axios({
              method:'post',
              url: '/api/image/add-album',
              data:param
            })
            .then(function(response){
                if(response.data.code[0] == "2"){
                    that.$message('添加成功');
                    that.dialogFormVisible = false;
                }
                else if(response.data.code[0] == "5") {
                  that.wrong_pwd("服务器错误")              
                }               
            })
            .catch(function (error) {
                alert(error);
              });
           }
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
    border: solid 1px #DCDFE6;
    padding-bottom: 40px;
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
    padding-left: 60px;
    padding-top: 50px;
}
.pic_box{
    width: 180px;
    margin: 0px
}
.img{
    width: 150px;
    height: 150px;
    overflow: hidden;
}
.addAlbum{
    height: 150px;
    width: 150px;
    text-align: center;
    border: dashed 1px #DCDFE6;
    border-radius: 5px;
    background-color: #FBFDFF
}
</style>
