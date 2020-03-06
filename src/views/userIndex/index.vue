<template>
  <div class="user_profile">
    <el-row>
      <el-col>
        <div class="profile_pic">
          <el-avatar :size="150" fit="fill" :src="url" @error="handleError"></el-avatar>
        </div>
      </el-col>
      <el-col>
        <div class="upload_profilePic">
          <el-button type="success" @click="dialogVisible2 = true" size="small" round>更换头像</el-button>
          <el-dialog title="上传头像" :visible.sync="dialogVisible2" width="30%">
            <el-form :model="picForm">
              <el-form-item ref="uploadElement">
                <el-upload
                  ref="upload"
                  action="#"
                  accept="image/png, image/gif, image/jpg, image/jpeg"
                  list-type="picture-card"
                  :limit="limitNum"
                  :auto-upload="false"
                  :before-upload="handleBeforeUpload"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :on-change="imgChange"
                  :class="{hide:hideUpload}"
                >
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt />
                </el-dialog>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="primary" @click="uploadFile">立即上传</el-button>
                <el-button size="small" @click="tocancel">取消</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
        </div>
      </el-col>
      <el-col>
        
      </el-col>
    </el-row>
    <!--资料卡-->
    <deatail-info />
  </div>
</template>
<script>
import DeatailInfo from "./deatailInfo";
export default {
  components: { DeatailInfo },
  data() {
    return {
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      imageUrl: "",
      hideUpload: false,
      dialogImageUrl: "",
      dialogVisible: false, //图片预览弹窗
      // formLabelWidth: "80px",
      limitNum: 1,
      picForm: {},
      dialogVisible2: false //弹窗
    };
  },
  methods: {
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
      console.log(fd.get("picFile"));
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
    }
  }
};
</script>
<style lang="scss">
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