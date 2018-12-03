<template>
  <div id="app">
    <el-container>

      <!--头部-->
      <el-header style="height: 40px;">
        <layouthead></layouthead>
      </el-header>

      <el-container style="margin-top: 10px;">
        <div class="public-container">
          <el-row :gutter="10">

            <!--body-->
            <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
              <div class="father-blog-item">
                <!--第一个div显示节点-->
                <div class="blog-item-head">
                  <span class="blog-cate blo-cate-active">全部</span>
                  <span class="blog-cate">最新</span>
                  <span class="blog-cate" v-for="(nv, nk) of nodedata" :key="nk">{{nv}}</span>
                </div>

                <!--帖子父级div-->
                <div class="blog-item" v-for="(value, k) of itemdata" :key="k">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody>
                    <tr>
                      <!--头像td-->
                      <td width="48" valign="top" align="center">
                        <a href="javascript:;">
                          <img :src="value.authorimg" class="avatar" width="48px" height="48">
                        </a>
                      </td>

                      <td width="10"></td>
                      <!--帖子td-->
                      <td width="auto">
                        <div style="min-height: 50px;">
                          <!--标题-->
                          <div class="item-title">
                            <a href="javascript:;">{{value.title}}</a>
                          </div>
                          <!--节点和发布者，标签, 发布时间 todo 换成XX天小时前这种格式-->
                          <div class="item-other">
                              <span v-if="!(value.tagid == 0)">
                                <span class="item-tags" v-text="getTagName(value.tagid)"></span> &nbsp;•&nbsp;
                              </span>
                            <a class="item-node" href="javascript:;" v-text="getItemNodeName(value.nodeid)"></a> &nbsp;•&nbsp;
                            <b><a class="item-author" href="javascript:;">{{value.name}}</a></b> &nbsp;•&nbsp;
                            <span>{{value.updateTime}}</span>
                          </div>
                        </div>
                      </td>

                      <!--数量提示-->
                      <td width="50" align="center">
                        <a href="javascript:;">
                          <el-badge class="mark" type="info" :value="value.commentNum" />
                        </a>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </el-col>

            <!--右侧边栏-->
            <el-col :lg="6" :xl="6" class="hidden-md-and-down">
              <layoutright></layoutright>
            </el-col>

          </el-row>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>

  import layouthead from "./components/layout/head"
  import layoutright from "./components/layout/right"

  export default {
    name: "App",
    components: {
      layouthead,
      layoutright
    },
    data() {
      return {
        input4: '',
        input5: '',
        input9: '',

        nodedata: {
          1: "技术",
          2: "源码展示",
          3: "分享",
          4: "心情"
        },
        tagsdata: {
          1: "置顶",
          2: "独家",
          3: "首发"
        },
        itemdata: {
          0: {
            authorimg: "http://images.boblog.com/msyql.jpg",
            title: "golang是世界上最好的语言",
            tagid: 1,
            nodeid: 1,
            name: "Joyboo",
            updateTime: "2018-12-02 18:03",
            commentNum: 16
          },
          1: {
            authorimg: "http://images.boblog.com/msyql.jpg",
            title: "golang是世界上最好的语言golang是世界上最好的语言golang是世界上最好的语言golang是世界上最好的语言golang是世界上最好的语言golang是世界上最好的语言golang是世界上最好的语言golang是世界上最好的语言golang是世界上最好的语言golang是世界上最好的语言",
            tagid: 0,
            nodeid: 3,
            name: "Joyboo",
            updateTime: "2018-12-02 18:03",
            commentNum: 1700
          },
          2: {
            authorimg: "http://images.boblog.com/msyql.jpg",
            title: "golang是世界上最好的语言",
            tagid: 3,
            nodeid: 2,
            name: "Joyboo",
            updateTime: "2018-12-02 18:03",
            commentNum: 0
          }
        }
      }
    },
    methods: {

      getTagName(tagid) {
        let tagname = this.tagsdata[tagid];
        return typeof(tagname) == 'undefined' ? "" : tagname;
      },
      getItemNodeName(nodeid) {
        let nodename = this.nodedata[nodeid];
        return typeof(nodename) == 'undefined' ? "" : nodename;
      }
    }
  }
</script>

<style scoped>
  body {
    margin: 0;
    background-color: #E2E2E2;
  }

  * {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  a {
    color: #556;
    text-decoration: none;
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
