<template>
    <div>
        <el-row>
            <el-col :span=24 style="margin-bottom: 2%">
                <el-radio-group size="medium" :key="course" v-for="course in courses" v-model="checkboxGroup" @change="changeCategory(course.value)">
                    <el-radio-button ref="categoryBtn" :label="course.label">
                    </el-radio-button>
                </el-radio-group>
            </el-col>
        </el-row>
        <el-row class="">
            <el-col :span=24>
                <div class="avue_panel">
                    <el-form :inline="true" class="demo-form-inline" ref="questionForm">
                        <el-form-item label="标题名称：">
                            <el-input placeholder="请输入标题名称" v-model="search.title"></el-input>
                        </el-form-item>
                        <el-form-item label="提问人：">
                            <el-input placeholder="请输入提问人" v-model="search.askUser"></el-input>
                        </el-form-item>
                        <!--                        <el-form-item label="状态：">-->
                        <!--                            <el-select placeholder="请选择提问状态" v-model="search.askStatus">-->
                        <!--                                <el-option :key="item.value" :label="item.label" :value="item.value"-->
                        <!--                                           v-for="item in askStatusArray">-->
                        <!--                                </el-option>-->
                        <!--                            </el-select>-->
                        <!--                        </el-form-item>-->
                        <el-form-item label="时间：">
                            <!--增加折叠添加v-if="menuOpen"-->
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
                            <!--折叠输入框-->
                            <!--                            <span @click="menuOpen = !menuOpen" class="menuShowHide">-->
                            <!--                                    {{ menuOpen ? "收起" : "展开" }}&nbsp;-->
                            <!--                                    <i-->
                            <!--                                            :class="-->
                            <!--											menuOpen-->
                            <!--												? 'el-icon-arrow-up'-->
                            <!--												: 'el-icon-arrow-down'-->
                            <!--										"-->
                            <!--                                    ></i>-->
                            <!--                                </span>-->
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
                            @search-change="searchChange"
                            :page="page"
                            ref="crud"
                    >
                        <!-- 置空提示-->
                        <template slot="empty">
                            <avue-empty
                                    desc="暂无数据"
                                    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original">
                                <el-button type="primary">点击添加</el-button>
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
    import {getQuestionPage} from '@/api/questionInfo';
    export default {
        name: "index",
        data() {
            return {
                //默认选项
                checkboxGroup: [],
                courses: DIC.QUESTION_CATEGORY,
                data: [],
                option: option,
                menuOpen: false,
                askStatusArray: DIC.ASK_STATUS,
                search: {
                    title: "",
                    askUser: "",
                    askStatus: ""
                },
                pickerOption: pickerOptions,
                // menuOpen: false,
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
            searchChange(params, done) {
                done();
                this.$message.success(JSON.stringify(params));
            },
            //重置方法
            resetForm() {
                this.loading = true;
                this.$refs['questionForm'].resetFields();
                this.init();
                return this.loading = false;
            },
            //搜索方法
            searchData() {
                this.loading = true;

            },
            //初始化表格方法
            init(){
                this.loading = true;
                let params = {
                    createUserIdentity: this.userInfo.user.cdId,
                }
                getQuestionPage(params).then(res => {
                    if(res.code != 200){
                        this.$message.error(res.message);
                        return this.loading = false;
                    }
                    console.log(res);
                    this.data = res.data.records;
                    return this.loading = false;
                })
            },
            //传入radio的label值进行回调
            changeCategory(label){
                this.loading = true;
                let params = {
                    questionCategory:label,
                    createUserIdentity: this.userInfo.user.cdId,
                }
                getQuestionPage(params).then(res => {
                    if(res.code != 200){
                        this.$message.error(res.message);
                        return this.loading = false;
                    }
                    this.data = res.data.records;
                    return this.loading = false;
                }).catch(err =>{
                    this.$message.error(err.data);
                })
                this.loading = false;
            }
        },
        created() {
            this.init();
        },
        computed: {
            userInfo() {
                return this.$store.state.user;
            }
        }
    }
</script>

<style lang="scss">
    .avue_panel {
        /*margin-top: 3%;*/
        position: relative;
        padding-top: 2%;
        border-top: 1px solid #e3e3e3;
    }

    .demo-form-inline {
        .el-form-item {
            margin-left: 20px;

            .el-input {
                width: 220px;
            }
        }
    }

    .menuShowHide {
        margin-left: 10px;
        color: #097ce3;
        cursor: pointer;
    }
</style>