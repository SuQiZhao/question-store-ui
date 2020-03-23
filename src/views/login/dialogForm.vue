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
        <el-form :inline="true" :model="addUserForm" :rules="rules" label-position="left" ref="addUserForm">
            <el-form-item class="itemInputBox" label="院系：">
                <el-select placeholder="请选择" prop="collage" v-model="value">
                    <el-option
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            v-for="item in options"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="itemInputBox" label="专业：">
                <el-select placeholder="请选择" prop="grade" v-model="value">
                    <el-option
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            v-for="item in options"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="itemInputBox" label="年级：">
                <el-select placeholder="请选择" prop="collage" v-model="value">
                    <el-option
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            v-for="item in options"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="itemInputBox" label="班级：">
                <el-select placeholder="请选择" prop="collage" v-model="value">
                    <el-option
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            v-for="item in options"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="itemInputBox" label="姓名：" prop="name">
                <el-input
                        autocomplete="off"
                        class="inputBox"
                        prefix-icon="el-icon-user"
                        v-model="addUserForm.name"
                ></el-input>
            </el-form-item>
            <el-form-item class="itemInputBox" label="邮箱：" prop="email">
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
            <el-form-item class="itemInputBox" label="密码：" porp="password">
                <el-input
                        autocomplete="off"
                        class="inputBox"
                        prefix-icon="el-icon-key"
                        v-model="addUserForm.password"
                ></el-input>
            </el-form-item>
            <el-form-item class="itemInputBox" label="确认密码：" porp="checkpass">
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
                loading: false,
                dialogFormVisible: false,
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
                options: [
                    {
                        value: "选项1",
                        label: "黄金糕"
                    },
                    {
                        value: "选项2",
                        label: "双皮奶"
                    },
                    {
                        value: "选项3",
                        label: "蚵仔煎"
                    },
                    {
                        value: "选项4",
                        label: "龙须面"
                    },
                    {
                        value: "选项5",
                        label: "北京烤鸭"
                    }
                ],
                value: ""
            };
        },
        computed: {},
        methods: {
            modalClose() {
                this.$emit("update:visible", false); // 直接修改父组件的属性
            }
        }
    };
</script>
<style lang="scss">
    .el-select {
        float: left;
    }

    .itemInputBox {
        margin-top: 20px;
        // .inputBox {
        //   float: left;
        //   width: 300px !important;
        // }
    }
</style>