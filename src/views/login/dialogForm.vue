<template>
    <el-dialog
            :before-close="modalClose"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :modal-append-to-body="false"
            :visible.sync="visible"
            class="registerDialog"
            title="用户注册"
            v-loading="loading"
    >
        <el-form :inline="true" label-position="left" :model="collageForm" >
            <el-form-item class="itemInputBox" label="地区：">
                <el-select placeholder="请选择" v-model="city">
                    <el-option
                            v-for="item in cityDataJson"
                            :key="item.id"
                            :label="item.name"
                            :value="item.name"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="itemInputBox" label="学校：">
                <el-select placeholder="请选择">
                    <el-option
                            v-for="item in universityDataJson"
                            :key="item.id"
                            :label="item.name"
                            :value="item.name"
                    ></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <!--分隔符-->
        <el-form :inline="false" :model="addUserForm" :rules="rules" label-position="left" ref="addUserForm">
            <el-form-item label="用户名：">
                <el-input
                        autocomplete="off"
                        class="inputBox"
                        prefix-icon="el-icon-user"
                        v-model="addUserForm.name"
                ></el-input>
            </el-form-item>
            <el-form-item label="邮箱：">
                <el-input
                        autocomplete="off"
                        class="inputBox"
                        prefix-icon="el-icon-message"
                        v-model="addUserForm.email"
                ></el-input>
            </el-form-item>
            <!-- <el-form-item label="手机号码：" class="itemInputBox" prop="telephone">
              <el-input
                v-model="form.telephone"
                autocomplete="off"
                class="inputBox"
                prefix-icon="el-icon-phone-outline"
              ></el-input>
            </el-form-item> -->
            <el-form-item label="密码：">
                <el-input
                        autocomplete="off"
                        class="inputBox"
                        prefix-icon="el-icon-key"
                        v-model="addUserForm.password"
                ></el-input>
            </el-form-item>
            <el-form-item label="确认密码：">
                <el-input
                        autocomplete="off"
                        class="inputBox"
                        prefix-icon="el-icon-key"
                        v-model="addUserForm.checkpass"
                ></el-input>
            </el-form-item>
        </el-form>
        <div class="dialog-footer" slot="footer">
            <el-button type="primary">注 册</el-button>
            <el-button>返 回</el-button>
        </div>
    </el-dialog>
</template>
<script>
    import collageData from '@/assets/json/collageData'
    export default {
        props: {
            visible: {
                type: Boolean,
                default: false
            }
        },
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.addUserForm.checkPass !== '') {
                        this.$refs.addUserForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.addUserForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                universityDataJson:[],
                cityDataJson:[],
                loading: false,
                dialogFormVisible: false,
                collageForm:{
                    collage:'',
                    city:''
                },
                addUserForm: {
                    name: '',
                    email: '',
                    password: '',
                    checkpass: '',
                },
                //规则校验
                rules: {
                    name: [
                        {required: true, message: "请输入姓名", trigger: "blur"},
                        {min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur"}
                    ],
                    email: [
                        {required: true, message: "请输入邮箱", trigger: "blur"}
                    ],
                    collage: [
                        {required: true, message: '请选择院系', trigger: 'change'}
                    ],
                    password: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur'}
                    ],
                },
                value: ""
            };
        },
        computed: {},
        methods: {
            modalClose() {
                this.$emit("update:visible", false); // 直接修改父组件的属性
            }
        },
        created() {
            //获取大学数据
            this.universityDataJson = collageData.university;
            //获取城市数据
            this.cityDataJson = collageData.zone;
            console.log(this.cityDataJson);
        }
    };
</script>
<style lang="scss">
    .itemInputBox{
    }
</style>