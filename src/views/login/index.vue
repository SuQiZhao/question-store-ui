<template>
    <div class="login">
        <el-container style="height:100%">
            <!-- 头部-->
            <el-header class="login_head" style="height:12%">
                <a href="/"><img alt height="100%" src="../../assets/img/logo3.png" style="margin:0px 20%"/></a>
            </el-header>
            <el-main class="login_main">
                <el-form :model="loginForm" class="login_form" v-loading="loading" ref="loginForm">
                    <el-form-item>
                        <div class="title">
                            <i class="el-icon-user"></i>用户登录
                        </div>
                    </el-form-item>
<!--                    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">-->
<!--                        <el-tab-pane label="学生" name="student">-->
<!--                            <el-form-item label="账号" prop="name">-->
<!--                                <el-input placeholder="请输入学号" type="username" v-model="loginForm.username"></el-input>-->
<!--                            </el-form-item>-->
<!--                            <el-form-item label="密码" prop="pwd">-->
<!--                                <el-input auto-complete="off" placeholder="请输入密码" type="password"-->
<!--                                          v-model="loginForm.password"></el-input>-->
<!--                            </el-form-item>-->
<!--                        </el-tab-pane>-->
<!--                        <el-tab-pane label="教职工" name="teacher">-->
<!--                            <el-form-item label="账号" prop="name">-->
<!--                                <el-input placeholder="请输入教职工账号" type="username" v-model="loginForm.username"></el-input>-->
<!--                            </el-form-item>-->
<!--                            <el-form-item label="密码" prop="pwd">-->
<!--                                <el-input auto-complete="off" placeholder="请输入密码" type="password"-->
<!--                                          v-model="loginForm.password"></el-input>-->
<!--                            </el-form-item>-->
<!--                        </el-tab-pane>-->
<!--                        <el-tab-pane label="管理员" name="admin">-->
                            <el-form-item label="账号" prop="name">
                                <el-input placeholder="请输入账号" type="username" v-model="loginForm.username"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="pwd">
                                <el-input auto-complete="off" placeholder="请输入密码" type="password"
                                          v-model="loginForm.password"></el-input>
                            </el-form-item>
<!--                        </el-tab-pane>-->
<!--                    </el-tabs>-->

                    <el-form-item>
                        <el-button @click="handleLogin" class="loginBtn" type="primary">登 录</el-button>
                        <el-button @click="toRegister" class="registerBtn" plain type="primary">注册</el-button>
                        <dialogForm :visible.sync="dialog_visible" ref="orderRegister"
                                    v-if="dialog_visible"></dialogForm>
                    </el-form-item>
                </el-form>
                <el-drawer
                        :before-close="handleClose"
                        :visible.sync="dialog"
                        direction="rtl"
                        custom-class="demo-drawer"
                        ref="drawer"
                >
