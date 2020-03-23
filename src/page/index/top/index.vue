<template>
    <!--顶部-->
    <el-header class="home_header" style="height:10%">
        <div class="logo_img">
            <img alt height="100%" src="../../../assets/img/logo.png"/>
        </div>
        <topDropdown/>
        <!--    <searchBar />-->
    </el-header>
</template>
<script>
    // import searchBar from "./top-searchBar";
    import topDropdown from "./top-dropdown";

    export default {
        components: {
            // searchBar,
            topDropdown
        }
    };
</script>
<style lang="scss">
    .home_header {
        border-bottom: 1px solid #e9e9e9;
        background-color: #fff;
        color: #333;
        float: left;
    }

    .logo_img {
        height: 100%;
        float: left;
    }
</style>