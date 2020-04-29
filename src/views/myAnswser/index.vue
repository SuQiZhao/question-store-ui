<template>
    <div>
        <el-row>
            <el-col :span=24>
                <div class="avue_panel">
                    <el-form :inline="true" class="demo-form-inline" ref="answserForm" :model="search">
                        <el-form-item label="标题名称：">
                            <el-input placeholder="请输入标题名称" v-model="search.questionTitle"></el-input>
                        </el-form-item>
                        <el-form-item label="内容：">
                            <el-input placeholder="请输入标题名称" v-model="search.content"></el-input>
                        </el-form-item>
                        <!--                        <el-form-item label="提问人：">-->
                        <!--                            <el-input placeholder="请输入提问人" v-model="search.askUser"></el-input>-->
                        <!--                        </el-form-item>-->
                        <el-form-item label="状态：">
                            <el-select placeholder="请选择提问状态" v-model="search.isBest">
                                <el-option :key="item.value" :label="item.label" :value="item.value"
                                           v-for="item in answserStatusArray">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="回答时间：">
                            <!--增加折叠添加v-if="menuOpen"-->
                            <el-date-picker
                                    :picker-options="pickerOption"
                                    align="right"
                                    end-placeholder="结束日期"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    type="daterange"
                                    unlink-panels
                                    v-model="search.rangeDate"
                                    v-if="menuOpen">
                            </el-date-picker>
                            <!--                            折叠输入框-->
                            <span @click="menuOpen = !menuOpen" class="menuShowHide">
                                                            {{ menuOpen ? "收起" : "展开" }}&nbsp;
                                                            <i
                                                                    :class="menuOpen? 'el-icon-arrow-up': 'el-icon-arrow-down'"
                                                            ></i>
                                                        </span>
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
                    >
                        <!-- 置空提示-->
                        <template slot="empty">
                            <avue-empty
                                    desc="暂无数据"
                                    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original">
                                <el-button type="primary" @click="handleAdd">点击添加</el-button>
                            </avue-empty>
                        </template>
                        <template slot-scope="scope" slot="menu">
                            <el-button size="small" @click="editItem(scope.row,1)" type="text">查看</el-button>
                            <el-button size="small" @click="editItem(scope.row,2)" type="text">编辑</el-button>
                            <el-button size="small" @click="deleteItem(scope.row)" type="text">关闭</el-button>
                        </template>
                    </avue-crud>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import {DIC} from "../../constant/dicConstant";
    import option from "./option";
    import pickerOptions from "./pickerOptions";
    import {findAnswserPage} from "../../api/questionAnswser";

    export default {
        name:"index",
        data(){
            return {
                search:{
                    content:'',
                    questionTitle:'',
                    isBest:'',
                    rangeTime:[]
                },
                answserStatusArray:DIC.IS_BEST,
                menuOpen:false,
                data:[],
                option:option,
                loading:false,
                page: {
                    pageSizes: [10, 20, 30, 40],
                    currentPage: 1,
                    total: 0,
                    pageSize: 10
                },
                pickerOption: pickerOptions,
            }
        },
        methods:{
            resetForm(){

            },
            searchData(){
                this.loading = true;
                let params = {
                    userId:this.userInfo.cdId,
                    questionTitle: this.search.questionTitle,
                    content:this.search.content,
                    isBest: this.search.isBest
                }
                findAnswserPage(params).then(res =>{
                    if(res.code == 200){
                        this.data = res.data.records;
                        this.page.total = res.data.total;
                        return this.loading = false;
                    }else {
                        this.loading = false;
                        return this.$message.error(res.message);
                    }
                })
            },
            editItem(){

            },
            deleteItem(){

            },
            handleAdd(){
                this.$router.push('/home');
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
            init(){
                this.loading = true;
                let params = {
                    current: this.page.currentPage,
                    size: this.page.pageSize,
                    userId:this.userInfo.cdId,
                }
                findAnswserPage(params).then(res => {
                    if(res.code == 200){
                        this.data = res.data.records;
                        this.page.total = res.data.total;
                        return this.loading = false;
                    }else {
                        this.loading = false;
                        return this.$message.error(res.message);
                    }
                })
            }
        },
        created() {
            this.init();
        },
        computed: {
            userInfo() {
                return this.$store.state.user.user;
            }
        }
    };
</script>
<style lang="scss">
    .menuShowHide {
        margin-left: 10px;
        color: #097ce3;
        cursor: pointer;
    }
</style>