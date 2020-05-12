<template>
    <div>
        <el-row :gutter=30>
            <el-col :span=16>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="标题：" prop="title">
                        <el-input v-model="form.title"></el-input>
                    </el-form-item>
                    <el-form-item label="内容：" prop="content">
                        <el-input type="textarea" v-model="form.content" :rows="8"></el-input>
                    </el-form-item>
                    <el-form-item label="附件：">
                        <el-upload
                                class="upload-demo"
                                :drag="true"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                multiple
                                ref="addUpload"
                                v-model="form.upload"
                        >
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">
                                将文件拖到此处，或
                                <em>点击上传</em>
                            </div>
                            <div class="el-upload__tip" slot="tip">只能上传通知公告相关文件</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item style="float:right">
                        <el-button type="primary" @click="onSubmit" :loading="btnLoading">立即创建</el-button>
                        <el-button type="primary" @click="resetForm('form')" plain>重置</el-button>
                        <el-button @click="goBack">取消</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="8">
                <el-card class="box-card" shadow="always">
                    <div slot="header">
            <span style="font-size: 22px;">
              <i class="el-icon-warning-outline" style="color: #FF4500;margin-right: 10px;"></i>注意事项
            </span>
                    </div>
                    <div class="text_item">
                        <p class="att_text">1、这里可以发布通知公告</p>
                        <p class="att_text">2、通知公告可以帮助大家更加快速有效地了解信息</p>
                        <p class="att_text">3、若标题与内容不符，或与系统无关的信息将会被重新编辑或删除。</p>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {addNotice} from "../../api/notice";

    export default {
        name: "index",
        data(){
            return {
                form:{
                    title:'',
                    content:'',
                    upload:''
                },
                btnLoading:false,
            }
        },
        methods:{
            resetForm(formName){
                this.$refs[formName].resetFields();
            },
            goBack(){
                this.$router.go(-1);
            },
            onSubmit(){
                this.btnLoading = true;
                let param = {
                    createdUserId:this.userInfo.cdId,
                    createdUsername:this.userInfo.nickname,
                    deleteFlag:0,
                    title:this.form.title,
                    content:this.form.content
                };
                addNotice(param).then(res =>{
                    if (res.code == 200){
                        this.btnLoading = false;
                        this.$message.success(res.message);
                        return this.$router.push('/notice');
                    }else{
                        this.btnLoading = false;
                        this.$message.error(res.message);
                    }
                }).catch(err =>{
                    this.btnLoading = false;
                    this.$message.error(err.data);
                })
            }
        },
        computed:{
            userInfo(){
                return this.$store.state.user.user;
            }
        },
    }
</script>

<style lang="scss">

</style>