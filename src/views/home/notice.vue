<template>
    <div style="margin-top: 5%">
        <el-card shadow="always">
            <div class="itemTitle" slot="header">
                <span>通知公告</span>
            </div>
                <div v-for="item in noticeMsgList" :key="item">
                    <el-link style="font-size: 18px" @click="handleClick(item)">{{item.title}}</el-link>
                    <span class="notice-time">{{item.createTime.substr(0,10)}}</span>
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
                    this.noticeMsgList = res.data.records;
                }).catch( err =>{
                    this.$message.error("获取通知公告失败");
                })
            },
            handleClick(item){
                this.$router.push({
                    name: '通知公告详情',
                    params:{
                        unid:item.unid
                    }
                })
            }
        },
        created() {
            this.init();
        }
    }
</script>

<style lang="scss">
.notice-time{
    /*font-size: 14px;*/
    color: #8c939d;
    float: right;
}
</style>