<template>
  <div>
    <el-row :gutter="30">
      <el-col :span="16">
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
          <el-form-item label="分类：" prop="categoryValue">
            <el-select v-model="form.categoryValue" placeholder="请选择分类">
              <el-option
                v-for="item in categoryOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                @change="changeSelect"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="标题：" prop="questionTitle">
            <el-input v-model="form.questionTitle"></el-input>
          </el-form-item>
          <el-form-item label="内容：" prop="description">
            <el-input type="textarea" v-model="form.questionDetail" :rows="8"></el-input>
          </el-form-item>
          <el-form-item label="附件：">
            <el-upload
              class="upload-demo"
              :drag="true"
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
              ref="addUpload"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
              </div>
              <div class="el-upload__tip" slot="tip">只能上传题库相关文件</div>
            </el-upload>
          </el-form-item>
          <el-form-item style="float:right">
            <el-button type="primary" @click="onSubmit" :loading="btnLoading">立即创建</el-button>
            <el-button type="primary" @click="resetForm" plain>重置</el-button>
            <el-button @click="goBack">取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" shadow="always">
          <div slot="header">
            <span style="font-size: 22px;">
              <i class="el-icon-warning-outline" style="color: #FF4500;margin-right: 10px;"></i>提问注意事项
            </span>
          </div>
          <div class="text_item">
            <p class="att_text">1、大家可以提出自己的疑问，阅读量越多的问题会越靠前</p>
            <p class="att_text">2、越详细的描述问题，可以帮助大家更加快速有效的回答问题</p>
            <p class="att_text">3、若标题与内容不符，或与问答无关的信息将会被重新编辑或删除。</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { DIC } from "@/constant/dicConstant";
import  { addQuestion} from "../../api/questionInfo";
import {getUserInfo_v1_1} from "../../api/user";

export default {
  name: "index",
  data() {
    return {
      form: {
        questionTitle: "",
        questionDetail: "",
        categoryValue: ""
      },
      rules: {
        questionTitle: [
          { required: true, message: "请输入题目标题", trigger: "blur" }
        ],
        categoryValue:[
          {
            required: true, message: "请选择题目分类" ,trigger: "change"
          }
        ]
      },
      categoryOptions: DIC.QUESTION_CATEGORY,
      currentdate:'',
      btnLoading:false
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    changeSelect() {
      console.log(this.form.value);
    },
    onSubmit() {
      this.btnLoading = true;
      if(this.form.categoryValue == null || this.form.categoryValue == ""){
        this.btnLoading = false;
        return this.$message.warning("分类不能为空");
      }
      if(this.form.questionTitle == null || this.form.questionTitle == ""){
        this.btnLoading = false;
        return this.$message.warning("标题不能为空");
      }
      this.createTime = new Date().toLocaleString();
      let questionInfo = {
        questionCategory: this.form.categoryValue,
        questionTitle: this.form.questionTitle,
        questionDetail: this.form.questionDetail,
        createUserIdentity: this.userInfo.user.cdId,
        deleteFlag:0,
        reading:0
      }
      console.log(questionInfo);
      addQuestion(questionInfo).then( res =>{
        if( res.code != 200){
          this.$message.error(res.message);
          return this.btnLoading = false;
        }
        this.$message.success(res.message);
        this.$router.push('/home');
        return this.btnLoading = false;
      }).catch( err =>{
        this.$message.error(err.data);
        this.btnLoading = false;
      })
    },
    //重置表单
    resetForm() {
      this.$refs["form"].resetFields();
      this.$refs["addUpload"].clearFiles();
      this.$refs["addIpload"].abort();
      this.form.categoryValue = "";
    },
  },
  //获取user对象信息
  computed:{
    userInfo() {
      return this.$store.state.user;
    }
  }
};
</script>

<style lang="scss">
.att_text {
  font-size: 14px;
  color: #8c939d;
}
</style>