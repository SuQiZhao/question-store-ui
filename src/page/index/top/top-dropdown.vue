<template>
    <div class="top_dropdown">
        <el-dropdown :hide-on-click="false">
            <div>
                <el-button type="primary" size="small" plain round>
                    <el-avatar :size="10" fit="scale-down" :src="url" @error="handleError"></el-avatar>
                    专业名 | 用户名
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
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
                url:
                    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
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