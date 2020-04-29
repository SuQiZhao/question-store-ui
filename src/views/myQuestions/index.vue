<template>
    <div>
        <el-row>
            <el-col :span=24 style="margin-bottom: 2%">
                <el-radio-group :key="course" v-for="course in courses" v-model="checkboxGroup" @change="changeCategory(course.value)">
                    <el-radio-button :label="course.label" >
                    </el-radio-button>
                </el-radio-group>
            </el-col>
        </el-row>
        <el-row class="">
            <el-col :span=24>
                <div class="avue_panel">
                    <el-form :inline="true" class="demo-form-inline" ref="questionForm" :model="search">
                        <el-form-item label="标题名称：">
                            <el-input placeholder="请输入标题名称" v-model="search.questionTitle"></el-input>
                        </el-form-item>
<!--                        <el-form-item label="提问人：">-->
<!--                            <el-input placeholder="请输入提问人" v-model="search.askUser"></el-input>-->
<!--                        </el-form-item>-->
                        <el-form-item label="状态：">
                            <el-select placeholder="请选择提问状态" v-model="search.isResolve">
                                <el-option :key="item.value" :label="item.label" :value="item.value"
                                           v-for="item in askStatusArray">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="发布时间：">
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
                    <el-dialog :title="title" :visible.sync="dialogFormVisible">
                        <el-form :model="editForm" label-width="100px" label-position="left">
                            <el-form-item label="分类：">
                                <el-select v-model="editForm.questionCategory" :disabled=checkOutDis>
                                    <el-option
                                            v-for="item in categoryOptions"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="标题：">
                                <el-input v-model="editForm.questionTitle" :disabled=checkOutDis></el-input>
                            </el-form-item>
                            <el-form-item label="内容：">
                                <el-input type="textarea" v-model="editForm.questionDetail" :rows="6" :disabled=checkOutDis></el-input>
                            </el-form-item>
<!--                            <el-form-item label="附件：" >-->
<!--                                <el-upload-->
<!--                                        drag-->
<!--                                        action="https://jsonplaceholder.typicode.com/posts/"-->
<!--                                        multiple v-model="editForm.questionAttachment" >-->
<!--                                    <i class="el-icon-upload"></i>-->
<!--                                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
<!--                                    <div class="el-upload__tip" slot="tip">只能上传题库相关文件</div>-->
<!--                                </el-upload>-->
<!--                            </el-form-item>-->
                            <el-form-item label="阅读量：">
                                <el-input :disabled="true" v-model="editForm.reading"></el-input>
                            </el-form-item>
                            <el-form-item label="修改时间：">
                                <el-input :disabled="true" v-model="editForm.updatedTime"></el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false" >取 消</el-button>
                            <el-button type="primary" @click="updateQuestion" v-if="handleEdit">确 定</el-button>
                        </div>
                    </el-dialog>
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
                //默认选项
                checkboxGroup: [],
                courses: DIC.QUESTION_CATEGORY,
                data: [],
                option: option,
                menuOpen: false,
                askStatusArray: DIC.IS_RESOLVE,
                search: {
                    questionTitle: '',
                    rangeDate:[],
                    isResolve:''
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
                radioLabel:'',
                dialogFormVisible:false,
                editForm:{
                    cdId:'',
                    questionTitle:'',
                    questionCategory:'',
                    questionDetail:'',
                    questionAttachment:'',
                    createTime:'',
                    updatedTime:'',
                    reading:'',
                    isResolve:'',
                    resolveUser:''
                },
                categoryOptions:DIC.QUESTION_CATEGORY,
                checkOutDis:false,
                handleEdit:true,
                title:'',
            }
        },
        methods: {
            //修改方法
            updateQuestion(){
                this.$confirm('即将更新题目，是否继续？','提示',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type:'warning'
                }).then( () => {
                    this.loading = true;
                    let params = {
                        cdId:this.editForm.cdId,
                        questionTitle:this.editForm.questionTitle,
                        questionCategory:this.editForm.questionCategory,
                        questionDetail:this.editForm.questionDetail,
                        isResolve:this.editForm.isResolve,
                        deleteFlag: 0
                    };
                    updateQuestion(params).then(res => {
                        if(res.code === 200){
                            this.dialogFormVisible = false;
                            this.init();
                            this.loading = false;
                            return this.$message.success(res.message);
                        }
                        this.init();
                        this.loading = false;
                        return this.$message.error(res.message);
                    }).catch(err =>{
                        this.dialogFormVisible = false;
                        this.init();
                        this.loading = false;
                        return this.$message.error(err.data);
                    })
                })
            },
            //编辑问题
            editItem(row,type){
                this.dialogFormVisible = true;
                this.editForm.cdId = row.cdId;
                this.editForm.questionTitle = row.questionTitle;
                this.editForm.questionCategory = row.questionCategory;
                this.editForm.questionDetail = row.questionDetail;
                this.editForm.questionAttachment = row.questionAttachment;
                this.editForm.createTime = row.createTime;
                this.editForm.updatedTime = row.updatedTime;
                this.editForm.reading = row.reading;
                this.editForm.isResolve = row.isResolve;
                this.editForm.resolveUser = row.resolveUser;
                //type 1为查看 2为编辑
                if(type === 1){
                    this.title = '查看题目';
                    this.checkOutDis = true;
                    this.handleEdit = false;
                }else if(type === 2){
                    this.title = '编辑题目';
                    this.handleEdit = true;
                    this.checkOutDis = false;
                }
            },
            //删除方法
            deleteItem(row){
                this.$confirm('即将关闭题目，是否继续？','提示',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type:'warning'
                }).then( () =>{
                    this.loading = true;
                    let param ={
                        cdId:row.cdId,
                        questionTitle:row.questionTitle,
                        questionCategory:row.questionCategory,
                        isResolve:2,
                        deleteFlag: 0
                    };
                    updateQuestion(param).then( res =>{
                        if (res.code === 200){
                            this.init();
                            this.loading = false;
                            return this.$message.success(res.message);
                        }
                        this.init();
                        this.loading = false;
                        return this.$message.error(res.message);
                    }).catch( err => {
                        return this.$message.error(err.data);
                    })
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
                    createUserIdentity: this.userInfo.user.cdId,
                    //得到label值后代入
                    questionCategory: this.checkboxGroup,
                    questionTitle:this.search.questionTitle,
                    startDate:this.search.rangeDate[0],
                    endDate:this.search.rangeDate[1],
                    isResolve:this.search.isResolve
                };
                findQuestionPage(params).then( res=>{
                    if (res.code != 200){
                        return this.$message.error(res.message);
                    }
                    this.data = res.data.records;
                    this.page.total = res.data.total;
                    this.$message.success(res.message);
                    return this.loading = false;
                }).catch( err=>{
                    this.loading = false;
                    return this.$message.error(err.data);
                })
            },
            //初始化表格方法
            init(){
                this.loading = true;
                let params = {
                    current: this.page.currentPage,
                    size: this.page.pageSize,
                    createUserIdentity: this.userInfo.user.cdId,
                    questionCategory: this.checkboxGroup,
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
            //传入label值的回调函数
            changeCategory(label){
                this.loading = true;
                let params = {
                    questionCategory:label,
                    createUserIdentity: this.userInfo.user.cdId,
                }
                findQuestionPage(params).then(res => {
                    if(res.code != 200){
                        this.$message.error(res.message);
                        return this.loading = false;
                    }
                    this.data = res.data.records;
                    //将label值存入变量以搜索时代入参数
                    this.checkboxGroup = label;
                    this.page.total = res.data.total;
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
        .avue-crud{
            font-size: 16px;
        }
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