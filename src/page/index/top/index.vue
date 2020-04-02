<template>
    <!--顶部-->
    <el-header class="home_header" style="height:10%">
        <div class="logo_img">
            <img alt height="100%" src="../../../assets/img/logo.png"/>
        </div>
        <div class="top_dropdown">
            <el-dropdown :hide-on-click="false">
                <div class="top_dropdown_nickname">
                    {{data.nickname}}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </div>
                <el-dropdown-menu>
                    <el-dropdown-item>个人信息<el-button size="mini" style="float: right;margin-top:2%" plain>编辑</el-button></el-dropdown-item>
                    <el-dropdown-item>学校：{{data.collageName}}</el-dropdown-item>
                    <el-dropdown-item>专业：{{data.majorName}}</el-dropdown-item>
                    <el-dropdown-item>上次登录：{{data.loginTime}}</el-dropdown-item>
                    <el-dropdown-item style="border-top: #EBEEF5 1px solid">问题反馈</el-dropdown-item>
                    <el-dropdown-item style="border-top: #EBEEF5 1px solid"><el-button size="mini" style="margin-top:2%" plain>退出</el-button></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <!--    <searchBar />-->
    </el-header>
</template>
<script>
    // import searchBar from "./top-searchBar";
    // import topDropdown from "./top-dropdown";

    export default {
        components: {
        },
        props:{
            data:{}
        },
        data() {
            return {
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
    .top_dropdown_nickname{
        font-size: 16px;
    }
</style>