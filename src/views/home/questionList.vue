<template>
    <div class="questionList">
        <!--        <el-card>-->
        <el-tabs type="card" v-infinite-scroll="loadMore">
            <el-tab-pane label="推荐问题">
                <el-card :key="o" class="questionItem" shadow="hover" v-for="o in count">
                    <div class="itemTitle" slot="header">
                        <el-link :underline="false" class="itemTitle" href="">推荐问题</el-link>
                        <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
                    </div>
                    <div :key="i" class="text item" v-for="i in 3">
                        {{'问题详情' + i}}
                    </div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="我的关注">
                <el-card :key="o" class="questionItem" shadow="hover" v-for="o in count">
                    <div class="itemTitle" slot="header">
                        <el-link :underline="false" class="itemTitle" href="">关注问题</el-link>
                        <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
                    </div>
                    <div :key="i" class="text item" v-for="i in 3">
                        {{'问题详情' + i}}
                    </div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="全部问题">
                <!--题库分类tag-->
                <el-card>
                    <avue-search :option="option" @change="handleChange" v-model="form"/>
                    <el-card :key="o" class="questionItem" shadow="hover" v-for="o in count">
                        <div class="itemTitle" slot="header">
                            <el-link :underline="false" class="itemTitle" href="">分类问题</el-link>
                            <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
                        </div>
                        <div :key="i" class="text item" v-for="i in 3">
                            {{'问题详情' + i}}
                        </div>
                    </el-card>
                </el-card>
            </el-tab-pane>
        </el-tabs>
        <!--        </el-card>-->
    </div>
</template>

<script>
    import {DIC} from "../../constant/dicConstant";

    export default {
        name: "questionList",
        data() {
            return {
                count: 0,
                form: {
                    classify: ["economics", "laws", "builds", "language", "computer", "condition", "answser", "recruit", "trade", "medical"]
                },
                option: {
                    column: [{
                        label: '题 库 分 类',
                        prop: 'classify',
                        dicData: DIC.QUESTION_CLASSIFY
                    }]
                }
            }
        },
        methods: {
            loadMore() {
                this.count += 2;
            },
            // 标签回调事件
            handleChange(form) {
                this.$message.success(JSON.stringify(form))
            }
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