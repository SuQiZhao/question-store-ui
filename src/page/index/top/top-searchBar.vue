<template>
    <div class="top_search">
        <el-input placeholder="请输入内容" v-model="input">
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
    .top_search {
        position: absolute;
        width: 300px;
        margin-top: -3%;
        margin-left: 15%;
    }
</style>