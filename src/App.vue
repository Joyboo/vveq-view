<template>
  <div id="app">
    <el-container>
      <el-header style="height: 45px;">
        <div style="width: 100%;margin: 0 auto;">
          <el-row :gutter="10">
            <!--导航栏主题-->
            <el-col :xs="24" :sm="24" :md="24" :lg="4" :xl="4" style="text-align: center;line-height: 45px;">
              <!--移动端菜单按钮-->
              <span style="float: left;" class="hidden-md-and-down">
                <el-dropdown>
                <span class="el-dropdown-link">
                  <i class="el-icon-menu" @click="m_closesearchdialog"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>技术文章1</el-dropdown-item>
                  <el-dropdown-item>技术文章2</el-dropdown-item>
                  <el-dropdown-item divided>我要登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              </span>

              <span style="color: #F56C6C;">Joy</span>boo
              <!--移动端搜索/关闭搜索按钮-->
              <span style="float: right;" @click="m_ctlselectdialog" class="hidden-md-and-down"><i :class="m_ctlsearchicon"></i></span>
            </el-col>
            <!--移动端隐藏-->
            <el-col class="hidden-md-and-down" :lg="16" :xl="16">
              <el-input placeholder="请输入内容" v-model="input23" style="height: 45px;">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </el-col>
            <!--pc显示具体项,移动端隐藏-->
            <el-col :lg="4" :xl="4" class="hidden-md-and-down">
              <div style="float: right;width: 450px;">
                <ul class="head-ul hidden-sm-only hidden-xs-only">
                  <li style="float: right;padding: 0 5px;">
                    <el-button type="text">登录</el-button>
                  </li>
                  <li style="float: right; padding: 0 5px;">
                    <el-button type="text"><i class="el-icon-edit">写文章</i></el-button>
                  </li>
                  <li style="float: right; padding: 0 5px;">
                    <el-input placeholder="请输入内容" v-model="input23" style="height: 45px;">
                      <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <!--移动端搜索框-->
      <div v-show="m_showselectsearch" style="width: 100%;height: 80px;background-color: white;">
        <div style="margin-top: 15px;padding: 0 10px;">
          <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <el-container>
        <div style="width: 100%;margin: 0 auto;">
          <el-row :gutter="10">
            <el-col :lg="4" :xl="4" class="hidden-md-and-down">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :lg="4" :xl="4" class="hidden-md-and-down">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
          </el-row>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import '../static/css/display.css'

  export default {
    data() {
      return {
        input4: '',
        input5: '',
        input23: '',
        m_showselectsearch: false, // 是否显示主页搜索框（移动端）
      }
    },
    methods: {
      // 控制移动端搜索框显示/关闭
      m_ctlselectdialog () {
        this.m_showselectsearch = !this.m_showselectsearch
      },
      // 关闭移动端搜索dialog
      m_closesearchdialog () {
        this.m_showselectsearch = false
      }
    },
    computed: {
      // 移动端：计算属性返回不同的class，控制右上角显示搜索/关闭按钮
      m_ctlsearchicon () {
        return this.m_showselectsearch ? "el-icon-close" : "el-icon-search"
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
    background-color: #f6f6f6;
  }

  /* 网站标题 */
  #h1-container {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  /* head右侧菜单项 */
  .head-ul {
    position: relative;
    list-style: none;
    font-size: 14px;
    margin: 0;
    padding: 0;
  }

  .el-header, .el-footer {
    background-color: white;
    text-align: center;
    line-height: 45px;
    border-bottom: 1px solid #f6f6f6;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 5px rgba(0, 0, 0, 0.075);
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
