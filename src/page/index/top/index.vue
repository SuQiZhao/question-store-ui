<template>
    <!--顶部-->
    <el-header class="home_header" style="height:10%">
        <div class="logo_img">
            <img alt height="100%" src="../../../assets/img/logo.png"/>
        </div>
        <div class="top_dropdown">
            <el-dropdown :hide-on-click="false">
                <div class="top_dropdown_nickname">
                    {{userInfo.nickname}}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </div>
                <el-dropdown-menu>
                    <el-dropdown-item>个人信息
                        <el-button :loading="btnLoading" @click="goEdit" plain size="mini"
                                   style="float: right;margin-top:2%">编辑
                        </el-button>
                    </el-dropdown-item>
                    <el-dropdown-item>姓名：{{userInfo.username}}</el-dropdown-item>
                    <el-dropdown-item>学校：{{userInfo.collageName}}</el-dropdown-item>
                    <el-dropdown-item>专业：{{userInfo.majorName}}</el-dropdown-item>
                    <el-dropdown-item>上次登录：{{userInfo.loginTime}}</el-dropdown-item>
                    <el-dropdown-item style="border-top: #EBEEF5 1px solid">问题反馈</el-dropdown-item>
                    <el-dropdown-item style="border-top: #EBEEF5 1px solid">
                        <el-button @click="logout" plain size="mini" style="margin-top:2%">退出</el-button>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <!--    <searchBar />-->
    </el-header>
</template>
<script>
    import {logout} from "@/api/user";

    export default {
        components: {},
        props: {
            userInfo: {}
        },
        data() {
            return {
                loading: false,
                btnLoading: false,
            }
        },
        methods: {
            // 登出方法
            logout() {
                this.$confirm("是否退出系统, 是否继续?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    logout().then(() => {
                        window.sessionStorage.removeItem("token");
                        this.$message.success("退出成功！");
                        this.$router.push('/login');
                    })
                });
            },
            goEdit() {
                this.$router.push('/usersetting');
            }
        }
    };
</script>
<style lang="scss">
    .home_header {
        border-bottom: 1px solid #e9e9e9;
        background-color: #fff;
        color: #333;
        float: left;
    }

    .logo_img {
        height: 100%;
        float: left;
    }

    .top_dropdown {
        /*position: absolute;*/
        float: right;
    }

    .top_dropdown_nickname {
        font-size: 16px;
    }
</style>