<template>
    <div class="side_search">
        <el-input placeholder="请输入题目标题" v-model="input">
            <i class="el-input__icon el-icon-search" slot="prefix"></i>
        </el-input>
        <el-button size="mini" type="primary">搜索</el-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: ""
            };
        }
    };
</script>
<style lang="scss">
</style>