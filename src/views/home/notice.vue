<template>
    <div style="margin-top: 5%">
        <el-card shadow="always">
            <div class="itemTitle" slot="header">
                <span>通知公告</span>
            </div>
                <div v-for="item in noticeMsgList" :key="item">
                    <el-link type="danger" style="font-size: 18px">{{item.title}}</el-link>
                </div>
        </el-card>
    </div>
</template>

<script>
    import {findNoticePage} from "@/api/notice";

    export default {
        name: "notice",
        data(){
            return {
                noticeMsgList:[]
            }
        },
        methods:{
            // 数据初始化方法
            init(){
                findNoticePage().then( res =>{
                    console.log(res);
                    this.noticeMsgList = res.data.records;
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