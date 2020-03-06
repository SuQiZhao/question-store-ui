<template>
<div class="top_dropdown">
    <el-dropdown>
        <el-button type="primary" size="mini" plain round>
            用户名<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>这里嵌套一个表格</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.top_dropdown{
    position: absolute;
    margin-left: 90%;
}
</style>