<template>
    <div style="margin-top: 5%">
        <el-card shadow="always">
            <div class="itemTitle" slot="header">
                <span>通知公告</span>
            </div>
                <div>
                    <el-link type="danger" class="">ccccc</el-link>
                </div>
        </el-card>
    </div>
</template>

<script>
    import {getNoticeMsgPage} from "@/api/notice";

    export default {
        name: "hotQuestion",
        data(){
            return {
                noticeMsgList:[]
            }
        },
        methods:{
            // 数据初始化方法
            init(){
                getNoticeMsgPage().then( res =>{
                    console.log(res);
                    this.noticeMsgList = res.data;
                }).catch( err =>{
                    this.$message.error("获取通知公告失败");
                })
            }
        },
        created() {
            this.init();
        }
    }
</script>

<style lang="scss">

</style>