<template>
  <div class="user_profile">
    <el-row>
      <el-col>
        <div class="profile_pic">
          <el-avatar :size="250" :fit="fill" :src="url" @error="handleError"></el-avatar>
        </div>
      </el-col>
    </el-row>
    <!--资料卡-->
    <deatail-info/>
  </div>
</template>
<script>
import DeatailInfo from "./deatailInfo";
export default {
  components: {DeatailInfo},
  data() {
    return {
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      imageUrl: ""
    };
  },
  methods: {
    //图片加载失败时的回调
    handleError(){
      return true;
    }
  }
};
</script>
<style lang="scss">
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