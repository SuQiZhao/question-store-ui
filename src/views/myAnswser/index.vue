<template>
    <div>
        <el-row>
            <el-col :span=24>
                <el-checkbox-group v-model="checkboxGroup2" size="medium">
                    <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                </el-checkbox-group>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    const cityOptions = ['上海', '北京', '广州', '深圳'];
    export default {
        name: "index",
        data() {
            return {
                //默认选项
                checkboxGroup2: [],
                cities: cityOptions,
            }
        }
    }
</script>

<style lang="scss">
</style>