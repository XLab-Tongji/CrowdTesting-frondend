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
                        <el-row>                          
                       
                        <!--相册列表-->
                        <div class="wrapper" >
                        <el-col :span="5"  v-for="item in picFile" 
                            :key="item.id" >
                            <div class="pic_box ">
                                <img class="img" :src="item.cover" @click="show_list(item.photoAlbum.id)">                           
                            <!--{{(item.resources[0].link='')?'../../../static/blank.jpg':item.resources[0].link}}-->
                            <div class="names">{{item.photoAlbum.name}}</div>
                            </div>                            
                         </el-col> 
                                                     
                        <el-col :span="5">
                            <div class="pic_box addAlbum" @click="dialogFormVisible = true">
                                <i class="el-icon-plus" style="padding-top:70px;color:#8C939D;font-size:25px;"></i>
                            </div>
                        </el-col>

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

                        </el-row>
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
        computed: {
            pic:function(item){
                
            }
        },
        data(){           
            return{
                dialogFormVisible: false,
                pic:require('../../../static/blank.jpg'),
                picFile:[],
                newAlbum:{
                    name:''
                }
            }
        },
        created() {
           let that = this;
          axios({
            method:	'get',
            url: '/api/image/findImages',
          })
            .then(function (response) {
            console.log(response);
             that.picFile = response.data.images;
             for(let i=0;i<response.data.images.length;i++){
                let albums=response.data.images[i].resources;
                let link;
                //console.log(albums.length)
                if(albums.length==0){
                    link='../../../static/blank.jpg';
                    //console.log(link)
                }
                else{
                    link= albums[0].link;
                }
                console.log(that.picFile[i])
                that.picFile[i].cover=link;
                
             }
             
             console.log(that.picFile)
            })
            .catch(function (error) {
              alert(error);
            });
        },
        methods: {
           show_list(id){
               this.$router.push('/requester_homepage_pic/'+id );
                /*this.$router.push({
                    path: '/requester_homepage_pic/',
                    query: {
                    album_id: id,                   
                    }
                });*/

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
    padding:50px 60px;
}
.pic_box{
    width: 150px;
    height: 220px;
    margin: 20 10px;
    cursor: pointer;
}
.img{
    width: 180px;
    height: 180px;
    overflow: hidden;
}
.addAlbum{
    height: 180px;
    width: 180px;
    text-align: center;
    border: dashed 1px #DCDFE6;
    border-radius: 5px;
    background-color: #FBFDFF
}
</style>
