<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
    <el-breadcrumb-item v-for="(item, index) in breadList" :key="index" :to="item.path">
      {{
      item.name
      }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  data() {
    return {
      breadList: []
    };
  },
  methods: {
    getBreadList(val) {
      // 过滤路由matched对象
      if (val.matched) {
        let matched = val.matched.filter(item => item.name);
        // 拿到过滤好的路由v-for遍历出来
        this.breadList = matched;
      }
    }
  },
  watch: {
    // 监听路由
    $route(val) {
      // 调用获取路由数组方法
      this.getBreadList(val);
    }
  }
};
</script>
<style lang="scss">
</style>