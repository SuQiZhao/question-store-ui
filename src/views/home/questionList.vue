<template>
    <div class="questionList">
        <!--        <el-card>-->
        <el-tabs type="card" >
            <el-tab-pane label="最新问题">
                <el-card :key="item" class="questionItem" shadow="hover" v-for="item in questionList">
                    <div class="itemTitle" slot="header">
                        <el-link :underline="false" class="itemTitle" href="">{{item.questionTitle}}</el-link>
                        <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
                    </div>
                    <div class="text item">
                        {{item.questionDetail}}
                    </div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="我的关注">
                <el-card class="questionItem" shadow="hover">
                    <div class="itemTitle" slot="header">
                        <el-link :underline="false" class="itemTitle" href="">关注问题</el-link>
                        <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
                    </div>
                    <div>
                        问题详情
                    </div>
                </el-card>
            </el-tab-pane>
            <!--            <el-tab-pane label="全部问题">-->
            <!--                &lt;!&ndash;题库分类tag&ndash;&gt;-->
            <!--                <el-card>-->
            <!--                    <avue-search :option="option" @change="handleChange" v-model="form"/>-->
            <!--                    <el-card class="questionItem" shadow="hover">-->
            <!--                        <div class="itemTitle" slot="header">-->
            <!--                            <el-link :underline="false" class="itemTitle" href="">分类问题</el-link>-->
            <!--                            <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>-->
            <!--                        </div>-->
            <!--                        <div :key="i" class="text item" v-for="i in 3">-->
            <!--                            {{'问题详情' + i}}-->
            <!--                        </div>-->
            <!--                    </el-card>-->
            <!--                </el-card>-->
            <!--            </el-tab-pane>-->
        </el-tabs>
        <!--        </el-card>-->
    </div>
</template>

<script>
    import {DIC} from "../../constant/dicConstant";
    import {getPageListByCreateTime} from '@/api/questionInfo'

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
            // 分类标签回调事件
            handleChange(form) {
                this.$message.success(JSON.stringify(form))
            },
            init() {
                let questionInfoPageParam = this.page;
                console.log(questionInfoPageParam);
                getPageListByCreateTime(questionInfoPageParam).then(res => {
                    this.questionList = res.data.records;
                    this.total = res.data.total;
                }).catch(err => {
                    return this.$message.error(err.data);
                });
            },
        },
        created() {
            this.init();
        }
    }
</script>

<style lang="scss">
    .questionItem {
        margin-top: 10px;
    }

    .itemTitle {
        font-size: 18px;
        font-weight: bold;
    }
</style>