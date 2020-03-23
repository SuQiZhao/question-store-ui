<template>
    <div class="side_search">
        <el-input placeholder="请输入内容" size="mini" v-model="input">
            <i class="el-input__icon el-icon-search" slot="prefix"></i>
        </el-input>
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