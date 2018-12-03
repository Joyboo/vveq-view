<template>

    <div class="public-container">
      <div style="float: left;">
        <span style="color: #F56C6C;">Joy</span>
        <span style="color: #409EFF;">boo</span>
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
      },
    },
    computed: {
      m_searchicon() {
        return this.m_isshowsearch ? "el-icon-close" : "el-icon-search"
      }
    }
  }
</script>

<style scoped>

</style>
