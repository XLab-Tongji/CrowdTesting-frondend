<template>
<div>
    <!--top bar-->
    <RequesterHomepageTopbar/>
    
    <el-row :span="24" class="row_requester_main">
         <div class="manage_main">
             <el-carousel type="card" height="360px" autoplay="false" arrow="never">
                <el-carousel-item   key="1">
                   <el-card class="item item1">
                       <div class="text">
                           <h1>创建一个调查问卷项目！</h1>
                            <p>调查问卷又称调查表或询问表，是以问题的形式系统地记载调查内容的一种印件。
                                问卷可以是表格式、卡片式或簿记式。设计问卷，是询问调查的关键。完美的问卷必须具备
                                两个功能，即能将问题传达给被问的人和使被问者乐于回答。要完成这两个功能，
                                问卷设计时应当遵循一定的原则和程序，运用一定的技巧。
                            </p>
                       </div>                     
                   </el-card>
                </el-carousel-item>
                <el-carousel-item   key="2">
                   <el-card class="item item2">
                       <div class="text">
                           <h1>创建一个图片标记项目！</h1>
                            <p>Tag也可以说是一种关键词标记，更利于搜索查找。
                                但是tag也不同于一般的关键词，用一般的关键词进行搜索时，
                                只能搜索到文章里面提到了的关键词，但利用好tag却可以将文章
                                中根本没有的关键词作为tag来标记
                            </p>
                       </div>                   
                   </el-card>
                </el-carousel-item>
                <el-carousel-item   key="3">
                   <el-card class="item item3">
                       <div class="text">
                           <h1>创建一个情感分析项目！</h1>
                            <p>文本情感分析：又称意见挖掘、倾向性分析等。简单而言,是
                                对带有情感色彩的主观性文本进行分析
                                、处理、归纳和推理的过程。互联网(如博客和论坛以及社会服
                                务网络如大众点评)上产生了大量的用户参与的、对于诸如人物、事件、产品等有价值的评价。
                            </p>
                       </div>                   
                   </el-card>
                </el-carousel-item>
            </el-carousel>
         </div>

    </el-row>


</div>
</template>

<script>
import RequesterHomepageTopbar from '@/components/RequesterNavi/RequesterHomepageTopbar.vue'
import RequesterCreateMainSidebar from '@/components/RequesterNavi/RequesterCreateMainSidebar.vue'

export default {
    components:{
            RequesterHomepageTopbar,  
            RequesterCreateMainSidebar         
        },
        data(){
            return{
                pro1_logo:require('../../../static/requester_create_logo1.png'),
                pro2_logo:require('../../../static/requester_create_logo2.png')
            }
        },
        methods:{
            questionnaire(){
                this.$router.push('/requester_create_main_pro1')
            },
            picrecognize(){
                this.$router.push('/requester_create_main_pro2')
            }
        }
}
</script>

<style scoped>
.manage_main{
    margin:30px;
    background-color: #fff;
    border: solid 1px #DCDFE6;   
    padding: 60px 80px 40px 80px;
    height: 400px
}
.text{
    width:600px;
    float: left;
}
.text p{
    color: #606266;
    width: 500px;
}
.text h1{
    color: #303133;
    font-size: 25px;
}
.item{
    margin:30px ;
    height: 300px;
}
</style>

