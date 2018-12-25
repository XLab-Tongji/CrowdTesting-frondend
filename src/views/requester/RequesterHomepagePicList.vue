<template>
<div>
    <RequesterHomepageTopbar/>
    <el-row >
        <el-col :span="4" style="background-color:#4D4D4D;">         
            <RequesterHomepageSidebar/>
        </el-col>
        <el-col :span="20" style="background-color:#F7F6F6;min-height:700px;">
                <div class="basic_info">
                    <div class="basic_info_title">
                        <span>图片仓库</span>
                    </div>
                    <div class="box">
                        <el-row>                                                 
                        <!--相册列表-->
                            <div class="album_name">
                                {{album_name}}
                            </div>
                            <el-button type="text" @click="return_wrapper">返回上一级</el-button>                                                                                     
                                
                                    <div class="upload">
                                        <el-upload
                                            action=""
                                            list-type="picture-card"
                                            multiple
                                            :on-preview="handlePictureCardPreview"
                                            :on-remove="handleRemove"
                                            :file-list="fileList"
                                            :on-progress="onProgress"
                                            >
                                            <i class="el-icon-plus"></i>
                                        </el-upload>
                                        <el-dialog :visible.sync="dialogVisible">
                                            <img width="100%" :src="dialogImageUrl" alt="">
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
        props: ['id'],
        components:{
            RequesterHomepageTopbar,
            RequesterHomepageSidebar
        },       
        data(){           
            return{
                dialogImageUrl: '',
                dialogVisible: false,
                imgstyle:{
                    height:'150px',
                    width:'150px',
                    dialogImageUrl: '',
                    dialogVisible: false
                },
                fileList:[         
                ], 
                rawList:[], 
                album_name:''             
            }
        },
        mounted() {           
            let that = this;          
            axios({
                method:	'get',
                url: '/api/image/findImages',
            })
                .then(function (response) {
                console.log(response);
                let i=0;
                let id=that.id
                for(i;i<response.data.images.length;i++){
                    if(response.data.images[i].photoAlbum.id==id){
                        that.rawList=response.data.images[i].resources 
                        that.album_name= response.data.images[i].photoAlbum.name;             
                    }
                }
                //console.log(that.rawList)
                let j=0;
                for(j;j<that.rawList.length;j++){
                    that.fileList.push({url:'',id:''});
                    that.fileList[j].url=that.rawList[j].link,
                    that.fileList[j].id=that.rawList[j].id
                   // that.fileList.url[j].push(that.rawList[j].link)
                   
                }
                 //console.log(that.fileList)
                })
                .catch(function (error) {
                alert(error);
                });
        },
        methods: {
           return_wrapper(){
               this.$router.push('/requester_homepage_pic');
           },
           handleRemove(file, fileList) {
               
                let that = this;
                let param = new URLSearchParams();
                param.append('id',file.id);        
                axios({
                method:'put',
                url: '/api/image/delete-image',
                data:param
                })
                .then(function(response){
                    if(response.data.code[0] == "2"){
                        that.$message('删除成功');
                        that.dialogFormVisible = false;
                    }
                    else if(response.data.code[0] == "5") {
                    that.wrong_pwd("服务器错误")              
                    }               
                })
                .catch(function (error) {
                    alert(error);
                });       
                
                console.log(file.id)
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
            /*,
            onProgress(file){
                let that = this;
                let param = new URLSearchParams();
                param.append('multipartFile',file.id);        
                axios({
                method:'put',
                url: '/api/image/add-image',
                data:param
                })
                .then(function(response){
                    if(response.data.code[0] == "2"){
                        that.$message('删除成功');
                        that.dialogFormVisible = false;
                    }
                    else if(response.data.code[0] == "5") {
                    that.wrong_pwd("服务器错误")              
                    }               
                })
                .catch(function (error) {
                    alert(error);
                });       
                
                console.log(file)
            }*/
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
    padding:30px 60px;
}
.pic_box{
    width: 150px;
    margin: 5px;
    padding-left:10px;
}
.img{
    width: 180px;
    height: 180px;
    overflow: hidden;
}
.upload{
    margin-top: 20px;
}
</style>
