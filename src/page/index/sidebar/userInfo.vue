<template>
    <el-row class="menu_userinfo">
        <el-col>
            <div class="userinfo">
                <div class="userimg">
                    <el-avatar :fit="fill" :size="150" :src="url"></el-avatar>
                </div>
                <div class="user_detail">
                    <div>
                        <el-link :underline="false" class="detail">学号：XXXXXXXXXXXX</el-link>
                    </div>
                    <div>
                        <el-link :underline="false" class="detail">姓名：XXXX</el-link>
                    </div>
                    <div>
                        <el-link :underline="false" class="detail">学校：XXXXXXXXX</el-link>
                    </div>
                    <div>
                        <el-link :underline="false" class="detail">系部：XXXXXXXX</el-link>
                    </div>
                    <div>
                        <el-link :underline="false" class="detail">专业：XXXX</el-link>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        data() {
            return {
                url:
                    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            };
        }
    };
</script>
<style lang="scss">
    .user_detail {
        .detail {
            text-align: left;
            line-height: 10px;
            margin-top: 10%;
            margin-left: 10%;
        }
    }

    .userimg {
        text-align: center;
    }

    .menu_userinfo {
        background-color: #ffffff;
        margin: 10px;
        position: absolute;
        margin: 30px 0px;
    }
</style>