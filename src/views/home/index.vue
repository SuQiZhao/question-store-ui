<template>
    <div>
        <!--顶部数据图 -->
        <el-row class="headData">
            <el-col :span=24>
                <avue-data-panel :option="option"></avue-data-panel>
            </el-col>
        </el-row>
        <el-row :gutter=30 class="questionList">
            <el-col :span=14>
                <!--左侧列表-->
                <questionList/>
            </el-col>
            <el-col :span="10">
                <!--右侧-->
                <buttonItem/>
                <notice/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import questionList from "./questionList";
    import buttonItem from "./buttonItem";
    import notice from "./notice";
    import {getQuestionCount} from "../../api/questionInfo";

    export default {
        name: "index",
        components: {
            "notice": notice,
            "questionList": questionList,
            "buttonItem": buttonItem
        },
        data() {
            return {
                data: [],
                countData:{
                    allQuestionCount:'',
                    resolveQuestionCount:'',
                    notResolveQuestionCount:''
                },
                option: {
                    span: 8,
                    data: [
                        {
                            click: function (item) {
                                alert(JSON.stringify(item));
                            },
                            count: '',
                            title: '全部题目',
                            icon: 'el-icon-question',
                            color: '#666699'
                        }, {
                            click: function (item) {
                                alert(JSON.stringify(item));
                            },
                            count: '',
                            title: '已解决',
                            icon: 'el-icon-circle-check',
                            color: '#67C23A'
                        }, {
                            click: function (item) {
                                alert(JSON.stringify(item));
                            },
                            count: '',
                            title: '未解决',
                            icon: 'el-icon-circle-close',
                            color: '#FF0033'
                        },
                    ]
                },
            }
        },
        methods: {
            init() {
                window.sessionStorage.getItem("token");
                getQuestionCount().then(res =>{
                    this.countData = res.data;
                    this.option.data[0].count = this.countData.allQuestionCount;
                    this.option.data[1].count = this.countData.resolveQuestionCount;
                    this.option.data[2].count = this.countData.notResolveQuestionCount;
                })
            }
        },
        created() {
            this.init();
        }
    }
</script>
<style lang="scss">
    .questionList {
        margin-top: 3%;
    }
</style>