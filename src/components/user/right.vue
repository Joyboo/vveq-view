<template>
  <div id="login-signup-right">
    <div id="other-login" class="right-body">
      <div class="right-title">
        <i class="fa fa-user-circle"></i>
        第三方登录
      </div>

      <div class="item">
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

    <div id="right-login" class="right-body">
      <div class="right-title">
        <i class="fa fa-calendar"></i>
        已有账号了？
      </div>

      <div class="item">
        <ul>
          <li>
            <router-link to="/user/login">登录</router-link>
          </li>
          <li>
            <a href="javascript:;">忘记密码</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userright"
  }
</script>

<style scoped>
  #other-login > div:nth-child(2) {
    clear: both;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-size: 16px;
  }

  #other-login > div:nth-child(2) span {
    color: #409EFF;
    font-size: 25px;
    margin: 0 15px;
    width: 12%;
  }

  #other-login > div:nth-child(2) a:hover {
    cursor: pointer;
    color: #556;
  }
</style>
