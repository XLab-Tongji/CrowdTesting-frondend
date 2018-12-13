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
                        <span>详细信息</span>
                    </div>
                    <div class="box">
                        <el-form label-position="left" label-width="110px" :model="user" >
                        <el-form-item label="公司/机构名称">
                        <el-input v-model="inst"></el-input>
                        </el-form-item>
                        <el-form-item label="地址">
                            <el-input v-model="address"></el-input>
                        </el-form-item>
                        <el-form-item label="研究领域">
                        <el-input v-model="research_field"></el-input>
                        </el-form-item>
                        <el-form-item label="研究用途">
                        <el-input v-model="usage"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button  type="primary" @click="modify" class="login_button">保存信息</el-button>
                        </el-form-item>
                </el-form>
                    </div>
                </div>

        </el-col>
    </el-row>

</div>
</template>


<script>
import RequesterHomepageTopbar from '@/components/RequesterNavi/RequesterHomepageTopbar.vue'
import RequesterHomepageSidebar from '@/components/RequesterNavi/RequesterHomepageSidebar.vue'
    export default {
        components:{
            RequesterHomepageTopbar,
            RequesterHomepageSidebar
        },
        created:function(){
            this.getDetails();
        },
        methods: {
            getDetails(){
                axios(
                    {
                        url:'http://localhost:8080/requester/find-by-username',
                        method:'POST',
                        params:{
                            username:this.$route.query.name
                        }
                    }
                ).then((response)=>{
                    if (response.data.status == 200) {
                    }
                    else
                        throw response;
                    if (response.data.status == "200") {
                        this.inst=response.institutionName;
                        this.address=response.area;
                        this.research_field=response.research_field;//还没写
                        this.usage=response.usage;//没写
                    }
                }).catch(function (error) {
                    if (error.status == 500) {
                    swal("Error", "服务器错误！", "error");
                    }
                });
            },
            modify(){
                axios.post('http://localhost:8080/requester/find-by-username',{
                    "institutionName":this.inst,
                    "area":this.address,
                    "research_field":this.research_field,
                    "usage":this.usage
                }).then(function(response){
                    if(response.status == 200) {
                    this.$message({
                    message: '修改成功',
                    type: 'success'
                    });
                    }
                }).catch(function(error){

                    });
            }
        },
        data(){
           return{
                inst:inst,
                address:address,
                research_field:research_field,
                usage:usage
           }
        },
    }
</script>

<style scoped>
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
