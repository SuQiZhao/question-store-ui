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
                <hotQuestion/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import questionList from "./questionList";
    import buttonItem from "./buttonItem";
    import hotQuestion from "./hotQuestion";

    export default {
        name: "index",
        components: {
            "hotQuestion": hotQuestion,
            "questionList": questionList,
            "buttonItem": buttonItem
        },
        data() {
            return {
                data: [],
                option: {
                    span: 6,
                    data: [
                        {
                            click: function (item) {
                                alert(JSON.stringify(item));
                            },
                            count: '150',
                            title: '全部题目',
                            icon: 'el-icon-question',
                            color: '#666699'
                        }, {
                            click: function (item) {
                                alert(JSON.stringify(item));
                            },
                            count: '53',
                            title: '已解决',
                            icon: 'el-icon-circle-check',
                            color: '#67C23A'
                        }, {
                            click: function (item) {
                                alert(JSON.stringify(item));
                            },
                            count: '44',
                            title: '未解决',
                            icon: 'el-icon-circle-close',
                            color: '#FF0033'
                        },
                        {
                            click: function (item) {
                                alert(JSON.stringify(item));
                            },
                            count: '44',
                            title: '帮助的人',
                            icon: 'el-icon-warning',
                            color: '#66CCCC'
                        }
                    ]
                },
            }
        },
        methods:{
            init(){
                window.sessionStorage.getItem("token");
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