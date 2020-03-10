<template>
    <div class="tiku_index">
        <div class="tiku_search">
            <span style="font-family: 微软雅黑">题 库 大 全</span><br/>
            <el-divider content-position="center" ><span style="color:#a5a5a5;font-family: 微软雅黑;font-size: 12px">EXAM CLASSIFICATION</span></el-divider>
            <div class="tiku_searchBar">
                <el-input  placeholder="请输入关键字搜索" style="width: 80%;margin-right: 5%"></el-input><el-button icon="el-icon-search" circle></el-button>
            </div>
        </div>
        <div class="tiku_classify">
            <el-row >
                <el-col :span="6">
                    <el-card class="box-card" shadow="hover">
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card" shadow="hover">
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card" shadow="hover">
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card" shadow="hover">
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row >
                <el-col :span="6">
                    <el-card class="box-card" shadow="hover">
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card" shadow="hover">
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card" shadow="hover">
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card" shadow="hover">
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    export default {};
</script>
<style lang="scss">
    .tiku_search{
        text-align: center;
        margin-left: 30%;
        margin-right: 30%;
        padding-top: 5%;
        padding-bottom: 5%;
    }
    .tiku_index{
        background-color: #ffffff;
    }
    .tiku_classify{
        padding: 2%;
    }
</style>