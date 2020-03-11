<template>
    <div class="guide_body">
        <div class="guide_img">
            <img src="../../assets/img/banner-left.png"/>
            <img src="../../assets/img/guide.png"/>
            <img src="../../assets/img/banner-right.png"/>
        </div>
        <!--        <div class="guide_classify">-->
        <cards/>
        <!--        </div>-->
    </div>
</template>
<script>
    import cards from "./cards";

    export default {
        components: {cards}
    };
</script>
<style lang="scss">
    .guide_img {
        //水平对置
        display: flex;
        overflow-x: hidden;
    }

    .guide_classify {
        /*margin-top: 2%;*/
        margin-left: 12%;
        margin-right: 12%;
    }
</style>