<!--                    title插槽-->
                    <div slot="title">
                        <div class="title">
                            <i class="el-icon-user"></i>用户注册
                        </div>
                    </div>
                    <div class="demo-drawer__content">
                        <el-form :model="addForm" label-width="100px" label-position="left" ref="addForm" v-loading="addLoading">
                            <el-form-item label="我是：">
                                <el-select v-model="addForm.userLevel" placeholder="请选择" @change="handleChange">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item :label="accountLabel" >
                                <el-input v-model="addForm.username"
                                          :maxlength="accountLength"
                                          minlength="4"
                                          show-word-limit
                                          :placeholder="accountPlaceholder"></el-input>
                            </el-form-item>
                            <el-form-item label="密码：" >
                                <el-input v-model="addForm.password"
                                          type="password"
                                          show-password
                                          maxlength="16"
                                          placeholder="请输入密码"
                                          minlength="6"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码：" >
                                <el-input v-model="addForm.checkpass"
                                          type="password"
                                          show-password
                                          maxlength="16"
                                          placeholder="请再次输入密码"
                                          minlength="6"></el-input>
                            </el-form-item>
                            <el-form-item label="学校：">
                                <el-select v-model="addForm.collageName"
                                           :loading="selectLoading"
                                           placeholder="请输入学校名称"
                                           filterable
                                           remote
                                           :remote-method="searchData">
                                    <el-option
                                            v-for="item in collageList"
                                            :key="item.collageName"
                                            :label="item.collageName"
                                            :value="item.collageName">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="专业：" >
                                <el-input v-model="addForm.majorName" maxlength="16" placeholder="请输入专业名称"></el-input>
                            </el-form-item>
                        </el-form>
                        <div class="demo-drawer__footer">
                            <el-button type="primary"
                                       :loading="btnLoading"
                                       style="width: 40%" @click="handleAdd">注 册</el-button>
                            <el-button @click="cancelForm" style="width: 40%">取 消</el-button>
                        </div>
                    </div>
                </el-drawer>
            </el-main>
            <!--脚部-->
            <el-footer style="height:12%">
                <div class="footerBox">
                    <div class="footerText">
                        <div class="website">
                            <el-link :underline="false" class="text">网站声明</el-link>
                            <span class="text">|</span>
                            <el-link :underline="false" class="text">联系方式</el-link>
                            <span class="text">|</span>
                            <el-link :underline="false" class="text">帮助中心</el-link>
                            <span class="text">|</span>
                            <el-link :underline="false" class="text">加入我们</el-link>
                        </div>
                        <div class="authorData">
                            <span class="text">广西民族大学相思湖学院2016级软件工程专业</span>
                            <span class="text">|</span>
                            <span class="text">苏其钊</span>
                        </div>
                    </div>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>
<script>
    import {getCollageName} from "@/api/collageList";
    import {login_v1_1,addUser} from "@/api/user";
    import {getUserInfo_v1_1} from "../../api/user";

    export default {
        data() {
            return {
                accountLength:12,
                accountLabel:'学号',
                accountPlaceholder:'请输入学号',
                activeName:'student',
                collageList:[],
                selectLoading:false,
                dialog:false,
                loginForm: {
                    username: '',
                    password: '',
                    login_checked: false,
                },
                addForm: {
                    userLevel:'',
                    username:'',
                    password:'',
                    checkpass:'',
                    collageName:'',
                    majorName:''
                },
                data: [],
                dialogFormVisible: false,
                loading: false,
                //element表单校验规则
                rules: {
                    name: [
                        {required: true, message: "请输入用户名", trigger: "blur"},
                        {min: 2, max: 16, message: "长度在 3 到 16 个字符", trigger: "blur"}
                    ],
                    pwd: [
                        {required: true, message: "请输入密码", trigger: "blur"},
                        {min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur"}
                    ],
                },
                userInfo:[],
                btnLoading:false,
                options: [{
                    value: '1',
                    label: '学生'
                }, {
                    value: '2',
                    label: '教职工'
                }],
                addLoading:false
            };
        },
        methods: {
            handleChange(){
                if(this.addForm.userLevel == 2){
                    this.accountLength = 16;
                    this.accountLabel = '用户名：';
                    this.accountPlaceholder = '请输入用户名';
                }else{
                    this.accountLength = 12;
                    this.accountLabel = '学号：';
                    this.accountPlaceholder = '请输入学号';
                }
            },
            handleAdd(){
                this.addLoading = true;
                if(this.addForm.password != this.addForm.checkpass){
                    this.$message.error("两次输入密码不一致！")
                    return this.addLoading = false;
                }
                let params = {
                    userLevel:this.addForm.userLevel,
                    username:this.addForm.username,
                    password:this.addForm.password,
                    collageName:this.addForm.collageName,
                    majorName:this.addForm.majorName,
                    deleteFlag:0,
                    status:0
                }
                addUser(params).then(res => {
                    if(res.code == 200){
                        this.$message.success("注册成功！");
                        //关闭遮罩层 清除数据
                        this.addForm = {
                            userLevel:'',
                            username:'',
                            password:'',
                            checkpass:'',
                            collageName:'',
                            majorName:''
                        }
                        this.addLoading = false;
                        return this.dialog = false;
                    } else {
                        this.addLoading = false;
                        return this.$message.error(res.message);
                    }
                })
            },
            searchData(collageName){
                if (collageName != ''){
                    this.selectLoading = true;
                    getCollageName(collageName).then(res => {
                        if(res.code == 200){
                            this.collageList = res.data;
                            this.selectLoading = false;
                        }else {
                            this.$message.error("系统繁忙");
                        }
                    })
                }
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                        // this.$refs['addForm'].resetFields();
                        this.addForm = {
                            userLevel:'',
                            username:'',
                            password:'',
                            checkpass:'',
                            collageName:'',
                            majorName:''
                        }
                    })
                    .catch(_ => {});
            },
            cancelForm(done){
                this.$confirm('确认关闭？')
                    .then(_ => {
                        this.dialog = false;
                        this.addForm = {
                            userLevel:'',
                            username:'',
                            password:'',
                            checkpass:'',
                            collageName:'',
                            majorName:''
                        }
                    })
                    .catch(_ => {});
            },
            //dialogForm属性绑定变化
            toRegister() {
                this.dialog = true;
            },
            //前端登陆验证
            handleLogin() {
                this.loading = true;
                if (this.loginForm.username == null || this.loginForm.username == "" || this.loginForm.password == null || this.loginForm.password == "") {
                    this.$message.warning("用户名或者密码不能为空");
                    return this.loading = false;
                }
                let loginParam = {
                    username: this.loginForm.username,
                    password: this.loginForm.password
                };
                login_v1_1(loginParam).then(res => {
                    this.data = res.data;
                    this.loading = false;
                    if (res.code != 200) {
                        return this.$message.error(res.message);
                    }
                    this.$message.success("登陆成功");
                    //将登陆成功的token存储到sessionStorage中
                    window.sessionStorage.setItem("token", res.data.token);
                    //存储store对象信息
                    this.$store.commit('$_setStorage', {user: this.data})
                    //到个人中心
                    this.$router.push('/home');
                }).catch(err => {
                    this.loading = false;
                    return this.$message.error(err.data);
                });
                window.sessionStorage.getItem("token");
            }
        }
    };
