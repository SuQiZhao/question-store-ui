<template>
    <div class="questionList">
                <el-card>
        <el-tabs type="card" >
            <el-tab-pane label="最新问题">
                <el-card :key="item" class="questionItem" shadow="hover" v-for="item in questionList">
                    <div class="itemTitle" slot="header">
                        <el-link :underline="false" class="itemTitle" @click="checkInfo(item)">{{item.questionTitle}}</el-link>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="checkInfo(item)">查看详情</el-button>
                    </div>
                    <div class="text-item">
                        {{item.questionDetail}}
                        <div class="textFooter">
                            <span class="itemCreateTime">题目拥有者：{{item.createUserIdentity}}</span>
                            <span class="itemCreateTime">{{item.createTime}}</span>
                            <span class="itemCreateTime">来自：{{item.questionCategory}}</span>
                        </div>
                    </div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="热门问题">
                <el-card :key="item" class="questionItem" shadow="hover" v-for="item in hotQuestionList">
                    <div class="itemTitle" slot="header">
                        <el-link :underline="false" class="itemTitle" href="">{{item.questionTitle}}</el-link>
                        <span class="itemContent">阅读量：{{item.reading}}</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="checkInfo(item)">查看详情</el-button>
                    </div>
                    <div class="text item">
                        {{item.questionDetail}}
                        <div class="textFooter">
                            <span class="itemCreateTime">题目拥有者：{{item.createUserIdentity}}</span>
                            <!--                            <span class="itemCreateTime">{{item.questionCategory}}</span>-->
                            <span class="itemCreateTime">{{item.createTime}}</span>
                            <span class="itemCreateTime">来自：{{item.questionCategory}}</span>
                        </div>
                    </div>
                </el-card>
            </el-tab-pane>
        </el-tabs>
                </el-card>
    </div>
</template>

<script>
    import {DIC} from "../../constant/dicConstant";
    import {findQuestionPage,getHotQuestionList} from '@/api/questionInfo'

    export default {
        name: "questionList",
        data() {
            return {
                count: 0,
                form: {
                    category: ["economics", "laws", "builds", "language", "computer", "condition", "answser", "recruit", "trade", "medical"]
                },
                option: {
                    column: [{
                        label: '题 库 分 类',
                        prop: 'category',
                        dicData: DIC.QUESTION_CATEGORY
                    }]
                },
                questionList: [],
                total: '',
                page: {
                    keyword: '',
                    // lastRowLimitValue: '',
                    pageIndex: 1,
                    pageSize: 10,
                    pageSorts: [
                        {
                            asc: true,
                            column: ''
                        }
                    ]
                },
                records: [],
                hotQuestionList:[]
            }
        },
        methods: {
            // 无限滚动加载
            // loadMore() {
            //     this.page.pageIndex = this.page.pageIndex + 1;
            //     let questionInfoPageParam = this.page;
            //     getPageList(questionInfoPageParam).then(res => {
            //         this.questionList = res.data.records;
            //         this.total = res.data.total;
            //     }).catch(err => {
            //         return this.$message.error(err.data);
            //     });
            // },
            checkInfo(item) {
                this.$router.push({
                    name: '问答 - 详情',
                    params:{
                        cdId:item.cdId,
                        questionTitle:item.questionTitle}
                })
            },
            // 分类标签回调事件
            handleChange(form) {
                this.$message.success(JSON.stringify(form))
            },
            init() {
                let params = {
                    isResolve:0
                }
                findQuestionPage(params).then(res => {
                    this.questionList = res.data.records;
                    this.total = res.data.total;
                }).catch(err => {
                    return this.$message.error(err.data);
                });
                // let questionInfoPageParam = this.page;
                // getPageListByCreateTime(questionInfoPageParam).then(res => {
                //     this.questionList = res.data.records;
                //     this.total = res.data.total;
                // }).catch(err => {
                //     return this.$message.error(err.data);
                // });
            },
            getHotQuestionList(){
                getHotQuestionList().then( res =>{
                    this.hotQuestionList = res.data;
                }).catch( err =>{
                    this.$message.error("获取热门问题失败");
                })
            }
        },
        created() {
            this.init();
            this.getHotQuestionList();
        }
    }
</script>

<style lang="scss">
    .text-item{
        font-size: 12px;
    }
    .questionItem {
        margin-top: 20px;
        padding-bottom: 20px;
    }

    .itemTitle {
        font-size: 18px;
        font-weight: bold;
    }
    .itemCreateTime{
        font-size: 14px;
        color: #8c939d;
        float: right;
        margin-left: 20px;
    }
    .itemContent{
        font-size: 12px;
        color:#CCCCCC;
        margin-left: 60px;
    }
</style>