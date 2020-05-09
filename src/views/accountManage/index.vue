<template>
    <div>
        <el-form :inline="true" class="demo-form-inline" ref="questionForm" :model="search">
            <el-form-item label="用户名：">
                <el-input placeholder="请输入用户名" v-model="search.username"></el-input>
            </el-form-item>
            <el-form-item label="学校：">
                <el-input placeholder="请输入学校名称" v-model="search.collageName"></el-input>
            </el-form-item>
            <el-form-item label="昵称：">
                <el-input placeholder="请输入昵称" v-model="search.nickname"></el-input>
            </el-form-item>
            <el-form-item label="创建时间：">
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
<!--                    <el-button type="primary" @click="handleAdd">点击添加</el-button>-->
                </avue-empty>
            </template>
            <template slot-scope="scope" slot="menu">
                <el-button size="small" @click="editItem(scope.row,1)" type="text">查看</el-button>
                <el-button size="small" @click="editItem(scope.row,2)" type="text">编辑</el-button>
<!--                <el-button size="small" @click="deleteItem(scope.row)" type="text">关闭</el-button>-->
            </template>
        </avue-crud>
        <el-dialog :title="title" :visible.sync="dialogFormVisible">
            <el-form :model="editForm" label-width="100px" label-position="left">
                <el-form-item label="唯一编码：">
                    <el-input v-model="editForm.cdId" disabled="disable"></el-input>
                </el-form-item>
                <el-form-item label="用户名：">
                    <el-input v-model="editForm.username" :disabled=checkOutDis></el-input>
                </el-form-item>
                <el-form-item label="昵称：">
                    <el-input v-model="editForm.nickname" :disabled=checkOutDis></el-input>
                </el-form-item>
                <el-form-item label="学校：">
                    <el-input :disabled="checkOutDis" v-model="editForm.collageName"></el-input>
                </el-form-item>
                <el-form-item label="专业：">
                    <el-input :disabled="checkOutDis" v-model="editForm.majorName"></el-input>
                </el-form-item>
                <el-form-item label="电话：">
                    <el-input :disabled="checkOutDis" v-model="editForm.telephone"></el-input>
                </el-form-item>
                <el-form-item label="创建时间：">
                    <el-input disabled="disable" v-model="editForm.createTime"></el-input>
                </el-form-item>
                <el-form-item label="更新时间：">
                    <el-input disabled="disable" v-model="editForm.updatedTime"></el-input>
                </el-form-item>
                <el-form-item label="用户等级：">
                    <el-input :disabled="checkOutDis" v-model="editForm.userLevel"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false" >返 回</el-button>
                <el-button type="primary" @click="update" v-if="handleEdit" :loading=btnLoading>确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import pickerOptions from "./pickerOptions";
    import option from "./option";
    import {findUserPage, updateUser} from "../../api/user";
    export default {
        name: "index",
        data(){
            return {
                data:[],
                search:{
                    rangeDate:[],
                    username:'',
                    nickname:'',
                    collageName:''
                },
                menuOpen:false,
                pickerOption: pickerOptions,
                option:option,
                loading:false,
                page: {
                    pageSizes: [10, 20, 30, 40],
                    currentPage: 1,
                    total: 0,
                    pageSize: 10
                },
                title:'',
                dialogFormVisible:false,
                editForm:{
                    cdId:'',
                    username:'',
                    nickname: '',
                    password:'',
                    email:'',
                    collageName:'',
                    majorName:'',
                    telephone:'',
                    createTime:'',
                    updatedTime:'',
                    userLevel: ''
                },
                checkOutDis:false,
                handleEdit:false,
                btnLoading:false
            }
        },
        methods:{
            update(){
                this.$confirm('即将更新题目，是否继续？','提示',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type:'warning'
                }).then( () => {
                    let params = {
                        cdId:this.editForm.cdId,
                        username:this.editForm.username,
                        nickname:this.editForm.nickname,
                        password:this.editForm.password,
                        email:this.editForm.email,
                        collageName:this.editForm.collageName,
                        majorName:this.editForm.majorName,
                        telephone:this.editForm.telephone,
                        userLevel:this.editForm.userLevel,
                        updatedTime:this.editForm.updatedTime,
                        createTime:this.editForm.createTime,
                        deleteFlag: 0,
                        status:0
                    };
                    updateUser(params).then(res => {
                        if(res.code == 200){
                            this.dialogFormVisible = false;
                            this.init();
                            return this.$message.success(res.message);
                        }else {
                            return this.$message.error(res.message);
                        }
                    })
                })
            },
            editItem(row,type){
                this.dialogFormVisible = true;
                this.editForm.cdId = row.cdId;
                this.editForm.username = row.username;
                this.editForm.password = row.password;
                this.editForm.nickname = row.nickname;
                this.editForm.collageName = row.collageName;
                this.editForm.majorName = row.majorName;
                this.editForm.telephone = row.telephone;
                this.editForm.userLevel = row.userLevel;
                this.editForm.createTime = row.createTime;
                this.editForm.updatedTime = row.updatedTime;
                this.editForm.email = row.email;
                //type 1为查看 2为编辑
                if (type == 1){
                    this.title = '查看';
                    this.checkOutDis = true;
                    this.handleEdit = false;
                }
                else if(type == 2){
                    this.title = '编辑';
                    this.checkOutDis = false;
                    this.handleEdit = true;
                }
            },
            searchData(){
                this.loading = true;
                let params = {
                    username:this.search.username,
                    collageName:this.search.collageName,
                    nickname:this.search.nickname,
                    startDate:this.search.rangeDate[0],
                    endDate:this.search.rangeDate[1]
                }
                findUserPage(params).then(res => {
                    if(res.code == 200){
                        this.data = res.data.records;
                        this.page.total = res.data.total;
                        this.loading = false;
                    }else {
                        this.loading = false;
                        this.$message.error(res.message);
                    }
                })
            },
            resetForm(){
                this.search = {
                    rangeDate:[],
                    username:'',
                    collageName:''
                };
                this.init();
            },
            init(){
                this.loading = true;
                findUserPage().then(res => {
                    if(res.code == 200){
                        this.data = res.data.records;
                        this.page.total = res.data.total;
                        this.loading = false;
                    }else {
                        this.loading = false;
                        this.$message.error(res.message);
                    }
                })
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
        },
        created() {
            this.init();
        }
    }
</script>

<style lang="scss">

</style>