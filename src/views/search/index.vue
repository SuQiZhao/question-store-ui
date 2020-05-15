<template>
    <div>
        <el-row>
        </el-row>
        <el-row>
            <el-col :span=24>
                <div class="avue_panel">
                    <el-form :inline="true" class="demo-form-inline" ref="questionForm" :model="search">
                        <el-form-item label="标题名称：">
                            <el-input placeholder="请输入标题名称" v-model="search.questionTitle"></el-input>
                        </el-form-item>
                        <el-form-item label="发布时间：">
                            <el-date-picker
                                    :picker-options="pickerOption"
                                    align="right"
                                    end-placeholder="结束日期"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    type="daterange"
                                    unlink-panels
                                    v-model="search.rangeDate">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <el-button @click="searchData" type="primary">查询</el-button>
                            <el-button @click="resetForm">重置</el-button>
                        </el-form-item>
                    </el-form>
                    <avue-crud
                            :data="data"
                            :option="option"
                            :table-loading="loading"
                            @current-change="currentChange"
                            @size-change="sizeChange"
                            :page="page"
                            ref="crud"
                            @row-click="handleRowClick"
                    >
                        <!-- 置空提示-->
                        <template slot="empty">
                            <avue-empty
                                    desc="暂无数据"
                                    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original">
                                <el-button type="primary" @click="handleAdd">点击添加</el-button>
                            </avue-empty>
                        </template>
                    </avue-crud>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import option from "./option";
    import {DIC} from "../../constant/dicConstant";
    import pickerOptions from "./pickerOptions";
    import {findQuestionPage,updateQuestion} from '@/api/questionInfo';
    export default {
        name: "index",
        data() {
            return {
                data: [],
                option: option,
                search: {
                    questionTitle: '',
                    rangeDate:[],
                    isResolve:''
                },
                pickerOption: pickerOptions,
                page: {
                    pageSizes: [10, 20, 30, 40],
                    currentPage: 1,
                    total: 0,
                    pageSize: 10
                },
                //动态加载
                loading: false,
            }
        },
        methods: {
            handleRowClick(row){
                this.$router.push({
                    name: '问答 - 详情',
                    params:{
                        cdId:row.cdId
                    }
                })
            },
            handleAdd(label){
                this.$router.push('/questionAdd');
            },
            sizeChange(val){
                this.page.currentPage = 1;
                this.page.pageSize = val;
                this.init();
            },
            currentChange(val){
                this.page.currentPage = val;
                this.init();
            },
            //重置方法
            resetForm() {
                this.loading = true;
                this.checkboxGroup = [];
                this.search = {
                    questionTitle: '',
                    rangeDate:[]
                }
                this.init();
                return this.loading = false;
            },
            //搜索方法
            searchData() {
                this.loading = true;
                let params = {
                    questionTitle:this.search.questionTitle,
                    startDate:this.search.rangeDate[0],
                    endDate:this.search.rangeDate[1]
                };
                console.log(params);
                findQuestionPage(params).then( res=>{
                    if (res.code != 200){
                        return this.$message.error(res.message);
                    }else{
                        this.data = res.data.records;
                        this.page.total = res.data.total;
                        return this.loading = false;
                    }
                }).catch( err=>{
                    this.loading = false;
                    return this.$message.error(err.data);
                })
            },
            //初始化表格方法
            init(){
                this.loading = true;
                let params = {
                    questionTitle: this.$route.params.title,
                    current: this.page.currentPage,
                    size: this.page.pageSize,
                }
                findQuestionPage(params).then(res => {
                    if(res.code != 200){
                        this.$message.error(res.message);
                        return this.loading = false;
                    }
                    this.data = res.data.records;
                    this.page.total = res.data.total;
                    return this.loading = false;
                })
            },
        },
        created() {
            this.init();
        },
        computed: {
            // userInfo() {
            //     return this.$store.state.user;
            // }
        }
    }
</script>

<style lang="scss">

    .demo-form-inline {
        .el-form-item {
            margin-left: 20px;
            .el-input {
                width: 220px;
            }
        }
    }
    .el-table__header-wrapper{
        font-size: 14px;
        border-spacing: 0;
        border-top-width: 0px;
        border-right-width: 0px;
        border-bottom-width: 0px;
        border-left-width: 0px;
        th {
            font-weight: normal;
        }
        .avue-crud .el-table th{
            color: #666666 !important;
        }
    }
    .avue-crud{
        .el-table{
            font-size: 14px;
            th{
                font-weight: normal;
            }
        }
    }
</style>