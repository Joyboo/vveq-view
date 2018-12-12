<template>

  <div id="right-container">

    <!--个人信息-->
    <div v-if="isLogin" class="user-box">
      <!--头像+昵称-->
      <div>
        <div style="float:left;width: 50px;height:50px;padding: 5px">
          <a href="javascript:;">
            <img src="https://avatars1.githubusercontent.com/u/35485279?s=460&v=4" alt="">
          </a>
        </div>
        <div style="width:60%;line-height:60px;overflow: hidden;padding: 0 10px;text-align: left;">
          <a href="javascripit:;">
            Joyboo
          </a>
        </div>
      </div>

      <!--发帖，消息-->
      <div>
        <el-row>
          <el-tooltip class="item" effect="dark" content="发帖" placement="top">
            <el-button size="small" type="primary" icon="el-icon-edit" circle></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="消息" placement="top">
            <el-button size="small" type="warning" icon="el-icon-message" circle></el-button>
          </el-tooltip>

          <el-tooltip class="item" effect="dark" content="敬请期待" placement="top">
            <el-button size="small" disabled type="success" icon="el-icon-check" circle></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="敬请期待" placement="top">
            <el-button size="small" disabled type="info" icon="el-icon-star-off" circle></el-button>
          </el-tooltip>
          <!--<el-tooltip class="item" effect="dark" content="敬请期待" placement="top">
            <el-button size="small" disabled type="danger" icon="el-icon-delete" circle></el-button>
          </el-tooltip>-->
        </el-row>
      </div>
    </div>

    <!--登录-->
    <div v-else class="login-box">
      <div class="right-title"><i class="fa fa-user-circle"></i> 开启探索之旅吧！</div>
      <div>
        <el-form :model="formInline" class="demo-form-inline">
          <el-input size="mini" name="username" v-model="formInline.username" placeholder="账号"></el-input>
          <el-input size="mini" name="password" v-model="formInline.password" placeholder="密码"></el-input>
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

    <!--本站统计-->
    <div id="local-stat">
      <div class="right-title">
        <i class="fa fa-signal"></i> 本站统计
      </div>
    </div>

    <!--推荐-->
    <div></div>

  </div>

</template>

<script>
  export default {
    name: "layoutright",
    data() {
      return {
        isLogin: true,
        formInline: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        alert('submit!');
      }
    }
  }
</script>

<style>

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
    border:1px solid #dddddd;
    color: #999999;
  }

  #right-container {
    /*border: 1px solid red;*/
  }

  /*登录框*/
  .login-box {
    /*height: 250px;*/
    background-color: #FFF;
  }

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
    padding: 10px 20px 0;
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
  }

  .login-box > div:nth-child(3) span:hover {
    cursor: pointer;
    color: #556;
  }

  /*头像+昵称*/
  .user-box > div:first-child {
    border-bottom: 1px solid #e2e2e2;
  }

  /*发帖icon*/
  .user-box > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user-box > div {
    height: 60px;
    background-color: #FFF;
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
  #local-stat {
    margin-top: 10px;
    background-color: #FFF;
    clear: both;
  }


  /* 移动端 */
  @media only screen and (max-width: 1199px) {
    .el-input {
      margin: 10px 0;
    }
    .login-button {
      margin: 10px;
    }
    .user-box,.login-box {
      margin-top: 10px;
    }
  }

</style>
