<template>
    <div class="user_profile">
        <el-row :gutter=0>
            <el-col :span=4>
                <div class="profile_pic">
                    <el-avatar :size="130" :src="url" @error="handleError" fit="fill" shape="square"></el-avatar>
                    <div style="text-align: center;margin-top: 10px">
                        <el-button @click="dialogVisible2 = true" round size="small" type="success" :disabled="changeProfile">更换头像</el-button>
                        <div class="upload_profilePic">
                            <el-dialog :visible.sync="dialogVisible2" title="上传头像" width="50%">
                                <el-form :model="picForm">
                                    <el-form-item ref="uploadElement">
                                        <el-upload
                                                :auto-upload="false"
                                                :before-upload="handleBeforeUpload"
                                                :class="{hide:hideUpload}"
                                                :limit="limitNum"
                                                :on-change="imgChange"
                                                :on-preview="handlePictureCardPreview"
                                                :on-remove="handleRemove"
                                                accept="image/png, image/gif, image/jpg, image/jpeg"
                                                action="#"
                                                list-type="picture-card"
                                                ref="upload"
                                        >
                                            <i class="el-icon-plus"></i>
                                        </el-upload>
                                        <el-dialog :visible.sync="dialogVisible">
                                            <img :src="dialogImageUrl" alt width="100%"/>
                                        </el-dialog>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button @click="uploadFile" size="small" type="primary">立即上传</el-button>
                                        <el-button @click="tocancel" size="small">取消</el-button>
                                    </el-form-item>
                                </el-form>
                            </el-dialog>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span=20 v-if="isShow2">
                <el-form ref="infoForm"
                         class="infoForm"
                         label-width="100px"
                         label-position="right"
                         v-loading="loading">
                    <el-form-item label="账号：">
                        {{infoForm.username}}
                    </el-form-item>
                    <el-form-item label="昵称：">
                        {{infoForm.nickname}}
                    </el-form-item>
                    <el-form-item label="电话号码：">
                        {{infoForm.telephone}}
                    </el-form-item>
                    <el-form-item label="邮箱：">
                        {{infoForm.email}}
                    </el-form-item>
                    <el-form-item label="学校：">
                        {{infoForm.collageName}}
                    </el-form-item>
                    <el-form-item label="地区：" prop="area">
                        {{infoForm.area}}
                    </el-form-item>
                    <el-form-item label="专业：">
                        {{infoForm.majorName}}
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="handleChange" type="text">立即修改</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span=20 v-if="isShow">
                <el-form ref="infoForm"
                         class="infoForm"
                         label-width="100px"
                         label-position="right"
                         v-loading="loading">
                    <el-form-item label="账号：">
                        <el-input v-model="infoForm.username" disabled="disable"></el-input>
                    </el-form-item>
                    <el-form-item label="昵称：">
                        <el-input v-model="infoForm.nickname" placeholder="请输入昵称" ></el-input>
                    </el-form-item>
                    <el-form-item label="电话号码：">
                        <el-input v-model="infoForm.telephone" placeholder="请输入电话号码"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱：">
                        <el-input v-model="infoForm.email" placeholder="请输入邮箱"></el-input>
                    </el-form-item>
                    <el-form-item label="学校：">
                        <el-select v-model="infoForm.collageName"
                                   :loading="selectLoading"
                                   placeholder="请输入学校名称"
                                   filterable
                                   remote
                                   :remote-method="searchData">
                            <el-option
                                    v-for="item in collageList"
                                    :key="item.collageName"
                                    :label="item.collageName"
                                    :value="item.collageName">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="地区：" prop="area">
                        <el-cascader
                                :options="options"
                                size="large"
                                placeholder="请选择地区"
                                style="width:100%"
                                v-model="infoForm.area">
                        </el-cascader>
                    </el-form-item>
                    <el-form-item label="专业：">
                        <el-input v-model="infoForm.majorName" placeholder="请输入专业"></el-input>
                    </el-form-item>
                    <el-form-item size="large">
                        <el-button type="primary" @click="handleSubmit">修改</el-button>
                        <el-button @click="goBack">返回</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <!--资料卡-->
<!--        <deatail-info/>-->
    </div>
