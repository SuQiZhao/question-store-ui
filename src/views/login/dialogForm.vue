<template>
    <el-dialog
            title="用户注册"
            :modal-append-to-body="false"
            :close-on-click-modal="false"
            v-loading="loading"
            :visible.sync="visible"
            :before-close="modalClose"
            :close-on-press-escape="false"
            class="registerDialog"
    >
        <el-form :model="addUserForm" ref="addUserForm" :rules="rules" :inline="true" label-position="left">
            <el-form-item label="院系：" class="itemInputBox">
                <el-select v-model="value" placeholder="请选择" prop="collage">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="专业：" class="itemInputBox">
                <el-select v-model="value" placeholder="请选择" prop="grade">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="年级：" class="itemInputBox">
                <el-select v-model="value" placeholder="请选择" prop="collage">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="班级：" class="itemInputBox">
                <el-select v-model="value" placeholder="请选择" prop="collage">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="姓名：" class="itemInputBox" prop="name">
                <el-input
                        v-model="addUserForm.name"
                        autocomplete="off"
                        class="inputBox"
                        prefix-icon="el-icon-user"
                ></el-input>
            </el-form-item>
            <el-form-item label="邮箱：" class="itemInputBox" prop="email">
                <el-input
                        v-model="addUserForm.email"
                        autocomplete="off"
                        class="inputBox"
                        prefix-icon="el-icon-message"
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
            <el-form-item label="密码：" class="itemInputBox" porp="password">
                <el-input
                        v-model="addUserForm.password"
                        autocomplete="off"
                        class="inputBox"
                        prefix-icon="el-icon-key"
                ></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" class="itemInputBox" porp="checkpass">
                <el-input
                        v-model="addUserForm.checkpass"
                        autocomplete="off"
                        class="inputBox"
                        prefix-icon="el-icon-key"
                ></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
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