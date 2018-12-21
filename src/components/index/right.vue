<template>

  <div id="right-container">

    <!--个人信息-->
    <div v-if="userInfo.isLogin" class="user-box right-body">
      <div class="right-title">
        <i class="fa fa-user-circle"></i>
        桃花源
      </div>
      <!--头像+昵称-->
      <div>
        <div style="float:left;width: 50px;height:50px;padding: 5px">
          <a href="javascript:;">
            <img :src="userInfo.avatar != '' ? userInfo.avatar : '/static/default.jpg'" alt="">
          </a>
        </div>
        <div style="width:60%;line-height:60px;overflow: hidden;padding: 0 10px;text-align: left;">
          <a href="javascripit:;">
            {{userInfo.username}}
          </a>
        </div>
      </div>
      <!--发帖，消息-->
      <div>
        <el-row>

          <router-link to="/theme/add">
            <el-button size="small" type="primary" icon="el-icon-edit">发表主题</el-button>
          </router-link>
          <!--hidden属性隐藏-->
          <el-badge :value="3" class="item">
            <el-button size="small" type="warning" icon="el-icon-message">我的消息</el-button>
          </el-badge>
        </el-row>
      </div>
    </div>

    <!--登录-->
    <div v-else class="login-box right-body">
      <div class="right-title">
        <i class="fa fa-user-circle"></i>
        开启探索之旅吧！
      </div>
      <div>
        <el-form :model="formInline" class="demo-form-inline">
          <el-input size="mini" type="text" name="username" v-model="formInline.username" placeholder="账号"></el-input>
          <el-input size="mini" type="password" name="password" v-model="formInline.password"
                    placeholder="密码"></el-input>
          <div class="login-button">
            <span>
              <el-button type="primary" size="mini" @click="onSubmit">登录</el-button>
            </span>
            <span>
              <a href="javascript:;">忘记密码</a>
            </span>
          </div>
        </el-form>
      </div>
      <!--第三方登录-->
      <div>
        <span>
          <el-tooltip class="item" effect="dark" content="Github登录" placement="top">
            <i class="fa fa-github"></i>
          </el-tooltip>
        </span>
        <span>
          <el-tooltip class="item" effect="dark" content="QQ登录" placement="top">
            <i class="fa fa-qq"></i>
          </el-tooltip>
        </span>
        <span>
          <el-tooltip class="item" effect="dark" content="微信登录" placement="top">
            <i class="fa fa-weixin"></i>
          </el-tooltip>
        </span>
        <span>
          <el-tooltip class="item" effect="dark" content="微博登录" placement="top">
            <i class="fa fa-weibo"></i>
          </el-tooltip>
        </span>
      </div>
    </div>

    <!--最热-->
    <div id="right-hot" class="right-body">
      <div class="right-title">
        <i class="fa fa-fire"></i>
        最热
      </div>

      <div>
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tbody>
          <tr>
            <td>
              <a href="javascript:;" class="hot-img">
                <img src="http://images.boblog.com/msyql.jpg" alt="">
              </a>
            </td>
            <td>
              <div class="hot-item">
                <div>
                  <a href="javascript:;">
                    这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题
                  </a>
                </div>
                <div>
                  <span class="hot-item-time">2018-10-29 12:09:00</span>
                  <span class="hot-item-num">10评论</span>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <a href="javascript:;" class="hot-img">
                <img src="http://images.boblog.com/msyql.jpg" alt="">
              </a>
            </td>
            <td>
              <div class="hot-item">
                <div>
                  <a href="javascript:;">
                    这是标题这是
                  </a>
                </div>
                <div>
                  <span class="hot-item-time">2018-10-29 12:09:00</span>
                  <span class="hot-item-num">10评论</span>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <a href="javascript:;" class="hot-img">
                <img src="http://images.boblog.com/msyql.jpg" alt="">
              </a>
            </td>
            <td>
              <div class="hot-item">
                <div>
                  <a href="javascript:;">
                    这是标题这是标题这是标题这是标
                  </a>
                </div>
                <div>
                  <span class="hot-item-time">2018-10-29 12:09:00</span>
                  <span class="hot-item-num">10评论</span>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!--本站统计-->
    <div id="local-stat" class="right-body">
      <div class="right-title">
        <i class="fa fa-signal"></i>
        本站统计
      </div>

      <div>
        <ul>
          <li>注册会员：123</li>
          <li>发表主题：234</li>
          <li>发表评论：234</li>
          <li>本站浏览：234</li>
        </ul>
      </div>
    </div>

    <!--推荐-->
    <div id="recommend" class="right-body">
      <div class="right-title">
        <i class="fa fa-flag"></i>
        推荐
      </div>
    </div>

  </div>

