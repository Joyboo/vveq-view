<template>
  <div id="signup">
    <el-container>

      <!--头部-->
      <el-header>
        <layouthead></layouthead>
      </el-header>

      <el-container>
        <div class="index-container">

          <!--body-->
          <div id="index-body">
            <!--导航面包屑-->
            <div class="guide">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>注册</el-breadcrumb-item>
              </el-breadcrumb>
            </div>

            <!--表单项-->
            <div id="signup-form">
              <el-form :model="signupValue" status-icon :rules="rules2" size="mini" ref="signupValue"
                       label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                  <el-input type="text" placeholder="请输入用户名" v-model="signupValue.username"
                            autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                  <el-input type="text" placeholder="请输入邮箱" v-model="signupValue.email" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" placeholder="请输入密码" v-model="signupValue.password"
                            autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPassword">
                  <el-input type="password" placeholder="请再次输入密码" v-model="signupValue.checkPassword"
                            autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="验证码">
                  <div class="verify">
                    <el-input type="text" placeholder="请输入验证码" v-model="verifyForm.VerifyValue"
                              autocomplete="off"></el-input>
                  </div>
                  <div class="verify">
                    <img :src="veridySrc" @click="generateCaptcha" alt="点我">
                  </div>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="submitForm('signupValue')">提交</el-button>
                  <el-button @click="resetForm('signupValue')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>

          <!--右侧边栏-->
          <div id="right-body">

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
                    <a href="javascript:;">登录</a>
                  </li>
                  <li>
                    <a href="javascript:;">忘记密码</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </el-container>

      <el-footer>
        <layoutfooter></layoutfooter>
      </el-footer>

    </el-container>
  </div>
</template>

<script>
  import layouthead from "../../components/layout/head"
  import layoutfooter from "../../components/layout/footer"
  import http from "../../util/http.js"
  import {mapActions, mapState} from 'vuex'

  export default {
    name: "signup",
    components: {
      layouthead,
      layoutfooter,
    },
    // route离开事件
    /* beforeRouteLeave(to, from, next) {
       if (this.signupValue.username != '' || this.signupValue.email || this.signupValue.password) {
         this.$confirm('检测到有未提交的内容, 确认要离开吗?', '请确认', {
           confirmButtonText: '确定',
           cancelButtonText: '取消',
           type: 'warning'
         }).then(() => {
           next()
         }).catch(() => {
           this.$message.error('网络错误, 请重试');
         });
       } else {
         next()
       }
     },*/
    data() {
      /*用户名验证规则*/
      var validateUsername = (rule, value, callback) => {
        if (value === '' || value.length <= 0) {
          callback(new Error('请输入用户名'));
        } else if (!(/^[a-zA-Z_\d]{4,20}$/.test(value))) {
          callback(new Error('只能包含字母、数字或下划线，4-20位'));
        } else {
          http.get('/api/user/usernameIsExists/' + value)
            .then(res => {
              if (res.data.status == 1) {
                callback()
              } else {
                callback(new Error("用户名已存在"))
              }
            })
            .catch(err => {
              console.log("err1:", err)
            });
        }
      };
      /*首次密码验证规则*/
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (value.length < 6) {
          callback(new Error('密码过短!'))
        } else {
          if (this.signupValue.checkPassword !== '') {
            this.$refs.signupValue.validateField('checkPassword');
          }
          callback();
        }
      };
      /*确认密码验证规则*/
      var validatePassword2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.signupValue.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      /*邮箱验证规则*/
      var checkEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入邮箱'));
        } else if (!(/^[0-9A-Za-z][\.-_0-9A-Za-z]*@[0-9A-Za-z]+(\.[A-Za-z]+)+$/.test(value))) {
          callback(new Error('请输入有效的邮箱地址!'));
        } else {
          callback();
        }
      };
      /*验证码校验*/
      /* // base64验证码出于安全性的考虑，验证成功一次之后就会失效，所以表单自动校验规则暂不开启验证码校验，让API去校验
      var checkVerifyCode = (rule, value, callback) => {
        http.post('/api/verify/verifyCaptcha', this.verifyForm)
          .then(res => {
            if (res.data.status == 1) {
              callback()
            } else {
              callback(new Error("验证失败"));
            }
          })
      };
      */
      return {
        signupValue: {
          username: '',
          password: '',
          checkPassword: '',
          email: '',
        },
        rules2: {
          username: [{validator: validateUsername, trigger: 'blur', required: true}],
          password: [{validator: validatePassword, trigger: 'blur', required: true}],
          checkPassword: [{validator: validatePassword2, trigger: 'blur', required: true}],
          email: [{validator: checkEmail, trigger: 'blur', required: true}]
        },
        loading: true,
        veridySrc: "",
        verifyForm: {
          CaptchaType: "character",
          Id: '',
          VerifyValue: ''
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            http.post('/api/user', {from: this.signupValue, verify: this.verifyForm})
              .then(res => {
                console.log("res: ", res)
                if (res.data.status == -1) {
                  this.verifyForm.VerifyValue = "";
                  this.$message.error('验证码错误');
                  this.generateCaptcha();
                } else if (res.data.status == 1) {
                  res.data.data.isLogin = true;
                  this.updateUserAction(res.data.data);
                  this.$router.push({path: "/index"});
                } else {
                  this.$message.error('网络错误, 请重试');
                }
              })
              .catch(err => {
                console.log("err1:", err)
              });
          } else {
            this.$message.error('网络错误, 请重试');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // 获取验证码
      generateCaptcha() {
        http.post("/api/verify/getCaptcha", this.verifyForm)
          .then(res => {
            if (res.data.status == 1) {
              this.verifyForm.Id = res.data.captchaId;
              this.veridySrc = res.data.data;
            } else {
              console.log("data error: ", res);
              this.$message.error('网络错误, 请重试');
            }
          })
          .catch(err => {
            console.log("generateCaptcha error: ", err);
            this.$message.error('网络错误, 请重试');
          })
      },
      ...mapActions(['updateUserAction']),
    },
    mounted() {
      this.generateCaptcha()
    },
    computed: {
      ...mapState({
        userInfo: state => state.userInfo,
      })
    }
  }
