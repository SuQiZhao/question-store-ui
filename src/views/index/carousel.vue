<template>
    <div class="block">
        <el-carousel height="450px">
            <el-carousel-item v-for="item in imagesBox" :key="item.id">
                <img class="carouselImg" :src='item.url' height="100%" width="100%" alt/>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
    export default {
        name: "carousel",
        data() {
            return {
                imagesBox: [
                    {url: require("../../assets/img/carouselPic1.jpg"), id: '0'},
                    {url: require("../../assets/img/carouselPic2.jpg"), id: '1'},
                    {url: require("../../assets/img/carouselPic3.jpg"), id: '2'}
                ]
            }
        },
        methods: {}
    }
</script>
<style lang="scss">
</style>