</template>
<script>
    import {getCollageName} from "@/api/collageList";
    import {regionData} from 'element-china-area-data';
    import {getUser, getUserInfo_v1_1, updateUser} from "../../api/user";

    export default {
        // components: {DeatailInfo},
        data() {
            return {
                isShow2:true,
                isShow:false,
                changeProfile:'disable',
                loading:false,
                collageList:[],
                selectLoading:false,
                url:
                    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                imageUrl: "",
                hideUpload: false,
                dialogImageUrl: "",
                dialogVisible: false, //图片预览弹窗
                // formLabelWidth: "80px",
                limitNum: 1,
                picForm: {},
                dialogVisible2: false,//弹窗
                infoForm:{
                    username:'',
                    nickname:'',
                    area:'',
                    collageName: '',
                    majorName: '',
                    telephone: '',
                    email:''
                },
                options: regionData,
            };
        },
        methods: {
            handleChange(){
                this.isShow2 = false;
                this.isShow = true;
                this.changeProfile = false;
            },
            goBack(){
                this.init();
                this.isShow2 = true;
                this.isShow = false;
                this.changeProfile = true;
            },
            searchData(collageName){
                if (collageName != ''){
                    this.selectLoading = true;
                    getCollageName(collageName).then(res => {
                        if(res.code == 200){
                            this.collageList = res.data;
                            this.selectLoading = false;
                        }else {
                            this.$message.error("系统繁忙");
                        }
                    })
                }
            },
            //图片加载失败时的回调
            handleError() {
                return true;
            },
            tocancel() {
                this.dialogVisible2 = false;
            },
            // 上传文件之前的钩子
            handleBeforeUpload(file) {
                if (
                    !(
                        file.type === "image/png" ||
                        file.type === "image/gif" ||
                        file.type === "image/jpg" ||
                        file.type === "image/jpeg"
                    )
                ) {
                    this.$notify.warning({
                        title: "警告",
                        message:
                            "请上传格式为image/png, image/gif, image/jpg, image/jpeg的图片"
                    });
                }
                let size = file.size / 1024 / 1024 / 2;
                if (size > 2) {
                    this.$notify.warning({
                        title: "警告",
                        message: "图片大小必须小于2M"
                    });
                }
                let fd = new FormData(); //通过form数据格式来传
                fd.append("picFile", file); //传文件
                this.api({
                    url: "/test/up",
                    method: "post",
                    data: fd,
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then();
            },
            imgChange(files, fileList) {
                this.hideUpload = fileList.length >= this.limitNum;
                if (fileList) {
                    this.$refs.uploadElement.clearValidate();
                }
            },
            // 文件列表移除文件时的钩子
            handleRemove(file, fileList) {
                this.hideUpload = fileList.length >= this.limitNum;
            },
            // 点击文件列表中已上传的文件时的钩子
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            uploadFile() {
                this.$refs.upload.submit();
            },
            init(){
                this.loading = true;
                // getUserInfo_v1_1().then(res =>{
                //     if(res.code == 200){
                //         this.infoForm = res.data;
                //         this.loading = false;
                //     }else{
                //         this.$message.error("系统繁忙");
                //     }
                // })
                getUser(this.userInfo.cdId).then(res =>{
                    this.infoForm = res.data;
                    this.loading = false;
                })
            },
            handleSubmit(){
                this.$confirm('即将修改个人信息，是否继续？','提示',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type:'warning'
                }).then(() =>{
                    this.loading = true;
                    let params = {
                        cdId:this.userInfo.cdId,
                        password:this.userInfo.password,
                        collageName:this.infoForm.collageName,
                        userLevel:this.userInfo.userLevel,
                        deleteFlag:0,
                        username:this.userInfo.username,
                        nickname:this.infoForm.nickname,
                        area:this.infoForm.area,
                        majorName:this.infoForm.majorName,
                        telephone:this.infoForm.telephone,
                        email:this.infoForm.email
                    }
                    updateUser(params).then(res => {
                        if(res.code == 200){
                            this.$message.success(res.message);
                            this.loading = false;
                            this.goBack();
                        } else {
                            this.$message.error(res.message);
                            this.loading = false;
                        }
                    })
                })
            }
        },
        computed:{
          userInfo(){
              return this.$store.state.user.user;
          }
        },
        created() {
            this.init();
        }
    };
</script>
<style lang="scss">
    .user_profile{
        /*height: 550px;*/
    }
    .infoForm{
        padding-left: 5%;
        padding-right: 40%;
    }
    .upload_profilePic {
        text-align: center;
        margin-top: 20px;
    }

    .hide .el-upload--picture-card {
        display: none;
    }

    .profile_pic {
        text-align: center;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409eff;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>