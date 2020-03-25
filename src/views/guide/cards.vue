<template>
    <div class="guide_category">
        <el-row class="guide_row">
            <el-col span=24>
                <el-card class="guide_box">
                    <div class="clearfix" slot="header">
                        <span style="font-size: 18px">财经类</span>
                    </div>
                    <el-row>
                        <el-col span=6>
                            <div class="single-guide-content">
                                <div class="subject-menu">
                                    <div class="subject-icon1">
                                        <div class="icon1"></div>
                                    </div>
                                    <div class="subject-menu-list">
                                        <el-row :gutter="20">
                                            <el-col span="12">
                                                <el-button plain size="">初级会计师</el-button>
                                            </el-col>
                                            <el-col span="12">
                                                <el-button plain size="">经济师</el-button>
                                            </el-col>
                                        </el-row>
                                        <el-row :gutter="20">
                                            <el-col span="12">
                                                <el-button plain size="">中级会计师</el-button>
                                            </el-col>
                                            <el-col span="12">
                                                <el-button plain size="">注册会计师</el-button>
                                            </el-col>
                                        </el-row>
                                        <el-row :gutter="20">
                                            <el-col span="12">
                                                <el-button plain size="">银行考试</el-button>
                                            </el-col>
                                            <el-col span="12">
                                                <el-button plain size="">保险考试</el-button>
                                            </el-col>
                                        </el-row>
                                        <el-row :gutter="20">
                                            <el-col span="12">
                                                <el-button plain size="">基金从业</el-button>
                                            </el-col>
                                            <el-col span="12">
                                                <el-button plain size="">期货从业</el-button>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col span="18">
                            <div class="guide-list">
                                <avue-data-card :option="option"></avue-data-card>
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
        <el-row class="guide_row">
            <el-col span="24">
                <el-card class="guide_box">
                    <div class="clearfix" slot="header">
                        <span style="font-size: 18px">建筑类</span>
                    </div>
                    <el-row>
                        <el-col span="6">
                            <div class="single-guide-content">
                                <div class="subject-menu">
                                    <div class="subject-icon2">
                                        <div class="icon2"></div>
                                    </div>
                                    <div class="subject-menu-list">
                                        <el-row :gutter="10">
                                            <el-col span="12">
                                                <el-button plain size="">二级建造师</el-button>
                                            </el-col>
                                            <el-col span="12">
                                                <el-button plain size="">建筑八大员</el-button>
                                            </el-col>
                                        </el-row>
                                        <el-row :gutter="10">
                                            <el-col span="12">
                                                <el-button plain size="">一级建造师</el-button>
                                            </el-col>
                                            <el-col span="12">
                                                <el-button plain size="">造价工程师</el-button>
                                            </el-col>
                                        </el-row>
                                        <el-row :gutter="10">
                                            <el-col span="12">
                                                <el-button plain size="">咨询工程师</el-button>
                                            </el-col>
                                            <el-col span="12">
                                                <el-button plain size="">监理工程师</el-button>
                                            </el-col>
                                        </el-row>
                                        <el-row :gutter="10">
                                            <el-col span="12">
                                                <el-button plain size="">电气工程师</el-button>
                                            </el-col>
                                            <el-col span="12">
                                                <el-button plain size="">结构工程师</el-button>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col span="18">
                            <div class="guide-list">
                                <avue-data-card :option="option1"></avue-data-card>
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "cards",
        data() {
            return {
                option: {
                    span: 6,
                    data: [
                        {
                            click: function (item) {
                                alert(JSON.stringify(item));
                            },
                            name: '经济师考试新手指南',
                            src: 'http://img.ppkao.com/Uploads/2018/7/08/Images/20180708111815514243000.png',
                            // text: '经济师考试新手指南',
                            href: 'https://avuejs.com',
                            target: '_blank'
                        },
                        {
                            click: function (item) {
                                alert(JSON.stringify(item));
                            },
                            name: '初级会计师考试指南',
                            src: 'http://img.ppkao.com/Uploads/2018/7/06/Images/20180706164559213940000.png',
                            // text: '初级会计师考试指南',
                            href: 'https://avuejs.com',
                            target: '_blank'
                        },
                        {
                            click: function (item) {
                                alert(JSON.stringify(item));
                            },
                            name: '注册会计师考试指南',
                            src: 'http://img.ppkao.com/Uploads/2018/7/08/Images/20180708094036709710000.png',
                            // text: '注册会计师考试指南',
                            href: 'https://avuejs.com',
                            target: '_blank'
                        },
                        {
                            click: function (item) {
                                alert(JSON.stringify(item));
                            },
                            name: '中级会计师考试指南',
                            src: 'http://img.ppkao.com/Uploads/2018/7/08/Images/20180708103031824456000.png',
                            // text: '注册会计师考试指南',
                            href: 'https://avuejs.com',
                            target: '_blank'
                        },
                    ]
                },
                option1: {
                    span: 6,
                    data: [
                        {
                            click: function (item) {
                                alert(JSON.stringify(item));
                            },
                            name: '八大员报考指南',
                            src: 'http://img.ppkao.com/Uploads/2018/7/06/Images/20180706085552704804000.png',
                            // text: '八大员报考指南',
                            href: 'https://avuejs.com',
                            target: '_blank'
                        },
                        {
                            click: function (item) {
                                alert(JSON.stringify(item));
                            },
                            name: '二级建造师新手考试指南',
                            src: 'http://img.ppkao.com/Uploads/2018/7/08/Images/20180708103515266289000.png',
                            // text: '二级建造师新手考试指南',
                            href: 'https://avuejs.com',
                            target: '_blank'
                        },
                        {
                            click: function (item) {
                                alert(JSON.stringify(item));
                            },
                            name: '一级建造师新手考试指南',
                            src: 'http://img.ppkao.com/Uploads/2018/7/06/Images/20180706174734108247000.png',
                            // text: '一级建造师新手考试指南',
                            href: 'https://avuejs.com',
                            target: '_blank'
                        },
                        {
                            click: function (item) {
                                alert(JSON.stringify(item));
                            },
                            name: '消防工程师考试指南',
                            src: 'http://img.ppkao.com/Uploads/2018/7/08/Images/20180708103603433473000.png',
                            // text: '消防工程师考试指南',
                            href: 'https://avuejs.com',
                            target: '_blank'
                        },
                    ]
                },
            }
        }
    }
</script>

<style lang="scss">
    .subject-menu {
        margin: 0px 0px 0px 20px;
        width: 260px;
        height: 334px;
        border: 1px solid #e4e4e4;
    }

    .subject-icon1 {
        width: 100%;
        background-color: #e36162;
        height: 110px;
        text-align: center;
        padding-top: 20px;

        .icon1 {
            height: 81px;
            width: 81px;
            background-image: url("../../assets/img/icon.png");
            background-repeat: no-repeat;
            background-position: 0px -94px;
            margin: 0 auto;
        }
    }

    .subject-icon2 {
        width: 100%;
        background-color: #ef466c;
        height: 110px;
        text-align: center;
        padding-top: 20px;

        .icon2 {
            height: 81px;
            width: 81px;
            background-image: url("../../assets/img/icon.png");
            background-repeat: no-repeat;
            background-position: 0 -262px;
            margin: 0 auto;
        }
    }

    .subject-menu-list {
        padding: 0 10px;
        height: 188px;

        .el-row {
            margin-top: 10px;
        }
    }

    .single-guide-content {
        display: flex;
    }

    .guide_category {
        .guide_row {
            margin-top: 2%;
        }
    }
</style>