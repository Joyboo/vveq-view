<template>

    <div class="head-container">
      <div class="head-left">
        <b class="logo-bule">V</b><b class="logo-red">V</b><b class="logo-bule">EQ</b>
        <!--<img src="../../assets/image/logo2.png" width="60" height="60" alt="">-->
      </div>
      <div class="hidden-md-and-down head-search">
        <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
      </div>
      <div style="float: right;">
        <ul class="head-item">
          <li class="hidden-lg-and-up">
            <a herf="javascript:;" @click="m_showsearch" :class="m_searchicon"></a>
          </li>
          <li>
            <a href="javascript:;">首页</a>
          </li>
          <li>
            <a href="javascript:;">登录</a>
          </li>
        </ul>
      </div>
    </div>

  <!--移动端搜索框-->
  <!--<div v-show="m_isshowsearch" class="m-seatch hidden-lg-and-up">
    <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
  </div>-->
</template>

<script>

  export default {
    name: "layouthead",
    data () {
      return {
        m_isshowsearch: false,
      }
    },
    methods: {
      m_showsearch() {
        this.m_isshowsearch = !this.m_isshowsearch
      }
    },
    computed: {
      m_searchicon() {
        return this.m_isshowsearch ? "el-icon-close" : "el-icon-search"
      }
    }
  }
</script>

<style scoped>
  * {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  a {
    color: #556;
    text-decoration: none;
  }
  .head-container li {
    position: relative;
    display: block;
    float: left;
    margin: 0 10px;
  }

  /* head搜索框父级div */
  .head-container .head-search {
    float: left;
    width: 250px;
    padding: 0 50px;
  }

  .head-left {
    float: left;
    font-size: 25px;
  }

  .head-item {
    list-style: none;
    margin: 0;
  }

  .head-item a {
    color: #556;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
  }

  .head-item a:hover {
    color: #409EFF;
  }

  /*logo*/
  .logo-bule {
    color: #409EFF;
  }
  .logo-red {
    color: #F56C6C;
  }

  /* 移动端 */
  @media only screen and (max-width: 1199px) {
    .head-container {
      width: 100%;
      min-height: 50px;
      margin: 0 auto;
    }

    .m-seatch {
      width: auto;
      line-height: 50px;
      margin: 0 0 10px;
      padding: 0 10px;
      background-color: #fff;
    }
  }

  /* pc端(小屏) */
  @media only screen and (min-width: 1200px) {
    .head-container {
      width: 80%;
      height: 50px;
      line-height: 50px;
      margin: 0 auto;
    }
  }

  /* pc端(大屏) */
  @media only screen and (min-width: 1920px) {
    .head-container {
      width: 70%;
      height: 50px;
      line-height: 50px;
      margin: 0 auto;
    }
  }
</style>
