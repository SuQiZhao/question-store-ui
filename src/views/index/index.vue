<template>
    <div class="index">
        <el-container style="height:100%">
            <!--头部-->
            <el-header class="index_head" style="height:100px">
                <div class="head_logo">
                    <img alt height="100%" src="../../assets/img/logo.png"/>
                </div>
                <div class="head_menu">
                    <el-menu :router="true" :unique-opened="true" active-text-color="#99CC99" class="head_select"
                             mode="horizontal">
                        <el-menu-item index="/index" style="font-size: 16px">首页</el-menu-item>
                        <el-menu-item index="/tiku" style="font-size: 16px">考试题库</el-menu-item>
                        <el-menu-item index="/guide" style="font-size: 16px">考试指南</el-menu-item>
                        <el-menu-item index="/news" style="font-size: 16px">考试资讯</el-menu-item>
                        <el-menu-item index="/answer" style="font-size: 16px">智慧问答</el-menu-item>
                        <el-menu-item index="/home" style="font-size: 16px" @click="isLogin">个人中心</el-menu-item>
                        <el-menu-item style="padding-right: 0px;padding-left: 50px">
                            <el-input placeholder="从智慧题库中搜索" size="small"></el-input>
                        </el-menu-item>
                        <el-menu-item style="padding-left: 10px">
                            <el-button size="mini" type="primary">搜索</el-button>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-header>
            <el-main>
                <!--                <div class="index_body">-->
                <router-view/>
                <!--                </div>-->
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
    export default {
    data(){
        return{

        }
    },
        methods:{
        //页面token判断是否登录拦截
            isLogin(){
                if(window.sessionStorage.getItem("token") == null){
                    this.$message.warning("请先登录!");
                    return this.$router.push('/login');
                }
                window.sessionStorage.setItem("token");
                return this.$router.push('/home');
            }
        }
    }
</script>
<style lang="scss">
    .index_head {
        border-bottom: 2px solid #e9e9e9;
        background-color: #fff;
        color: #333;
    }

    .head_logo {
        height: 100%;
        float: left;
    }

    .head_select {
        float: left;
        height: 100%;
        text-align: center;
    }

    .head_menu {
        margin-top: 38px;
    }

    .el-main {
        background-color: #f2f2f2;
    }
</style>