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


  body {
    margin: 0;
    background-color: #E2E2E2;
  }

  * {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  a {
    color: #556;
    text-decoration: none;
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
