<template>
    <!--侧边栏-->
    <el-aside class="menu_aside" style="overflow:visible; width:15%;">
        <!--用户信息-->
        <!-- <el-scrollbar style="overflow-x:hidden;height:100%"> -->
        <el-row class="menu">
            <el-col>
                <el-menu
                        :default-active="$route.name"
                        :router="true"
                        :unique-opened="true"
                        class="el-menu-vertical-demo"
                >
                    <el-menu-item>
                        <sidesearch/>
                    </el-menu-item>
                    <el-menu-item index="/">
                        <i class="el-icon-star-on"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="/home">
                        <i class="el-icon-s-home"></i>
                        <span slot="title">个人中心</span>
                    </el-menu-item>
                    <!--                    <el-menu-item index="4">-->
                    <!--                        <i class="el-icon-star-on"></i>-->
                    <!--                        <span slot="title">我的收藏</span>-->
                    <!--                    </el-menu-item>-->
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-question"></i>
                            <span>我的提问</span>
                        </template>
                        <el-menu-item index="/myAnswser">
                            <i class="el-icon-more-outline"></i>全部
                        </el-menu-item>
                        <el-menu-item index="/myAnswser/alreadyDone">
                            <i class="el-icon-circle-check"></i>已解答
                        </el-menu-item>
                        <el-menu-item index="/myAnswser/notDone">
                            <i class="el-icon-circle-close"></i>未解答
                        </el-menu-item>
                        <el-menu-item index="/myAnswser/alreadyDelete">
                            <i class="el-icon-delete"></i>已删除
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-upload"></i>
                            <span>我的回答</span>
                        </template>
                        <el-menu-item index="3-1">
                            <i class="el-icon-more-outline"></i>全部
                        </el-menu-item>
                        <el-menu-item index="3-2">
                            <i class="el-icon-circle-check"></i>已解决
                        </el-menu-item>
                        <el-menu-item index="3-3">
                            <i class="el-icon-circle-close"></i>未解决
                        </el-menu-item>
                        <el-menu-item index="3-4">
                            <i class="el-icon-delete"></i>已删除
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-s-tools"></i>
                            <span>设置</span>
                        </template>
                        <el-menu-item index="/usersetting">
                            <i class="el-icon-setting"></i>个人资料设置
                        </el-menu-item>
                        <el-menu-item index="/changepwd">
                            <i class="el-icon-key"></i>密码修改
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
        <!-- </el-scrollbar> -->
    </el-aside>
</template>
<script>
    import sidesearch from "./side-search";
    // import userInfo from "./userInfo";
    export default {
        components: {
            sidesearch
            // userInfo
        },
        data() {
            return {
                isCollapse: true
            };
        }
    };
</script>
<style lang="scss">
    .menu_aside {
        overflow: hidden;
        border-right: 2px solid #e9e9e9;
    }

    .user_detail {
        .detail {
            text-align: left;
            line-height: 10px;
            margin-top: 10%;
            margin-left: 10%;
        }
    }

    .home_aside {
        position: relative;
    }

    .userimg {
        text-align: center;
    }

    .menu_userinfo {
        background-color: #ffffff;
        margin: 10px;
        position: absolute;
        margin: 30px 0px;
    }
</style>