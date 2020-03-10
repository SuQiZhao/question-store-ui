<template>
    <!--轮播图-->
    <div class="index_body">
        <carousel/>
        <div class="body_container">
        <el-row :gutter="30">
            <el-col :span="8">
                <div class="kaosizahinan">
                    <el-card class="box-card">
                        <div class="clearfix" slot="header">
                            <span>考试指南</span>
                            <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
                        </div>
                        <div :key="o" class="text item" v-for="o in 10">
                            <el-link :underline="false" style="font-size: 14px">{{'考试指南 ' + o }}</el-link>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="kaoshizixun">
                    <el-card class="box-card">
                        <div class="clearfix" slot="header">
                            <span>考试资讯</span>
                            <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
                        </div>
                        <div :key="o" class="text item" v-for="o in 10">
                            <el-link :underline="false" style="font-size: 14px">{{'考试资讯 ' + o }}</el-link>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
            <el-row :gutter="20" style="margin-top: 3%">
                <el-col :span="14">
                    <div class="kaoshishiti">
                        <el-card class="box-card">
                            <div class="clearfix" slot="header">
                                <span>考试试题</span>
                                <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
                            </div>
                            <div :key="o" class="text item" v-for="o in 10">
                                <el-link :underline="false" style="font-size: 14px">{{'考试试题 ' + o }}</el-link>
                            </div>
                        </el-card>
                    </div>
                </el-col>
                <el-col :span="10">
                    <div class="gonggaotongzhi">
                        <el-card class="box-card">
                            <div class="clearfix" slot="header">
                                <span>公告通知</span>
                                <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
                            </div>
                            <div :key="o" class="text item" v-for="o in 10">
                                <el-link :underline="false" style="font-size: 14px">{{'公告通知 ' + o }}</el-link>
                            </div>
                        </el-card>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import carousel from "./carousel";

    export default {
        name: "body",
        components: {carousel},
    }
</script>
<style lang="scss">
    .body_container {
        margin-top: 3%;
        padding-left: 5%;
        padding-right: 5%;
    }
</style>