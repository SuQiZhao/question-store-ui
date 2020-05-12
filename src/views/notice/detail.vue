<template>
    <div>
    <div style="text-align:center;width: 100%;margin-top: 18px">
        <h3 style="font-size: 24px;color: #333333">{{noticeInfo.title}}</h3>
        <span span style="font-size: 14px;color: #666666;margin-top: 16px;margin-right: 20px">编辑：{{noticeInfo.createdUsername}}</span>
        <span style="font-size: 14px;color: #666666;margin-top: 16px">发布日期：{{noticeInfo.createTime}}</span>
    </div>
    <div class="content">
        <div v-html="noticeInfo.content" style="margin-left: 20px;"></div>
    </div>
    </div>
</template>

<script>
    import {getNotice} from "../../api/notice";

    export default {
        name: "detail",
        data(){
            return {
                noticeInfo:{}
            }
        },
        methods:{
            init(){
                let unid = this.$route.params.unid;
                getNotice(unid).then(res =>{
                    if (res.code == 200){
                        this.noticeInfo = res.data;
                    }
                })
            }
        },
        mounted() {

        },
        created() {
            this.init();
        }
    }
</script>

<style scoped>

</style>