</script>

<style scoped>

  /*面包屑导航*/
  #index-body .guide {
    background: #FFF;
    height: 15px;
    padding: 10px;
    border-bottom: 1px solid #eaeaea;
  }

  #signup-form {
    background-color: #FFF;
    text-align: center;
    padding: 20px;
  }

  #signup-form .el-form {
    width: 50%;
    margin: 0 auto;
    padding-right: 70px;
    text-align: left;
  }

  /*验证码*/
  .verify {
    width: 48%;
    height: 50px;
    float: left;
  }

  .verify img {
    height: 50px;
    width: 100%;
    margin-left: 5%;
  }

  .verify img:hover {
    cursor: pointer;
  }

  .right-title {
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    border-bottom: 1px solid #e2e2e2;
    font-weight: 700;
    padding-left: 10px;
  }

  .right-body {
    background-color: #FFF;
    margin-bottom: 10px;
    clear: both;
    padding-bottom: 1px;
  }

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

  #right-login a:hover {
    text-decoration: underline;
  }

  /* 移动端 */
  @media only screen and (max-width: 1199px) {
    .index-container {
      width: 100%;
      margin: 0 auto;
    }

    #index-body {
      width: 100%;
    }

    #right-body {
      width: 100%;
    }

    #signup-form {
      background-color: #FFF;
      text-align: center;
      padding: 10px;
    }

    #signup-form .el-form {
      width: 95%;
      margin: 0 auto;
      padding-right: 0;
    }
  }

  /* pc端(小屏) */
  @media only screen and (min-width: 1200px) {
    .index-container {
      width: 80%;
      margin: 0 auto;
    }

    #index-body {
      width: 73%;
      margin-right: 10px;
    }

    #right-body {
      width: 25%;
    }

    #index-body, #right-body {
      float: left;
    }
  }

  /* pc端(大屏) */
  @media only screen and (min-width: 1920px) {
    .index-container {
      width: 70%;
      margin: 0 auto;
    }

    #index-body {
      width: 73%;
      margin-right: 10px;
    }

    #right-body {
      width: 25%;
    }

    #index-body, #right-body {
      float: left;
    }
  }
</style>
