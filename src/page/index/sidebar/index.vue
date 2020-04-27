<template>
    <!--侧边栏-->
    <el-aside class="menu_aside" style="overflow:visible; width:18%;">
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
                        <i class="el-icon-house"></i>
                        <span slot="title">个人中心</span>
                    </el-menu-item>
                    <el-menu-item index="/myAnswser">
                        <i class="el-icon-edit"></i>
                        <span slot="title">我的提问</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-magic-stick"></i>
                        <span slot="title">我的回答</span>
                    </el-menu-item>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>个人设置</span>
                        </template>
                        <el-menu-item index="/usersetting">
                            <i class="el-icon-info"></i>个人资料设置
                        </el-menu-item>
                        <el-menu-item index="/changepwd">
                            <i class="el-icon-key"></i>密码修改
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="6" v-if="isShow">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>系统管理</span>
                        </template>
                        <el-menu-item index="/notice" >
                            <i class="el-icon-edit-outline"></i>通知公告
                        </el-menu-item>
                        <el-menu-item index="/">
                            <i class="el-icon-user"></i>账号管理
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
                isCollapse: true,
                isShow:false
            };
        },
        methods:{
            getUserLevel(){
                if(this.$store.state.user.user.userLevel == 2 || this.$store.state.user.user.userLevel == 3){
                    return this.isShow = true;
                }
            }
        },
        created() {
            this.getUserLevel();
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

    .menu_userinfo {
        background-color: #ffffff;
        margin: 10px;
        position: absolute;
        margin: 30px 0px;
    }
</style>