<template>
    <div>
        <el-row :gutter=20>
            <el-col :span=18>
                <el-card class="box-card" shadow="never">
                    <div slot="header" class="card-header">
                        <div class="infoHeader">
                            <span class="infoTitle">{{questionInfo.questionTitle}}</span>
                            <div class="infoAuther">
                                <span class="infoSpan">{{questionInfo.createUserIdentity}}</span>
                                <span class="infoSpan">发布于：{{questionInfo.createTime}}</span>
                                <span class="infoSpan">来自：{{questionInfo.questionCategory}}</span>
                            </div>
                        </div>

                    </div>
                    <div class="text item">
                        {{questionInfo.questionDetail}}
                    </div>
                </el-card>
                <el-card class="answser-box" shadow="never">
                    <div>
                        <el-input
                                type="textarea"
                                :rows="6"
                                placeholder="请输入内容"
                                v-model="textarea">
                        </el-input>
                        <div style="margin:20px 0 10px 0">
                            <el-button type="primary" size="small" @click="handleSubmit" :loading=btnLoading>回答</el-button>
                        </div>
                    </div>
                    <el-tabs @tab-click="handleClick">
                        <el-tab-pane label="全部回答">
                            <div>
                            <el-card class="box-card" v-for="item in answserData" :key="item" shadow="never">
                                <div slot="header" class="clearfix">
                                    <span>{{item.nickname}}</span>
                                </div>
                                <div class="text item">
                                    {{item.content}}
                                </div>
                            </el-card>
                            </div>
                        </el-tab-pane>
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
    import {getQuestionInfo} from '@/api/questionInfo';
    import {DIC} from '@/constant/dicConstant';
    import {addAnswser,findAnswserPage} from "@/api/questionAnswser";

    export default {
        name: "index",
        data(){
            return {
                questionInfo:[],
                textarea:'',
                category:DIC.QUESTION_CATEGORY,
                btnLoading:false,
                answserData:[]
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            },
            //标签回调方法
            handleClick(){

            },
            handleSubmit(){
                this.btnLoading = true;
                let params = {
                    questionId:this.questionInfo.cdId,
                    userId:this.$store.state.user.user.cdId,
                    userLevel:this.$store.state.user.user.userLevel,
                    nickname:this.$store.state.user.user.nickname,
                    content:this.textarea
                };
                addAnswser(params).then(res =>{
                    if(res.code == 200){
                        this.$message.success(res.message);
                        this.btnLoading = false;
                        this.textarea = '';
                        this.init();
                    }else{
                        this.btnLoading = false;
                        this.$message.error(res.message);
                    }
                }).catch(err =>{
                    return this.$message.error(err.data);
                })
            },
            init(){
                let cdId = this.$route.params.cdId;
                getQuestionInfo(cdId).then(res =>{
                    if(res.code == 200){
                        this.questionInfo = res.data;
                    }else {
                        this.$message.error(res.message);
                    }
                }).catch(err =>{
                    return this.$message.error(err.data);
                });
            },
            getAnswser(){
                let params = {
                    questionId: this.questionInfo.cdId
                };
                findAnswserPage(params).then(res => {
                    if(res.code == 200){
                        this.answserData = res.data;
                        console.log(res);
                    }else{
                        this.$message.error(res.message);
                    }
                })
            }
        },
        created() {
            this.init();
            this.getAnswser();
        },
        //获取user对象信息
        computed:{
            userInfo() {
                return this.$store.state.user.user;
            }
        }
    }
</script>

<style lang="scss">
    .answser-box{
        margin-top: 20px;
    }
    .infoTitle{
        font-size: 18px;
        font-weight: bold;
    }
    .infoAuther{
        float: right;
    }
    .infoSpan{
        font-size: 12px;
        color: #8c939d;
        /*float: right;*/
        margin-left: 20px;
    }
</style>