<template>
    <div style="margin-top: 5%">
        <el-card shadow="always">
            <div class="itemTitle" slot="header">
                <span>热门问题</span>
            <!--                <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>-->
    </div>
    <el-card class="questionItem" :key="item" shadow="never" v-for=" item in hotQuestionList">
        <div class="itemTitle" slot="header">
            <span style="margin-right: 40px">{{item.questionTitle}}</span><span class="itemContent">阅读量：{{item.reading}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
        </div>
        <div class="text item">
            {{item.questionDetail}}
            <div class="textFooter">
                <span class="itemCreateTime">题目拥有者：{{item.createUserIdentity}}</span>
                <span class="itemCreateTime">{{item.createTime}}</span>
            </div>
        </div>
    </el-card>
        </el-card>
    </div>
</template>

<script>
    import {getHotQuestionList} from "../../api/questionInfo";

    export default {
        name: "hotQuestion",
        data(){
            return {
                hotQuestionList:[]
            }
        },
        methods:{
            // 数据初始化方法
            init(){
                getHotQuestionList().then( res =>{
                    this.hotQuestionList = res.data;
                }).catch( err =>{
                    this.$message.error("获取热门问题失败");
                })
            }
        },
        created() {
            this.init();
        }
    }
</script>

<style lang="scss">
.itemContent{
    font-size: 12px;
    color:#CCCCCC;
}
</style>