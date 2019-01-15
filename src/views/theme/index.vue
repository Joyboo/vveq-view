<template>
  <layoutindex>

    <template slot="layoutbody">

      <div id="add-body">
        <!--导航面包屑-->
        <div class="guide">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
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

            <mavon-editor style="border-bottom: 1px solid #e2e2e2;" :toolbarsFlag="editprops.toolbarsFlag"
                          :subfield="editprops.subfield"
                          :defaultOpen="editprops.defaultOpen"
                          v-model="themedata.content"/>

            <!--回复-->
            <div class="blog-item" v-for="(value, k) in themedata.comments" :key="k">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tbody>
                <tr>
                  <!--头像td-->
                  <td width="48" valign="top" align="center">
                    <a href="javascript:;">
                      <img :src="value.user.avatar ? value.user.avatar : defaultAvatar" class="avatar" width="48px"
                           height="48">
                    </a>
                  </td>

                  <td width="10"></td>
                  <!--帖子td-->
                  <td width="auto">
                    <div style="min-height: 50px;">
                      <!--节点和发布者，标签, 发布时间-->
                      <div class="item-other">
                        <b>
                          <a class="item-author" href="javascript:;">
                            {{value.user.nickname ? value.user.nickname : value.user.username}}
                          </a>
                        </b> &nbsp;•&nbsp;
                        <span>{{value.instime}}</span>
                      </div>

                      <div class="item-content">
                        {{value.content}}
                      </div>
                    </div>
                  </td>

                  <!--点赞-->
                  <td width="50" align="center">
                    <el-button class="zan" size="mini"
                               :type="commentLikeIcon(k) ? 'default' : 'primary'"
                               :icon="commentLikeIcon(k) ? 'fa fa-thumbs-o-up' : 'fa fa-thumbs-up'"
                               @click="like(k)" round>&nbsp;{{value.likes.length}}
                    </el-button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>

            <!--发表回复-->
            <div style="padding: 10px;">
              <el-form :model="submitComment" status-icon size="mini" ref="submitComment"
                       class="demo-ruleForm">
                <el-input type="textarea" :rows="5" placeholder="回复。。"
                  v-model="submitComment.comment">
                </el-input>

                <div style="margin-top: 10px;">
                  <el-button  size="mini" type="primary" @click="submitForm('submitComment')">提交</el-button>
                </div>
              </el-form>
            </div>
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
        likeinfo: {},
        submitComment: {
          comment: ""
        },
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
          comments: {
            1: {
              user: {
                username: "Joyboo",
                nickname: "zhoubo",
                avatar: "",
              },
              likes: [1, 2, 3],
              content: "信不信随手一敲就是完美的十五字1",
              instime: "2018-12-12 12:05:00"
            },
            2: {
              user: {
                username: "Joyboo",
                nickname: "zhoubo",
                avatar: "",
              },
              likes: [2, 3],
              content: "信不信随手一敲就是完美的十五字信不信随手一敲就是完美的十五字信不信随手一敲就是完美的十五字信不信随手一敲就是完美的十五字信不信随手一敲就是完美的十五字信不信随手一敲就是完美的十五字信不信随手一敲就是完美的十五字信不信随手一敲就是完美的十五字信不信随手一敲就是完美的十五字信不信随手一敲就是完美的十五字信不信随手一敲就是完美的十五字信不信随手一敲就是完美的十五字信不信随手一敲就是完美的十五字",
              instime: "2018-12-12 12:05:36"
            }
          }
        }
      }
    },
    methods: {
      // 评论点赞按钮
      like(comentid) {
        // 未登录
        if (this.userInfo.isLogin == false) {
          return this.open2();
        }

        let index = this.themedata.comments[comentid].likes.indexOf(this.userInfo.id);
        if (index == -1) {
          // 点赞
          this.themedata.comments[comentid].likes.push(this.userInfo.id);
        } else {
          // 取消
          this.themedata.comments[comentid].likes.splice(index, 1);
        }
        // todo 发送api请求
      },
      // 用户是否点赞了此评论
      commentLikeIcon(comentid) {
        let comment = this.themedata.comments[comentid];
        return comment.likes.indexOf(this.userInfo.id) == -1;
      },
      // 确认操作弹窗
      open2() {
        this.$confirm('此操作需要登录', '提示', {
          confirmButtonText: '现在登录',
          cancelButtonText: '继续逛逛',
          type: 'info'
        }).then(() => {
          this.$router.push({path: "/user/login"});
        }).catch(() => {
        });
      },
      /**
       * 提交回复
       * @param formName
       */
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid && this.submitComment.comment != '') {
            this.themedata.comments[5] = {
              user: {
                username: "Joyboo",
                nickname: "zhoubo",
                avatar: "",
              },
              likes: [],
              content: this.submitComment.comment,
              instime: "2018-12-12 12:05:36"
            };
            this.submitComment.comment = '';
            this.$message.success("发表成功");
          }
          return false;
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
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
          // todo 整理接口数据结构
          this.themedata.content = res.data.data.content;
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

  .blog-item {
    width: auto;
    min-height: 50px;
    margin: 0;
    padding: 5px;
    line-height: 100%;
    border-bottom: 1px solid #e2e2e2;
  }

  .blog-item:hover {
    box-shadow: inset 0 1px 5px rgba(255, 255, 255, 0.15), 0 1px 5px rgba(0, 0, 0, 0.075);
  }

  .item-other {
    font-size: 10px;
    color: #ccc;
  }

  /*鼠标移入时增加下划线*/
  .item-author:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .item-content {
    padding: 5px;
    font-size: 10px;
  }

</style>
