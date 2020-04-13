<template>
    <div class="index_main">
        <el-container direction="vertical" style="height:100%">
            <!--顶部-->
            <top :userInfo="userInfo" ref="top_dropdown"/>
            <el-container>
                <!--侧栏-->
                <sidebar/>
                <!--主窗体-->
                <el-main class="index_main">
                    <el-card class="box-card" shadow="never">
                        <div class="clearfix" slot="header">
                            <!--面包屑-->
                            <breathcrumb/>
                            <!--              <el-button style="float: right;margin-top:-21px" size="mini">返回</el-button>-->
                        </div>
                        <!--登录主页-->
                        <div class="home">
                            <!--<router-view> 定义显示部分，就是点击后，区配的内容显示在什么地方，会被匹配到的组件替换掉-->
                            <router-view></router-view>
                            <!-- <homeIndex /> -->
                        </div>
                    </el-card>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    import top from "./top/index.vue";
    import sidebar from "./sidebar";
    import breathcrumb from "./breathcrumb";
    import {getUserInfo_v1_1} from "../../api/user";

    export default {
        components: {
            top,
            sidebar,
            breathcrumb
        },
        data() {
            return {
                data: [],
                userInfo: [],
                id: ''
            }
        },
        methods: {
            init() {
                // 获取token
                window.sessionStorage.getItem("token");
                getUserInfo_v1_1().then(res => {
                    this.userInfo = res.data;
                    return this.$store.commit('$_setStorage', {user: this.userInfo});
                }).catch(err => {
                    return this.$message.error(err.data);
                })
            }
        },
        created() {
            this.init();
        }
    };
</script>
<style lang="scss">
    .index_main {
        /*设置内部填充为0，几个布局元素之间没有间距*/
        padding: 0px;
        /*外部间距也是如此设置*/
        margin: 0px;
        /*统一设置高度为100%*/
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
</style>