</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import http from "../../util/http.js"

  export default {
    name: "layoutright",
    data() {
      return {
        formInline: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        http.post("/api/user/login", this.formInline)
          .then(res => {
            this.formInline.username = this.formInline.password = "";
            if (res.data.status == 1) {
              res.data.data.isLogin = true;
              this.updateUserAction(res.data.data);
            } else {
              this.$message.error('登录失败');
            }
          }).catch(err => console.log(err))
      },
      ...mapActions(['updateUserAction']),
    },
    computed: {
      // 如果没设置头像，显示默认的头像
      avatar () {
        return this.userInfo.avatar ? this.userInfo.avatar : ""
      },
      ...mapState({
        userInfo: state => state.userInfo,
      })
    }
  }
</script>

<style>

  .right-body {
    background-color: #FFF;
    margin-bottom: 10px;
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

  /*登录框*/

  /*right-title*/
  .right-title {
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    border-bottom: 1px solid #e2e2e2;
    font-weight: 700;
    padding-left: 10px;
  }

  .login-box > div:nth-child(2) {
    border-bottom: 1px solid #e2e2e2;
    padding: 10px 20px;
  }

  /*忘记密码span*/
  .login-button > span:nth-child(2) {
    font-size: 12px;
    float: right;
    color: #778087;
  }

  .login-button > span:nth-child(2) a:hover {
    color: #ccc;
  }

  /*第三方登录*/
  .login-box > div:nth-child(3) {
    clear: both;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }

  .login-box > div:nth-child(3) span {
    color: #409EFF;
    font-size: 25px;
    margin: 0 15px;
    width: 12%;
  }

  .login-box > div:nth-child(3) span:hover {
    cursor: pointer;
    color: #556;
  }

  /*头像+昵称*/
  .user-box > div:not(:first-child) {
    height: 60px;
  }

  .user-box > div:nth-child(2) {
    border-bottom: 1px solid #e2e2e2;
  }

  /*发帖icon*/
  .user-box > div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /*头像img*/
  .user-box img {
    width: 50px;
    height: 50px;
    border-radius: 3px;
    cursor: pointer;
    border-radius: 50%;
  }

  .user-box a:hover {
    opacity: 0.5;
    text-decoration: underline;
  }

  /*本站统计*/
  #local-stat > div:nth-child(2) ul {
    padding: 10px;
    margin: 0;
  }

  #local-stat > div:nth-child(2) li {
    list-style: none;
    font-size: 13px;
  }

  /*最热*/
  .hot-item {
    font-size: 12px;
    color: #556;
    padding: 5px;
  }

  .hot-item a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .hot-img img {
    width: 30px;
    height: 30px;
    margin: 5px;
  }

  .hot-item-time {
    color: #ccc;
    font-size: 10px;
  }

  .hot-item-num {
    color: #ccc;
    font-size: 10px;
    background-color: #f5f5f5;
    padding: 2px;
  }

  #right-container .el-input {
    margin: 10px 0;
  }

  /* 移动端 */
  @media only screen and (max-width: 1199px) {

    .login-button {
      margin: 10px;
    }

    .user-box, .login-box {
      margin-top: 10px;
    }
  }

</style>
