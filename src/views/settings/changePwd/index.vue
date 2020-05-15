<template>
    <div class="demo-ruleForm">
        <el-form :model="ruleForm" :rules="rules" label-position="left" label-width="100px"
                 ref="ruleForm">
            <el-form-item>
                <span style="font-size: 28px;letter-spacing: 2px;">密码修改</span>
            </el-form-item>
            <el-form-item label="原密码" prop="oldPassword">
                <el-input autocomplete="off" type="password" v-model="ruleForm.oldPassword"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="password">
                <el-input autocomplete="off" type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input autocomplete="off" type="password" v-model="ruleForm.checkPass"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="submitForm" type="primary">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import {getUserInfo_v1_1, updateUser} from "../../../api/user";

    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            var validatePass3 = (rule,value,callback) => {
                if (value === ''){
                    callback(new Error('请输入原密码'));
                } else if (value !== this.userInfo.password) {
                    callback(new Error('原密码错误！'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    password: '',
                    checkPass: '',
                    oldPassword:''
                },
                rules: {
                    password: [
                        {validator: validatePass, trigger: 'blur',required:true}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur',required:true}
                    ],
                    oldPassword: [
                        {validator: validatePass3, trigger: 'blur',required:true}
                    ]
                },
                dialogVisible: false,
                userInfo:{}
            };
        },
        methods: {
            submitForm() {
                this.$confirm('确认修改密码，是否继续？','提示',{
                    type:"warning"
                }).then(() =>{
                    if(this.userInfo.password == this.ruleForm.checkPass){
                        this.$message.error("原密码与新密码不能一致");
                        return this.resetForm('ruleForm');
                    }
                    if(this.ruleForm.checkPass != this.ruleForm.password){
                        this.message.errors("两次输入密码不一致");
                        return this.resetForm('ruleForm');
                    }
                    if(this.ruleForm.oldPassword != this.userInfo.password){
                        this.message.errors("原密码错误");
                        return this.resetForm('ruleForm');
                    }
                    this.userInfo.password = this.ruleForm.checkPass;
                    updateUser(this.userInfo).then( res=>{
                        if (res.code != 200){
                            return this.$message.error(res.message);
                        }
                        this.$message.success("密码修改成功");
                        return this.resetForm('ruleForm');
                    })
                })
            },
            //重置表单
            resetForm(formName) {
                this.$refs[formName].resetFields();
                return this.$router.go(0);
            },
            init(){
                window.sessionStorage.getItem("token");
                //获取user对象信息
                getUserInfo_v1_1().then(res=>{
                    if(res.code != 200){
                        return this.$message.error("系统繁忙");
                    }
                    this.userInfo = res.data;
                }).catch(err=>{
                    this.$message.error(err);
                })
            }
        },
        created() {
            this.init();
        }
    }
</script>
<style lang="scss">
    .demo-ruleForm {
        width: 25%;
        text-align: center;
        margin-left: 30%;
    }
</style>