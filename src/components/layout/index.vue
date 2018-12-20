<template>
  <div id="app">
    <el-container>

      <!--头部-->
      <el-header>
        <slot name="layouthead">
          <layouthead></layouthead>
        </slot>
      </el-header>

      <el-container>
        <div class="index-container">

          <!--body-->
          <div id="index-body">
            <slot name="layoutbody"></slot>
          </div>

          <!--右侧边栏-->
          <div id="right-body">
            <slot name="layoutright"></slot>
          </div>
        </div>
      </el-container>

      <el-footer>
        <slot name="layoutfooter">
          <layoutfooter>
            <slot name="backTop"></slot>
          </layoutfooter>
        </slot>
      </el-footer>

    </el-container>
  </div>
</template>

<script>

  import layouthead from "./head"
  import layoutfooter from "./footer"

  export default {
    name: "layoutindex",
    components: {
      layouthead,
      layoutfooter,
    }
  }
</script>

<style scoped>

  /*body分页*/
  #body-pages .el-pager li, #body-pages button {
    background: #fff;
    margin: 0;
    border: 1px solid #dddddd;
    border-radius: 0px;
    color: #409EFF;
  }

  #body-pages .el-pager .active {
    background: #f5f5f5;
    border: 1px solid #dddddd;
    color: #999999;
  }

  /* 移动端 */
  @media only screen and (max-width: 1199px) {
    .index-container {
      width: 100%;
      margin: 0 auto;
    }

    #index-body {
      width: 100%;
    }

    #right-body {
      width: 100%;
    }
  }

  /* pc端(小屏) */
  @media only screen and (min-width: 1200px) {
    .index-container {
      width: 80%;
      margin: 0 auto;
    }

    #index-body {
      width: 73%;
      margin-right: 10px;
    }

    #right-body {
      width: 25%;
    }

    #index-body, #right-body {
      float: left;
    }
  }

  /* pc端(大屏) */
  @media only screen and (min-width: 1920px) {
    .index-container {
      width: 70%;
      margin: 0 auto;
    }

    #index-body {
      width: 73%;
      margin-right: 10px;
    }

    #right-body {
      width: 25%;
    }

    #index-body, #right-body {
      float: left;
    }
  }

</style>
