<template>
    <div class="top_dropdown">
        <el-dropdown :hide-on-click="false">
            <div>
                专业名 | 用户名
                <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>这里嵌套一个用户信息表格</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            };
        },
        methods: {
            handleError() {
                return true;
            }
        }
    };
</script>
<style lang="scss">
    .top_dropdown {
        position: absolute;
        margin-left: 85%;
    }
</style>