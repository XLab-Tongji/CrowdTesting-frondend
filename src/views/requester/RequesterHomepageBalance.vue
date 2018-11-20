<template>
<div>
    <!--top bar-->
    <RequesterHomepageTopbar/>
    <el-row>
        <el-col :span="4"> 
            <!--side bar-->         
            <RequesterHomepageSidebar/>
        </el-col>
        <el-col :span="20" style="background-color:#F7F6F6">   
            <!--main-->      
                <div class="basic_info">
                    <!--title-->
                    <div class="basic_info_title">
                        <span>我的钱包</span>
                    </div>                   
                    <div class="box">
                        <!-- show the balance-->
                        <el-card>
                            <div class="ramain">
                                <span style="font-size:15px; ">
                                    余额:
                                </span><br>
                                <p style="font-size:30px;">
                                    {{balance}} 元
                                </p>
                            </div>
                        </el-card>
                        <!--operation-->
                        <div class="operation">
                            <span>
                                <el-button type="success" style="width:170px;">充值</el-button>
                            </span>
                            <span>
                                <el-button >我的余额</el-button>
                            </span>
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
    export default {
        components:{
            RequesterHomepageTopbar,
            RequesterHomepageSidebar
        },
        methods: {
            
        },
        data(){
            return{
                
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
    width: 40%;
    padding-left: 60px;
    padding-top: 50px;
}
.operation{
    margin-top: 50px;
}
.operation span{
    margin:0 10px;
}
</style>
