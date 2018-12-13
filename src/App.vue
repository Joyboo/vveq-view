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

  .el-header {
    padding: 0;
    height: 50px !important;
    z-index: 99;
  }

  .el-header, .el-footer {
    background-color: white;
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid #f6f6f6;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 5px 5px rgba(0, 0, 0, 0.075);
  }

  .el-aside {
    background-color: white;
    text-align: center;
    margin: 7px;
  }

  .el-main {
    background-color: white;
    text-align: center;
    line-height: 1000px;
    margin: 7px;
    border: 1px solid #eaeaea;
  }

  .el-footer {
    margin-top: 10px;
    padding: 0;
    height: auto !important;
  }

  .el-container {
    clear: both;
    margin-top: 10px;
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
