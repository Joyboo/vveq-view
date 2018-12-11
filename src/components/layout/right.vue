<template>

  <div id="right-container">

    <!--个人信息-->
    <div v-if="isLogin" class="user-box hidden-md-and-down">
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
          <el-tooltip class="item" effect="dark" content="敬请期待" placement="top">
            <el-button size="small" disabled type="danger" icon="el-icon-delete" circle></el-button>
          </el-tooltip>
        </el-row>
      </div>
    </div>

    <!--登录-->
    <div v-else class="login-box">
      <div>加入我们开启探索之旅吧！</div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "layoutright",
    data() {
      return {
        isLogin: true
      }
    }
  }
</script>

<style scoped>
  #right-container {
    border: 1px solid #f6f6f6;
  }

  /*登录框*/
  .login-box {
    border: 1px solid red;
    height:200px;
    background-color: #FFF;
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
</style>
