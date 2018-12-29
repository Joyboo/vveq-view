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
  import {mapState} from 'vuex'
  import http from "../../util/http"
  import layoutindex from "../../components/layout/index"

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
    computed: {
      ...mapState({
        userInfo: state => state.userInfo,
        defaultAvatar: state => state.defaultAvatar
      })
    },
    mounted() {
      let tid = this.$route.params.id;
      http.get("/api/theme/" + tid).then(res => {
        if (res.data.status == 1) {
          this.themedata = res.data.data
        } else {
          this.$message.error("网络错误，请重试")
        }
      })
    }
  }
</script>

<style scoped>
  .right-item {
    padding: 10px;
    font-size: 13px;
  }
</style>
