<template>
    <div>
        <el-row :gutter=20>
            <el-col :span=18>
                <el-card class="box-card" shadow="never">
                    <div slot="header">
                        <span>title</span>
                    </div>
                    <div class="text item">
                        列表内容
                    </div>
                </el-card>
                <el-card class="answser-box" shadow="never">
                    <el-tabs @tab-click="handleClick">
                        <el-tab-pane label="全部回答">全部回答</el-tab-pane>
                        <el-tab-pane label="精选回答">精选回答</el-tab-pane>
                        <el-tab-pane label="教师回答">教师回答</el-tab-pane>
                    </el-tabs>
                </el-card>
            </el-col>
            <el-col :span=6>
                <el-card class="box-card" shadow="never">
                    <div slot="header">
                        <strong style="font-size: 18px">相关问题</strong>
                    </div>
                    <div class="text item">
                        列表内容
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            },
            //标签回调方法
            handleClick(){

            }
        }
    }
</script>

<style lang="scss">
.answser-box{
    margin-top: 30px;
}
</style>