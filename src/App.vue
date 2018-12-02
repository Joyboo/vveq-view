<template>
  <div id="app">
    <el-container>
      <el-header style="height: 40px;">
        <div class="public-container">
          <div style="float: left;">
            <span style="color: #F56C6C;">Joy</span><span style="color: #409EFF;">boo</span>
          </div>
          <div class="hidden-md-and-down head-search">
            <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
          </div>
          <div style="float: right;">
              <ul style="list-style: none;margin: 0;">
                <li class="hidden-lg-and-up">
                  <a herf="javascript:;" @click="m_showsearch" :class="m_searchicon"></a>
                </li>
                <li>
                  <a href="javascript:;">首页</a>
                </li>
                <li>
                  <a href="javascript:;">登录</a>
                </li>
                <li>
                  <a href="javascript:;">注册</a>
                </li>
              </ul>
          </div>
        </div>
      </el-header>

      <el-container style="margin-top: 10px;">
        <div class="public-container">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">

              <div v-show="m_isshowsearch" class="m-seatch hidden-lg-and-up">
                <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
              </div>

              <div class="father-blog-item">
                <!--第一个div显示节点-->
                <div class="blog-item-head">
                  <div class="blog-cate blo-cate-active">全部</div>
                  <div class="blog-cate">最新</div>
                  <div class="blog-cate">技术</div>
                  <div class="blog-cate">源码展示</div>
                </div>
                <div class="blog-item"></div>
                <div class="blog-item"></div>
                <div class="blog-item"></div>
              </div>
            </el-col>
            <el-col :lg="6" :xl="6" class="hidden-md-and-down">
              <div style="border: 1px solid red;height: 500px; "></div>
            </el-col>
          </el-row>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import './assets/css/display.css'
  import './assets/css/App.css'

  export default {
    data() {
      return {
        input4: '',
        input5: '',
        input9: '',
        m_isshowsearch: false
      }
    },
    methods: {
      m_showsearch () {
        this.m_isshowsearch = !this.m_isshowsearch
      }
    },
    computed: {
      m_searchicon () {
        return this.m_isshowsearch ? "el-icon-close" : "el-icon-search"
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
    background-color: #E2E2E2;
  }

  * {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  .el-header, .el-footer {
    background-color: white;
    text-align: center;
    line-height: 45px;
    border-bottom: 1px solid #f6f6f6;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 5px 5px rgba(0, 0, 0, 0.075);
  }

  .head-container {
    margin: 0 auto;
    width: 83%;
  }

  .public-saide {
    border: 1px solid #eaeaea;
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

  body > .el-container {
    width: 100%;
    margin-bottom: 40px;
  }

</style>
