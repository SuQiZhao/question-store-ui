<template>
    <div class="index">
        <el-container style="height:100%">
            <!--头部-->
            <el-header class="index_head" style="height:100px">
                <div class="head_logo">
                    <img alt height="100%" src="../../assets/img/logo.png"/>
                </div>
                <div class="head_menu">
                    <el-menu active-text-color="#99CC99" class="head_select" mode="horizontal" :router="true" :unique-opened="true">
                        <el-menu-item index="/index" style="font-size: 16px" >首页</el-menu-item>
                        <el-menu-item index="1" style="font-size: 16px">考试题库</el-menu-item>
                        <el-menu-item index="2" style="font-size: 16px">考试指南</el-menu-item>
                        <el-menu-item index="3" style="font-size: 16px">考试资讯</el-menu-item>
                        <el-menu-item index="4" style="font-size: 16px">在线考试</el-menu-item>
                        <el-menu-item index="/home" style="font-size: 16px">个人中心</el-menu-item>
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
                <div class="index_body">
                    <router-view/>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    export default {
        components: {}
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
    .el-main{
        background-color: #f2f2f2;
    }
</style>