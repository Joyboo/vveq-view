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
                  <el-input type="text" v-model="signupValue.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                  <el-input type="text" v-model="signupValue.email" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="signupValue.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPassword">
                  <el-input type="password" v-model="signupValue.checkPassword" autocomplete="off"></el-input>
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
            <layoutright></layoutright>
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
  import layoutright from "../../components/layout/right"
  import layoutfooter from "../../components/layout/footer"

  export default {
    name: "signup",
    components: {
      layouthead,
      layoutright,
      layoutfooter,
    },
    data() {
      /*用户名验证规则*/
      var validateUsername = (rule, value, callback) => {
        if (value === '' || value.length <= 0) {
          callback(new Error('请输入用户名'));
        } else if (!(/^[a-zA-Z_\d]{4,20}$/.test(value))) {
          callback(new Error('只能包含字母、数字或下划线，4-20位'));
        } else {
          callback();
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
            this.$refs.signupValue.validateField('checkPass');
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
        } else if (!(/^[0-9A-Za-z][\.-_0-9A-Za-z]*@[0-9A-Za-z]+(\.[0-9A-Za-z]+)+$/.test(value))) {
          callback(new Error('请输入有效的邮箱地址!'));
        } else {
          callback();
        }
      };
      return {
        signupValue: {
          username: '',
          password: '',
          checkPassword: '',
          email: ''
        },
        rules2: {
          username: [{validator: validateUsername, trigger: 'blur'}],
          password: [{validator: validatePassword, trigger: 'blur'}],
          checkPassword: [{validator: validatePassword2, trigger: 'blur'}],
          email: [{validator: checkEmail, trigger: 'blur'}]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
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
  }

  /* 移动端 */
  @media only screen and (max-width: 1199px) {
    .index-container {
      width: 100%;
      margin: 0 auto;
    }

    .item-title {
      font-size: 15px;
    }

    #index-body {
      width: 100%;
    }

    #right-body {
      width: 100%;
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