</script>
<style lang="scss">
    /*抽屉去掉element-ui的drawer标题选中状态*/
    :focus{
        outline:0;
    }
    .demo-drawer__footer{
        width:100%;
        position:absolute;
        bottom:0;
        left:0;
        border-top:1px solid #e8e8e8;
        padding:10px 16px;
        text-align:center;
        background-color:white;
    }
    .dialog_title{
        .el-icon-user{
            font-size: 45px;
        }
    }
    .demo-drawer__content{
        padding-left: 5%;
        padding-right: 30%;
    }
    .footerBox {
        text-align: center;
        margin: 40px 0px;

        .footerText {
            margin-top: 20px 0px;

            .text {
                color: #999999;
                font-size: 12px;
                margin-right: 20px;
            }
        }
    }

    .forgotPwd {
        float: right;
    }

    .autoLogin {
        float: left;
    }

    .loginBtn {
        float: left;
        height: 50px;
        width: 120px;
    }

    .registerBtn {
        float: right;
        height: 50px;
        width: 120px;
    }

    .title {
        font-size: 30px;
        float: left;

        .el-icon-user {
            color: #10568a;
            margin-right: 25px;
        }
    }

    .login_form {
        text-align: center;
        position: absolute;
        width: 20%;
        margin-left: 70%;
        padding: 30px 30px;
        background-color: #fff;
        opacity: 0.9;
        border-radius: 20px;
    }

    .login_head {
        border-bottom: 1px solid #e9e9e9;
        background-color: #f8f8f8;
        color: #333;
        float: left;
    }

    .el-footer {
        border-top: 1px solid #e9e9e9;
        background-color: #f8f8f8;
        color: #333;
        float: left;
    }

    .login_main {
        background-color: #fff;
        color: #333;
        text-align: center;
        background-image: url("../../assets/img/loginBackground.jpg");
    }

    html,
    body,
    #app,
    .login,
    .el-container {
        /*设置内部填充为0，几个布局元素之间没有间距*/
        padding: 0px;
        /*外部间距也是如此设置*/
        margin: 0px;
        /*统一设置高度为100%*/
        height: 100%;
        width: 100%;
        direction: vertical;
    }
</style>