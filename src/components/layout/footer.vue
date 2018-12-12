<template>
  <div id="footer-container">
    <div style="float: left;">
      <div id="footer-info">
        <div class="footer-item">
          <a href="javascript:;">关于我</a>
        </div>
        <div class="footer-item">
          <a href="https://github.com/Joyboo/vveq-view">Github</a>
        </div>
        <div class="footer-item">
          <a href="https://github.com/Joyboo/vveq-api">API</a>
        </div>
        <div class="footer-item">
          <el-tooltip content="添加友链请联系站长" placement="top" effect="light">
            <a href="javascript:;">更多友链</a>
          </el-tooltip>
        </div>
      </div>
      <!--备案号-->
      <div id="footer-beian">
        <a href="http://www.miibeian.gov.cn">粤ICP备18133856号</a>
      </div>
    </div>

    <div id="vveq-logo">
      <img src="../../assets/image/logo2.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "layoutfooter"
  }
</script>

<style scoped>
  #footer-container {
    margin: 0 auto;
    text-align: left;
    padding: 10px;
  }

  #footer-info {
    height: 30px;
    line-height: 30px;
  }

  .footer-item {
    float: left;
    font-size: 12px;
    color: #999;
    font-weight: 700;
    margin-right: 30px;
  }

  /*备案信息*/
  #footer-beian {
    font-size: 14px;
  }

  /* 移动端 */
  @media only screen and (max-width: 1199px) {
    #footer-container {
      width: 95%;
    }

    /*vveq-logo*/
    #vveq-logo {
      float: right;
      height: 40px;
      line-height: 40px;
    }

    #vveq-logo img {
      width: 40px;
      height: 40px;
    }
  }

  /* pc端(小屏) */
  @media only screen and (min-width: 1200px) {
    #footer-container {
      width: 80%;
    }

    /*vveq-logo*/
    #vveq-logo {
      float: right;
      height: 70px;
      line-height: 70px;
    }

    #vveq-logo img {
      width: 70px;
      height: 70px;
    }
  }

  /* pc端(大屏) */
  @media only screen and (min-width: 1920px) {
    #footer-container {
      width: 70%;
    }

    /*vveq-logo*/
    #vveq-logo {
      float: right;
      height: 70px;
      line-height: 70px;
    }

    #vveq-logo img {
      width: 70px;
      height: 70px;
    }
  }
</style>
