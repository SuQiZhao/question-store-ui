<template>
    <div class="btnBox">
        <el-card shadow="never">
            <div class="btnItem">
                <el-button icon="el-icon-edit" style="height: 100px;width: 48%;font-size: 30px" type="primary">提问
                </el-button>
                <el-button icon="el-icon-magic-stick" style="height: 100px;width: 48%;float: right;font-size: 30px"
                           type="primary">解答
                </el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "buttonItem"
    }
</script>

<style lang="scss">
    .btnItem {
        /*padding-left: 10%;*/
        /*padding-right: 10%;*/
    }

    .btnBox {
        margin-top: 10%;
    }
</style>