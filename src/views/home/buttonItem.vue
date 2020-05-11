<template>
    <div class="btnBox">
        <el-card shadow="always">
            <div class="btnItem">
                <el-button icon="el-icon-edit-outline" style="height: 100px;width: 100%;font-size: 30px;" type="primary" @click="handleQuestionAdd">
                    发布
                </el-button>
<!--                <el-button icon="el-icon-magic-stick" style="height: 100px;width: 48%;float: right;font-size: 30px"-->
<!--                           type="primary" @click="handleAsk">解答-->
<!--                </el-button>-->
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "buttonItem",
        data(){
            return {

            }
        },
        methods:{
            handleQuestionAdd(){
                this.$router.push('/questionadd');
            },
            handleAsk(){
                this.$router.push('/questiondetail')
            }
        }
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