<template>
<div>
    <RequesterHomepageTopbar/>
    <el-row>
        <el-col :span="4" style="background-color:#4D4D4D">
            <div style="float:left" >
            <RequesterHomepageSidebar/>
            </div>
        </el-col>
        <el-col :span="20" style="background-color:#F7F6F6">
                <div class="basic_info">
                    <div class="basic_info_title">
                        <span>图片仓库</span>
                    </div>
                    <div class="box">
                        <!--相册列表-->
                        <el-button type="text" @click="return_wrapper">返回上一级</el-button>
                        <div class="masonry">
                            <div v-for="item in list" :key="item.url" class="items">
                            <img :src="item.url" alt="" :style="imgstyle">                           
                            </div>                                       
                        </div>   

                        <div class="upload">
                            <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                multiple
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                                <img width="100%" :src="dialogImageUrl" alt="">
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
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        },
        data(){           
            return{
                imgstyle:{
                    height:'150px',
                    width:'150px',
                    dialogImageUrl: '',
                    dialogVisible: false
                },
                list:[                
                  {
                      album_id:'1',                    
                      url:'../../../static/pics/album1/1.jpg'
                  },
                  {
                      album_id:'1',                   
                      url:'../../../static/pics/album1/2.jpg'
                  },
                  {
                      album_id:'1',
                      title:'3',
                      url:'../../../static/pics/album1/3.jpg'
                  },               
              ]
            }
        },
        created() {
           
        },
        methods: {
           return_wrapper(){
               this.$router.push('/requester_homepage_pic');
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
.img{
    width: 100px;
    height: 100px;
    overflow: hidden;
}
</style>
