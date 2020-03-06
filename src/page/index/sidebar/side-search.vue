<template>
  <div class="side_search">
    <el-input placeholder="请输入内容" v-model="input">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>
<style lang="scss">
</style>