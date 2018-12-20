<template>

  <layoutindex>

    <template slot="layoutbody">
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
                  <el-badge class="mark" type="info" :value="value.commentNum"/>
                </a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>

      <!--分页-->
      <div id="body-pages">
        <el-pagination background layout="prev, pager, next" :total="80">
        </el-pagination>
      </div>
    </template>

    <template slot="layoutright">
      <layoutright></layoutright>
    </template>

    <template slot="backTop">
      <backtop></backtop>
    </template>
  </layoutindex>

</template>

<script>

  import layoutindex from "../components/layout/index"
  import layoutright from "../components/index/right"
  import backtop from "../components/backTop"

  export default {
    name: "index",
    components: {
      layoutindex,
      layoutright,
      backtop
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
          },
          3: {
            authorimg: "http://images.boblog.com/msyql.jpg",
            title: "golang是世界上最好的语言",
            tagid: 0,
            nodeid: 1,
            name: "Joyboo",
            updateTime: "2018-12-02 18:03",
            commentNum: 16
          },
          4: {
            authorimg: "http://images.boblog.com/msyql.jpg",
            title: "golang是世界上最好的语言",
            tagid: 0,
            nodeid: 1,
            name: "Joyboo",
            updateTime: "2018-12-02 18:03",
            commentNum: 16
          },
          5: {
            authorimg: "http://images.boblog.com/msyql.jpg",
            title: "golang是世界上最好的语言",
            tagid: 0,
            nodeid: 1,
            name: "Joyboo",
            updateTime: "2018-12-02 18:03",
            commentNum: 16
          },
          6: {
            authorimg: "http://images.boblog.com/msyql.jpg",
            title: "golang是世界上最好的语言",
            tagid: 0,
            nodeid: 1,
            name: "Joyboo",
            updateTime: "2018-12-02 18:03",
            commentNum: 16
          },
          7: {
            authorimg: "http://images.boblog.com/msyql.jpg",
            title: "golang是世界上最好的语言",
            tagid: 0,
            nodeid: 1,
            name: "Joyboo",
            updateTime: "2018-12-02 18:03",
            commentNum: 16
          },
          8: {
            authorimg: "http://images.boblog.com/msyql.jpg",
            title: "golang是世界上最好的语言",
            tagid: 0,
            nodeid: 1,
            name: "Joyboo",
            updateTime: "2018-12-02 18:03",
            commentNum: 16
          },
          9: {
            authorimg: "http://images.boblog.com/msyql.jpg",
            title: "golang是世界上最好的语言",
            tagid: 0,
            nodeid: 1,
            name: "Joyboo",
            updateTime: "2018-12-02 18:03",
            commentNum: 16
          }
        }
      }
    },
    methods: {
      getTagName(tagid) {
        let tagname = this.tagsdata[tagid];
        return typeof (tagname) == 'undefined' ? "" : tagname;
      },
      getItemNodeName(nodeid) {
        let nodename = this.nodedata[nodeid];
        return typeof (nodename) == 'undefined' ? "" : nodename;
      }
    },
    mounted() {
      // todo 获取主页信息
    }
  }
</script>

<style scoped>
  .father-blog-item {
    background-color: #FFF;
  }

  .blog-item-head {
    width: auto;
    line-height: 25px;
    margin: 0;
    padding: 5px;
    border-bottom: 1px solid #e2e2e2;
  }

  .blog-cate {
    margin: 5px;
    padding: 5px;
    font-size: 10px;
    font-weight: 500;
    line-height: 100%;
    text-align: left;
    border-radius: 2px;
  }

  .blog-cate:not(.blo-cate-active):hover {
    background-color: #F0F0F0;
    cursor: pointer;
  }

  .blo-cate-active {
    background-color: #409EFF;
    color: white;
  }

  .blo-cate-active:hover {
    cursor: pointer;
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

  /*文章节点*/
  .item-node {
    background-color: #f5f5f5;
    font-size: 8px;
    /*transform: scale(0.5);*/
    line-height: 10px;
    display: inline-block;
    padding: 4px 4px 4px 4px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    text-decoration: none;
    color: #999;
  }

  .item-node:hover {
    background-color: #ccc;
  }

  /*鼠标移入时增加下划线*/
  .item-author:hover, .item-title a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  /*文章标题*/
  .item-title {
    line-height: 25px;
    font-size: 13px;
    color: #778087;
    padding: 0 3px 3px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  /*回复数量tag标签*/
  .blog-item .el-badge__content--info:hover {
    border: 1px solid gray;
  }

  .item-tags {
    border: 1px solid red;
    padding: 1px;
    color: red;
    font-size: 8px;
  }

  .item-other {
    font-size: 10px;
    color: #ccc;
  }

  /*分页父div*/
  #body-pages {
    width: 100%;
    line-height: 40px;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    clear: both;
  }

  /*body分页*/
  #body-pages .el-pager li, #body-pages button {
    background: #fff;
    margin: 0;
    border: 1px solid #dddddd;
    border-radius: 0px;
    color: #409EFF;
  }

  #body-pages .el-pager .active {
    background: #f5f5f5;
    border: 1px solid #dddddd;
    color: #999999;
  }

  /* 移动端 */
  @media only screen and (max-width: 1199px) {

    .item-title {
      font-size: 15px;
    }
  }

  /* pc端(小屏) */
  @media only screen and (min-width: 1200px) {
  }

  /* pc端(大屏) */
  @media only screen and (min-width: 1920px) {
  }

</style>
