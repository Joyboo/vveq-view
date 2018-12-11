<template>
    <router-view/>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  body {
    margin: 0;
    background-color: #E2E2E2;
  }
  /* head搜索框 */
  .head-search .el-input__inner {
    border-radius: 25px;
  }
  .el-input-group__append {
    background-color: #409EFF;
    border: 1px solid #409EFF;
    color: white;
  }
</style>
