<template>
    <div class="login">
        <el-container style="height:100%">
            <!-- 头部-->
            <el-header class="login_head" style="height:12%">
                <img alt height="100%" src="../../assets/img/logo.png" style="margin:0px 20%"/>
            </el-header>
            <el-main class="login_main">
                <el-form class="login_form">
                    <el-form-item>
                        <div class="title">
                            <i class="el-icon-user"></i>用户登录
                        </div>
                    </el-form-item>
                    <el-form-item label="账号" prop="username">
                        <el-input placeholder="请输入邮箱/手机号/学号" type="username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input placeholder="请输入密码" type="password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox class="autoLogin" v-model="login_checked">自动登录</el-checkbox>
                        <el-link :underline="false" class="forgotPwd">忘记密码？</el-link>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="loginBtn" type="primary">登 录</el-button>
                        <el-button @click="toRegister" class="registerBtn" plain type="primary">注册</el-button>
                        <dialogForm :visible.sync="dialog_visible" ref="orderRegister"
                                    v-if="dialog_visible"></dialogForm>
                    </el-form-item>
                </el-form>
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
    import dialogForm from "./dialogForm";

    export default {
        components: {
            dialogForm
        },
        data() {
            return {
                dialog_visible: false,
                login_checked: true,
                username: "",
                password: "",
                dialogFormVisible: false,
                form: {
                    name: "",
                    email: "",
                    password: ""
                },
                options: [
                    {
                        value: "选项1",
                        label: "黄金糕"
                    },
                    {
                        value: "选项2",
                        label: "双皮奶"
                    },
                    {
                        value: "选项3",
                        label: "蚵仔煎"
                    },
                    {
                        value: "选项4",
                        label: "龙须面"
                    },
                    {
                        value: "选项5",
                        label: "北京烤鸭"
                    }
                ],
                value: ""
            };
        },
        methods: {
            toRegister() {
                this.dialog_visible = true;
            }
        }
    };
</script>
<style lang="scss">
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
            color: #67c23a;
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
        opacity: 0.93;
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