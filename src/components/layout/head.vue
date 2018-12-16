<template>

  <div>
    <div class="head-container">
      <router-link to="/" class="head-left">
        <div></div>
      </router-link>
      <div class="hidden-md-and-down head-search">
        <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
      </div>
      <div style="float: right;">
        <ul v-if="!userInfo.isLogin" class="head-item">
          <li>
            <a href="javascript:;">首页</a>
          </li>
          <li>
            <a href="javascript:;">登录</a>
          </li>
          <li>
            <router-link to="/user/signup">注册</router-link>
          </li>
          <li>
            <span @click="m_search_click" class="hidden-md-and-up">
              <i :class="m_searchicon"></i>
            </span>
          </li>
        </ul>
        <ul v-else  class="head-item">
          <li>
            <!--动态，收藏，点赞，积分-->
            <el-dropdown :hide-on-click="false" show-timeout="0">
              <span class="el-dropdown-link">
                {{userInfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的动态</el-dropdown-item>
                <el-dropdown-item>我的收藏</el-dropdown-item>
                <el-dropdown-item>我点过赞</el-dropdown-item>
                <el-dropdown-item disabled>我的积分</el-dropdown-item>
                <el-dropdown-item divided>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <router-link to="/">博客</router-link>
          </li>
          <li>
            <router-link to="/">设置</router-link>
          </li>
          <li>
            <span @click="m_search_click" class="hidden-md-and-up login-search-icon">
              <i :class="m_searchicon"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <!--移动端搜索框-->
    <transition enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutUp">
      <div v-show="m_isshowsearch" class="m-seatch hidden-lg-and-up">
        <div class="m-search-chiddiv">
          <el-input size="medium" autofocus v-model="m_search_value" placeholder="请输入内容">
            <template slot="append">Go</template>
          </el-input>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'

  export default {
    name: "layouthead",
    data() {
      return {
        m_isshowsearch: false,
        m_search_value: ""
      }
    },
    methods: {
      m_search_click() {
        this.m_isshowsearch = !this.m_isshowsearch
      },
    },
    computed: {
      m_searchicon() {
        return this.m_isshowsearch ? "el-icon-close" : "el-icon-search"
      },
      ...mapState({
        userInfo: state => state.userInfo,
      })
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

  .head-container li img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: relative;
    top: -5px;
  }

  /* 登录状态的搜索图标 */
  .login-search-icon {
    position: relative;
    top: -14px;
    font-size: 20px;
  }

  /* head搜索框父级div */
  .head-container .head-search {
    float: left;
    width: 250px;
    padding: 0 50px;
  }

  .head-left {
    float: left;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
  }

  .head-left > div:first-child {
    font-size: 25px;
    width: 100px;
    height: 35px;
    background: url("../../assets/image/logo2.png") no-repeat -7px -42px;
    background-size: 120px;
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

  .head-item li:hover {
    color: #409EFF;
  }

  /*logo*/
  .logo-bule {
    color: #409EFF;
  }

  .logo-red {
    color: #F56C6C;
  }

  /*head下拉菜单*/
  .el-dropdown-link {
    cursor: pointer;
  }

  /* 移动端 */
  @media only screen and (max-width: 1199px) {
    .head-container {
      width: 96%;
      min-height: 50px;
      margin: 0 auto;
    }

    .m-seatch {
      width: 99%;
      margin-top: 50px;
      line-height: 110px;
      z-index: 98;
      position: fixed;
      top: 0;
      background-color: rgba(255, 255, 255, 0.9);
      border: 1px solid #ccc;
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
    }

    .m-search-chiddiv {
      width: 95%;
      margin: 0 2%;
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
