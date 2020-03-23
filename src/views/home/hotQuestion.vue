<template>
    <div style="margin-top: 5%">
        <el-card shadow="hover">
            <div class="itemTitle" slot="header">
                <span>热门问题</span>
                <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
            </div>
            <el-card :key="i" shadow="never" v-for=" i in 10">
                <div class="itemTitle" slot="header">
                    <span>title</span>
                </div>
                <div class="text item">
                    热门内容
                </div>
            </el-card>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "hotQuestion"
    }
</script>

<style lang="scss">

</style>