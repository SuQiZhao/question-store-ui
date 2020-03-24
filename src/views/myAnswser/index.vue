<template>
    <div>
        <el-row>
            <el-col :span=24 style="margin-bottom: 2%">
                <el-checkbox-group size="medium" v-model="checkboxGroup2">
                    <el-checkbox-button :key="city" :label="city" v-for="city in cities">{{city}}</el-checkbox-button>
                </el-checkbox-group>
            </el-col>
        </el-row>
        <el-row class="">
            <el-col :span=24>
                <div class="avue_panel">
                    <el-form :inline="true" class="demo-form-inline">
                        <el-form-item label="标题名称：">
                            <el-input placeholder="请输入标题名称" v-model="search.title"></el-input>
                        </el-form-item>
                        <el-form-item label="提问人：">
                            <el-input placeholder="请输入提问人" v-model="search.askUser"></el-input>
                        </el-form-item>
                        <el-form-item label="状态：">
                            <el-select placeholder="请选择提问状态" v-model="search.askStatus">
                                <el-option :key="item.value" :label="item.label" :value="item.value"
                                           v-for="item in askStatusArray">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="发布时间：">
                            <el-date-picker
                                    :picker-options="pickerOption"
                                    align="right"
                                    end-placeholder="结束日期"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    type="daterange"
                                    unlink-panels
                                    v-if="menuOpen"
                                    v-model="search.rangeDate">
                            </el-date-picker>
                            <span @click="menuOpen = !menuOpen" class="menuShowHide">
                                    {{ menuOpen ? "收起" : "展开" }}&nbsp;
                                    <i
                                            :class="
											menuOpen
												? 'el-icon-arrow-up'
												: 'el-icon-arrow-down'
										"
                                    ></i>
                                </span>
                        </el-form-item>
                        <el-form-item>
                            <el-button @click="searchData" type="primary">查询</el-button>
                            <el-button @click="resetForm">重置</el-button>
                        </el-form-item>
                    </el-form>
                    <avue-crud :data="data" :option="option" @search-change="searchChange" v-model="obj" :table-loading="loading">
                        <!-- 置空提示-->
                        <template slot="empty">
                            <avue-empty
                                    desc="暂无数据"
                                    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original">
                                <el-button type="primary">点击添加</el-button>
                            </avue-empty>
                        </template>
                    </avue-crud>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import option from "./option";
    import {DIC} from "../../constant/dicConstant";
    import pickerOptions from "./pickerOptions";

    const cityOptions = ['财经类', '法律类', '建筑类', '外语类', '计算机类', '资格类', '知识问答', '招录类', '外贸类', '医学类'];
    export default {
        name: "index",
        data() {
            return {
                //默认选项
                checkboxGroup2: ['财经类', '法律类', '建筑类', '外语类', '计算机类', '资格类', '知识问答', '招录类', '外贸类', '医学类'],
                cities: cityOptions,
                obj: {},
                data: [],
                option: option,
                askStatusArray: DIC.ASK_STATUS,
                search: {
                    title: "",
                    askUser: "",
                    askStatus: ""
                },
                pickerOption: pickerOptions,
                menuOpen: false,
                page: {
                    pageSizes: [10, 20, 30, 40],
                    currentPage: 1,
                    total: 0,
                    pageSize: 10
                },
                //动态加载
                loading:false,
            }
        },
        methods: {
            searchChange(params, done) {
                done();
                this.$message.success(JSON.stringify(params));
            },
            resetForm() {
                //重置方法
                this.search = Object.assign(
                    {},
                    {
                        clueSource: "",
                        areaCode: "",
                        pushStatus: "",
                        rangeTime: [],
                        clueName: ""
                    }
                ),
                    this.searchData();
            },
            searchData(){
                //搜索及初始化方法
                this.loading = true;
            }
        }
    }
</script>

<style lang="scss">
    .avue_panel {
        /*margin-top: 3%;*/
        position: relative;
        padding-top: 2%;
        border-top: 1px solid #e3e3e3;
    }

    .demo-form-inline {
        .el-form-item {
            margin-left: 20px;

            .el-input {
                width: 220px;
            }
        }
    }

    .menuShowHide {
        margin-left: 10px;
        color: #097ce3;
        cursor: pointer;
    }
</style>