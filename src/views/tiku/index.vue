<template>
    <div class="tiku_index">
        <div class="tiku_search">
            <span style="font-family: 微软雅黑">题 库 大 全</span><br/>
            <el-divider content-position="center"><span style="color:#a5a5a5;font-family: 微软雅黑;font-size: 12px">EXAM CLASSIFICATION</span>
            </el-divider>
            <div class="tiku_searchBar">
                <el-input placeholder="请输入关键字搜索" style="width: 80%;margin-right: 5%"></el-input>
                <el-button circle icon="el-icon-search"></el-button>
            </div>
        </div>
        <div class="tiku_classify">
            <el-row class="tiku_icon_line1">
                <el-col :span=6>
                    <el-card class="box-card" shadow="hover">
                        <el-row>
                            <el-link :underline="false" href=""><i class="tk2-tplist-icon1"></i></el-link>
                        </el-row>
                        <span class="span_text">财经类题库</span>
                    </el-card>
                </el-col>
                <el-col :span=6>
                    <el-card class="box-card" shadow="hover">
                        <el-row>
                            <el-link :underline="false" href=""><i class="tk2-tplist-icon2"></i></el-link>
                        </el-row>
                        <span class="span_text">法律类题库</span>
                    </el-card>
                </el-col>
                <el-col :span=6>
                    <el-card class="box-card" shadow="hover">
                        <el-row>
                            <el-link :underline="false" href=""><i class="tk2-tplist-icon3"></i></el-link>
                        </el-row>
                        <span class="span_text">建筑类题库</span>
                    </el-card>
                </el-col>
                <el-col :span=6>
                    <el-card class="box-card" shadow="hover">
                        <el-row>
                            <el-link :underline="false" href=""><i class="tk2-tplist-icon4"></i></el-link>
                        </el-row>
                        <span class="span_text">外语类题库</span>
                    </el-card>
                </el-col>
            </el-row>
            <el-row class="tiku_icon_line2">
                <el-col :span="6">
                    <el-card class="box-card" shadow="hover">
                        <el-row>
                            <el-link :underline="false" href=""><i class="tk2-tplist-icon5"></i></el-link>
                        </el-row>
                        <span class="span_text">计算机类题库</span>
                    </el-card>
                </el-col>
                <el-col :span=6>
                    <el-card class="box-card" shadow="hover">
                        <el-row>
                            <el-link :underline="false" href=""><i class="tk2-tplist-icon6"></i></el-link>
                        </el-row>
                        <span class="span_text">资格类题库</span>
                    </el-card>
                </el-col>
                <el-col :span=6>
                    <el-card class="box-card" shadow="hover">
                        <el-row>
                            <el-link :underline="false" href=""><i class="tk2-tplist-icon7"></i></el-link>
                        </el-row>
                        <span class="span_text">知识问答题库</span>
                    </el-card>
                </el-col>
                <el-col :span=6>
                    <el-card class="box-card" shadow="hover">
                        <el-row>
                            <el-link :underline="false" href=""><i class="tk2-tplist-icon8"></i></el-link>
                        </el-row>
                        <span class="span_text">招录类题库</span>
                    </el-card>
                </el-col>
            </el-row>
            <el-row class="tiku_icon_line3">
                <el-col :span=6>
                    <el-card class="box-card" shadow="hover">
                        <el-row>
                            <el-link :underline="false" href=""><i class="tk2-tplist-icon9"></i></el-link>
                        </el-row>
                        <span class="span_text">外贸类题库</span>
                    </el-card>
                </el-col>
                <el-col :span=6>
                    <el-card class="box-card" shadow="hover">
                        <el-row>
                            <el-link :underline="false" href=""><i class="tk2-tplist-icon10"></i></el-link>
                        </el-row>
                        <span class="span_text">医学类题库</span>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    export default {};
</script>
<style lang="scss">
    .tiku_search {
        text-align: center;
        margin-left: 30%;
        margin-right: 30%;
        padding-top: 5%;
        padding-bottom: 5%;
    }

    .tiku_index {
        background-color: #ffffff;
    }

    .tiku_classify {
        padding: 2%;
    }

    .tk2-tplist-icon1 {
        background-image: url("../../assets/img/lzg-shouye-sasss.png");
        background-position: -117px -95px !important;
        height: 78px;
        width: 82px;
        margin-top: 40px;
        margin-bottom: 20px;
        display: inline-block;
        text-align: center;
    }

    .tk2-tplist-icon2 {
        background-image: url("../../assets/img/lzg-shouye-sasss.png");
        background-position: 6px -102px !important;
        height: 78px;
        width: 82px;
        margin-top: 40px;
        margin-bottom: 20px;
        display: inline-block;
    }

    .tk2-tplist-icon3 {
        background-image: url("../../assets/img/lzg-shouye-sasss.png");
        background-position: 0 -438px !important;
        height: 78px;
        width: 82px;
        margin-top: 40px;
        margin-bottom: 20px;
        display: inline-block;
    }

    .tk2-tplist-icon4 {
        background-image: url("../../assets/img/lzg-shouye-sasss.png");
        background-position: 0 -658px !important;
        height: 78px;
        width: 82px;
        margin-top: 40px;
        margin-bottom: 20px;
        display: inline-block;
    }

    .tk2-tplist-icon5 {
        background-image: url("../../assets/img/lzg-shouye-sasss.png");
        background-position: 0 -324px !important;
        height: 78px;
        width: 82px;
        margin-top: 40px;
        margin-bottom: 20px;
        display: inline-block;
    }

    .tk2-tplist-icon6 {
        background-image: url("../../assets/img/lzg-shouye-sasss.png");
        background-position: 0 -546px !important;
        height: 78px;
        width: 82px;
        margin-top: 40px;
        margin-bottom: 20px;
        display: inline-block;
    }

    .tk2-tplist-icon7 {
        background-image: url("../../assets/img/lzg-shouye-sasss.png");
        height: 78px;
        width: 82px;
        margin-top: 40px;
        margin-bottom: 20px;
        display: inline-block;
    }

    .tk2-tplist-icon8 {
        background-image: url("../../assets/img/lzg-shouye-sasss.png");
        background-position: 5px -770px !important;
        height: 78px;
        width: 82px;
        margin-top: 40px;
        margin-bottom: 20px;
        display: inline-block;
    }

    .tk2-tplist-icon9 {
        background-image: url("../../assets/img/lzg-shouye-sasss.png");
        background-position: -266px 0 !important;
        height: 78px;
        width: 82px;
        margin-top: 40px;
        margin-bottom: 20px;
        display: inline-block;
    }

    .tk2-tplist-icon10 {
        background-image: url("../../assets/img/lzg-shouye-sasss.png");
        background-position: 0 -880px !important;
        height: 78px;
        width: 82px;
        margin-top: 40px;
        margin-bottom: 20px;
        display: inline-block;
    }

    .box-card {
        text-align: center;
    }

    .span_text {
        font-size: 16px;
        letter-spacing: 4px;
        color: #323232;;
    }
</style>