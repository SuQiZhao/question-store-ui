<template>
    <div style="margin-top: 5%">
        <el-card shadow="hover">
            <div class="itemTitle" slot="header">
                <span style="color: #ff5b36">热门问题</span>
<!--                <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>-->
            </div>
            <el-card :key="item" shadow="never" v-for=" item in hotQuestionList">
                <div class="itemTitle" slot="header">
                    <span>{{item.questionTitle}}</span> <span style="font-size: 10px">{{item.reading}}</span>
                </div>
                <div class="text item">
                    {{item.questionDetail}}
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

</style>