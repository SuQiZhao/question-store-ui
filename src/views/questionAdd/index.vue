<template>
    <div>
        <el-row :gutter=30>
            <el-col :span=16>
                <el-form ref="form" :model="form" label-width="80px" :rules="rules">
                    <el-form-item label="标题" prop="questionTitle">
                        <el-input v-model="form.questionTitle"></el-input>
                    </el-form-item>
                    <el-form-item label="内容" prop="description">
                        <el-input type="textarea" v-model="form.description"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button @click="goBack">取消</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span=8>
                <el-card class="box-card" shadow="always">
                    <div slot="header">
                        <span style="font-size: 22px;"><i class="el-icon-warning-outline" style="color: #FF4500;margin-right: 10px;"></i>提问注意事项</span>
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
    export default {
        name: "index",
        data() {
            return {
                form: {
                    questionTitle: '',
                    description:''
                },
                rules: {
                    questionTitle: [
                        { required: true, message: '请输入题目标题', trigger: 'blur' },
                    ]
                }
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="scss">
.att_text{
    font-size: 14px;
    color: #8c939d;
}
</style>