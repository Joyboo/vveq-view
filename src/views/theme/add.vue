<template>
  <layoutindex>

    <template slot="layoutbody">

      <div id="add-body">
        <!--导航面包屑-->
        <div class="guide">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>发表主题</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div id="add-body-el">
          <el-form :model="themeform" :rules="addrule" ref="themeform" class="demo-form-inline">
            <div class="add-body-item">
              <div class="add-body-title-label">
                <span>标题</span>
                <span class="title-length">{{titleAvabledLength}}</span>
              </div>

              <div class="add-body-title-input">
                <el-form-item prop="title">
                  <el-input size="mini" type="text" placeholder="请输入标题"
                            v-model="themeform.title" maxlength="100" autocomplete="off"></el-input>
                </el-form-item>
              </div>
            </div>

            <div class="add-body-item">
              <div class="add-body-title-label">
                <span>正文</span>
                <span class="title-length">{{contentLength}}</span>
              </div>

              <div>
                <el-form-item prop="content">
                  <mavon-editor :toolbarsFlag=true :toolbars="toolbars" :subfield="toolbars.issubfield" @change="contentChange" v-model="themeform.content"/>
                </el-form-item>
              </div>
            </div>

            <div class="add-body-item add-body-item-diff">
              <div>
                <el-form-item label="选择分类" prop="cate">
                  <el-select v-model="themeform.cate" placeholder="请选择分类">
                    <div v-for="(values, k) in cate" :key="k">
                      <el-option :label="values.name" :value="values.id"></el-option>
                    </div>
                  </el-select>
                </el-form-item>
              </div>
            </div>

            <div class="add-body-item add-body-item-diff">
            <span>
              <el-button type="primary" size="mini" @click="submitForm('themeform')">提交</el-button>
            </span>
            </div>
          </el-form>
        </div>
      </div>

    </template>

    <template slot="layoutright">
      <div id="theme-tip" class="right-body">
        <div class="right-title">
          <i class="fa fa-question-circle"></i>
          发帖提示
        </div>

        <div class="add-right">
          <div>这是发帖提示</div>
          <div>这是发帖提示</div>
          <div>这是发帖提示</div>
          <div>这是发帖提示</div>
          <div>这是发帖提示</div>
        </div>
      </div>
    </template>

  </layoutindex>
</template>

<script>
  import Vue from "vue"
  import mavonEditor from 'mavon-editor'
  import layoutindex from "../../components/layout/index"
  import 'mavon-editor/dist/css/index.css'
  import http from "../../util/http.js"
  import {mapState} from 'vuex'

  Vue.use(mavonEditor)

  export default {
    name: "add",
    components: {
      layoutindex
    },
    data() {
      let validateTitle = (rule, value, callback) => {
        if (value.trim() === '') {
          this.$message.error("请输入标题");
        } else {
          callback();
        }
      };
      let validateContent = (rule, value, callback) => {
        if (value.trim() === '') {
          this.$message.error("请输入内容");
        } else {
          callback();
        }
      };
      let validateCate = (rule, value, callback) => {
        if (value == '' || value <= 0) {
          this.$message.error("请选择分类");
        } else {
          callback();
        }
      };
      return {
        cate: {},
        themeform: {
          title: "",
          cate: "",
          content: "",
        },
        addrule: {
          title: [{validator: validateTitle, trigger: 'submit', required: true}],
          content: [{validator: validateContent, trigger: 'submit', required: true}],
          cate: [{validator: validateCate, trigger: 'submit', required: true}],
        },
        titleAvabledLength: 100,
        contentLength:0,
        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          help: true, // 帮助
          /* 1.3.5 */
          undo: true, // 上一步
          redo: true, // 下一步
          trash: true, // 清空
          save: false, // 保存（触发events中的save事件）
          /* 1.4.2 */
          navigation: false, // 导航目录
          /* 2.1.8 */
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          /* 2.2.1 */
          subfield: true, // 单双栏模式
          preview: true, // 预览
          ishljs: true, // 代码高亮
          /* 自定义 */
          issubfield: false // 双栏模式
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            http.post("/api/theme", {
              title: this.themeform.title,
              content: this.themeform.content,
              cid: parseInt(this.themeform.cate),
              uid: this.userInfo.id
            }).then(res => {
              if (res.data.status == 1) {
                this.$message.success("发表成功");
                setTimeout(() => {
                  // todo 是否需要跳转到此文章
                  this.$router.push({path: "/index"});
                }, 1000)
              } else {
                this.$message.error("发表失败");
              }
            }).catch(err => {
              console.log("err:", err);
            })
            return false;
          } else {
            this.$message.error('信息有误, 请检查');
            return false;
          }
        });
      },
      contentChange(value, rander) {
        this.contentLength = value.length;
      }
    },
    watch: {
      // 侦听器，监听title长度
      'themeform.title'(newValue, oldValue) {
        this.titleAvabledLength = this.themeform.title.length > 100 ? 0 : (100 - this.themeform.title.length)
      }
    },
    computed: {
      ...mapState({
        userInfo: state => state.userInfo
      })
    },
    mounted() {
      http.get("/api/cate").then(res => {
        if (res.data.status == 1) {
          this.cate = res.data.data;
        } else {
          this.$message.error("网络错误");
        }
      })
    }
  }
</script>

<style>
  #add-body {
    background-color: #FFF;
    border-radius: 3px;
  }

  #add-body-el {
    /*padding: 10px;*/
  }

  #add-body-el .el-form-item {
    margin: 0;
  }

  #add-body-el .el-input__inner {
    border: none;
  }

  #add-body-el [type=file] {
    display: none !important;
  }

  .add-body-item {
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #e2e2e2;
  }

  .add-body-item-diff {
    padding: 10px;
  }

  .add-body-item .el-input--suffix {
    border: 1px solid #e2e2e2;
  }

  .add-body-title-label {
    border-bottom: 1px solid #e2e2e2;
    padding: 10px;
    font-size: 14px;
  }

  .add-body-title-input .el-form-item__content {
    line-height: 38px;
  }

  .add-body-title-input .el-input__inner {
    width: 100%;
    height: 40px;
    border-bottom: 10px;
    background-color: #F9F9EE;
    font-size: 15px;
    border: none;
  }

  /*修改markdoen编辑器的样式*/
  .add-body-item .v-note-op {
    border-bottom: 1px solid #e2e2e2 !important;
    box-shadow: none !important;
  }

  .add-body-item .v-note-panel {
    box-shadow: none !important;
  }

  .add-right {
    padding: 10px;
    font-size: 13px;
  }

  .title-length {
    float: right;
    color: #ccc;
  }
</style>
