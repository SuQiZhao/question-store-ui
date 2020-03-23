<template>
    <div class="user_detailinfo">
        <el-form :model="userdetailform" :rules="rules" label-position="left" label-width="80px">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="userdetailform.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="telephone">
                <el-input v-model="userdetailform.telephone"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="userdetailform.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="生日" prop="birthday" v-model="userdetailform.birthday">
                <el-date-picker
                        placeholder="选择日期"
                        type="date"
                        v-model="userdetailform.birthday">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="地区" prop="area" v-model="userdetailform.area">
                <el-cascader
                        :options="options"
                        @change="handleChange"
                        size="large"
                        style="width:100%" v-model="selectedOptions">
                </el-cascader>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {regionData} from 'element-china-area-data';

    export default {
        name: "deatailInfo",
        data() {
            return {
                userdetailform: {
                    name: '',
                    telephone: '',
                    type: '',
                    sex: '',
                    birthday: '',
                    area: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    telephone: [
                        {required: true, message: '请输入手机号', trigger: 'blur'},
                        {
                            pattern: /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/,
                            message: '请输入正确的手机号',
                            trigger: 'blur'
                        }
                    ],
                    sex: [
                        {required: true, message: '请选择性别', trigger: 'change'}
                    ],
                    birthday: [
                        {type: 'date', required: true, message: '请选择出生日期', trigger: 'change'}
                    ],
                    area: [
                        {required: true, message: '请选择地区', trigger: 'change'}
                    ]
                },
                options: regionData,
                selectedOptions: []
            }
        }
    }
</script>

<style scoped>
    .user_detailinfo {
        width: 25%;
        margin-left: 35%;
        margin-top: 50px;
    }
</style>