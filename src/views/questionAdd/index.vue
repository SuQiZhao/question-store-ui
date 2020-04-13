<template>
  <div>
    <el-row :gutter="30">
      <el-col :span="16">
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
          <el-form-item label="分类：" prop="category">
            <el-select v-model="form.value" placeholder="请选择分类">
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
            <el-input type="textarea" v-model="form.description"></el-input>
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
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
export default {
  name: "index",
  data() {
    return {
      form: {
        questionTitle: "",
        description: "",
        value: ""
      },
      rules: {
        questionTitle: [
          { required: true, message: "请输入题目标题", trigger: "blur" }
        ]
      },
      categoryOptions: DIC.QUESTION_CATEGORY
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    changeSelect() {
      console.log(this.form.value);
    },
    onSubmit() {},
    //重置表单
    resetForm() {
      this.$refs["form"].resetFields();
      this.$refs["addUpload"].clearFiles();
      this.$refs["addIpload"].abort();
      this.form.value = "";
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