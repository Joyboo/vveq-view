<template>
  <layoutindex>

    <template slot="layoutbody">

      <div id="add-body">
        <!--导航面包屑-->
        <div class="guide">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <!--todo 点击跳转到分类-->
            <el-breadcrumb-item :to="'/cate/' + themedata.cate.id">{{themedata.cate.name}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div id="theme-body">
          <!--标题-->
          <div class="theme-head">

            <div class="h1">
              {{themedata.title}}
            </div>

            <div>
              <small>
                <router-link :to="'/member/' + themedata.user.uid">
                  {{themedata.user.nickname ? themedata.user.nickname : themedata.user.username}}
                </router-link>
                · {{themedata.instime}} · {{themedata.click}} 次点击 &nbsp;
              </small>
            </div>

          </div>

          <div>

            <mavon-editor :toolbarsFlag="editprops.toolbarsFlag" :subfield="editprops.subfield"
                          :defaultOpen="editprops.defaultOpen"
                          v-model="themedata.content"/>
          </div>
        </div>

      </div>

    </template>

    <template slot="layoutright">
      <div id="theme-tip" class="right-body">
        <div class="right-title">
          <i class="fa fa-question-circle"></i>
          最近热帖
        </div>

        <div class="right-item">
          <div>这是最近热帖</div>
          <div>这是最近热帖</div>
          <div>这是最近热帖</div>
          <div>这是最近热帖</div>
          <div>这是最近热帖</div>
        </div>
      </div>
    </template>

  </layoutindex>
</template>

<script>

  import 'mavon-editor/dist/css/index.css'
  import http from "../../util/http"
  import {mapState} from 'vuex'
  import layoutindex from "../../components/layout/index"

  import Vue from 'vue'
  import mavonEditor from 'mavon-editor'
  // use
  Vue.use(mavonEditor)

  export default {
    name: "index",
    components: {
      layoutindex
    },
    data() {
      return {
        themedata: {
          /*模拟数据*/
          id: 1,
          cate: {
            id: 1,
            name: "灌水"
          },
          user: {
            uid: 1,
            avatar: "",
            username: "admin",
            nickname: "",
          },
          tagid: 0,
          click: 23,
          like: 1,
          instime: "2018-12-12 12:00:00",
          title: "golang是最好的语言",
          content: "",
          comments: [
            {
              users: {
                username: "Joyboo",
                nickname: "zhoubo",
                avatar: "",
              },
              content: "信不信随手一敲就是完美的十五字",
              like: 3,
              instime: "2018-12-12 12:05:00"
            },
            {
              users: {
                username: "Joyboo",
                nickname: "zhoubo",
                avatar: "",
              },
              content: "信不信随手一敲就是完美的十五字",
              like: 3,
              instime: "2018-12-12 12:05:36"
            }
          ]
        }
      }
    },
    methods: {},
    computed: {
      editprops() {
        return {
          subfield: false,// 单双栏模式
          defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
          editable: false,
          toolbarsFlag: false,
          scrollStyle: true
        }
      },
      ...mapState({
        userInfo: state => state.userInfo,
        defaultAvatar: state => state.defaultAvatar
      })
    },
    mounted() {
      let tid = this.$route.params.id;
      http.get("/api/theme/" + tid).then(res => {
        if (res.data.status == 1) {
          this.themedata.content = res.data.data;
          console.log("content: ", this.themedata.content);
        } else {
          this.$message.error("网络错误，请重试")
        }
      })
    }
  }
</script>

<style>

  .h1 {
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
    margin: 0 10px 10px 0;
    font-size: 22px;
    font-weight: 500;
  }

  #theme-body {
    background-color: #fff;
  }

  /*去除markdown默认阴影*/
  #theme-body .v-note-panel {
    box-shadow: none;
  }

  #theme-body small {
    color: #999;
    font-size: smaller;
  }

  .right-item {
    padding: 10px;
    font-size: 13px;
  }

  .theme-head {
    border-bottom: 1px solid #e2e2e2;
    padding: 10px;
  }

</style>
