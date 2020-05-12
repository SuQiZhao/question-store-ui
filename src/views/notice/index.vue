<template>
    <div>
        <el-form :inline="true" class="demo-form-inline" ref="questionForm" :model="search">
            <el-form-item label="标题名称：">
                <el-input placeholder="请输入标题名称" v-model="search.title"></el-input>
            </el-form-item>
            <el-form-item label="创建人：">
                <el-input placeholder="请输入提问人" v-model="search.username"></el-input>
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
        <el-button type="primary" @click="handleAdd">
            <i class="el-icon-plus"></i>
            <span>新增</span>
        </el-button>
        <div class="avue-data-pad">
            <avue-crud :data="data"
                       :option="option"
                       :table-loading="loading"
                       :page="page"
                       @current-change="currentChange"
                       @size-change="sizeChange"
                       ref="crud">
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
                    <el-form-item label="标题：">
                        <el-input v-model="editForm.title" :disabled=checkOutDis></el-input>
                    </el-form-item>
                    <el-form-item label="内容：">
                        <el-input type="textarea" v-model="editForm.content" :rows="6" :disabled=checkOutDis></el-input>
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
                    <el-form-item label="创建人：">
                        <el-input :disabled="true" v-model="editForm.createdUsername"></el-input>
                    </el-form-item>
                    <el-form-item label="创建时间：">
                        <el-input :disabled="true" v-model="editForm.createTime"></el-input>
                    </el-form-item>
                    <el-form-item label="修改时间：">
                        <el-input :disabled="true" v-model="editForm.updatedTime"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false" >返 回</el-button>
                    <el-button type="primary" @click="handleUpdate" v-if="handleEdit">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import option from "./option";
    import pickerOptions from "./pickerOptions";
    import {deleteNotice, findNoticePage, updateNotice} from "../../api/notice";
    export default {
        name: "index",
        data(){
            return {
                data:[],
                option:option,
                pickerOption: pickerOptions,
                search: {
                    title: '',
                    rangeDate:[],
                    username:''
                },
                menuOpen:false,
                loading:false,
                page: {
                    pageSizes: [10, 20, 30, 40],
                    currentPage: 1,
                    total: 0,
                    pageSize: 10
                },
                dialogFormVisible:false,
                editForm:{
                    title:'',
                    content:'',
                    createTime:'',
                    updatedTime:'',
                    createdUsername:'',
                    unid:''
                },
                handleEdit:true,
                checkOutDis:false,
                title:''
            }
        },
        methods:{
            handleUpdate(){
                this.$confirm('即将更新通知公告，是否继续？','提示',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type:'warning'
                }).then( ()=>{
                    let params = {
                        unid:this.editForm.unid,
                        title:this.editForm.title,
                        content:this.editForm.content,
                        deleteFlag:0
                    };
                    updateNotice(params).then(res => {
                        if(res.code === 200){
                            this.dialogFormVisible = false;
                            this.init();
                            this.loading = false;
                            return this.$message.success(res.message);
                        }
                        this.init();
                        this.loading = false;
                        return this.$message.error(res.message);
                    }).catch(err => {
                        return this.$message.error(err.data);
                    })
                })
            },
            deleteItem(row){
                this.$confirm('即将关闭题目，是否继续？','提示',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type:'warning'
                }).then( () =>{
                    this.loading = true;
                    deleteNotice(row.unid).then(res =>{
                        if (res.code == 200){
                            this.$message.success(res.message);
                            this.init();
                        }else{
                            this.$message.error(res.message)
                            this.init();
                        }
                    }).catch(err => {
                        return this.$message.error(err.data);
                    })
                })
            },
            editItem(row,type){
                //1为查看 2为编辑
                this.dialogFormVisible = true;
                this.editForm.unid = row.unid;
                this.editForm.title = row.title;
                this.editForm.content = row.content;
                this.editForm.createTime = row.createTime;
                this.editForm.updatedTime = row.updateTime;
                this.editForm.createdUsername = row.createdUsername;
                if(type == 1){
                    this.checkOutDis = true;
                    this.title = '查看';
                    this.handleEdit = false;
                } else if (type == 2){
                    this.checkOutDis = false;
                    this.title = '编辑';
                    this.handleEdit = true;
                }
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
            handleAdd(){
                this.$router.push('/addnotice')
            },
            searchData(){

            },
            resetForm(){

            },
            init(){
                this.loading = true;
                let param = {
                    current: this.page.currentPage,
                    size: this.page.pageSize
                }
                findNoticePage(param).then(res=>{
                    if(res.code == 200){
                        this.data = res.data.records;
                        this.page.total = res.data.total;
                        return this.loading = false;
                    }else{
                        this.loading = false;
                        return this.$message.error(res.message)
                    }
                })
            }
        },
        created() {
            this.init();
        }
    }
</script>

<style lang="scss">
.avue-data-pad{
    margin-top: 25px;
}
.menuShowHide {
    margin-left: 10px;
    color: #097ce3;
    cursor: pointer;
}
</style>