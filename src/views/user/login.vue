<template>
  <layoutindex>

    <template slot="layoutbody">

      <!--导航面包屑-->
      <div class="guide">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>登录</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <!--表单项-->
      <div id="signup-form">
        <el-form :model="loginValue" status-icon size="mini" ref="loginValue"
                 label-width="80px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input type="text" placeholder="请输入用户名" v-model="loginValue.username"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" placeholder="请输入密码" v-model="loginValue.password"
                      autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('loginValue')">提交</el-button>
            <el-button @click="resetForm('loginValue')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </template>

    <template slot="layoutright">
      <userright></userright>
    </template>

  </layoutindex>
</template>

<script>
  import layoutindex from "../../components/layout/index"
  import userright from "../../components/user/right"
  import http from "../../util/http.js"
  import {mapActions, mapState} from 'vuex'

  export default {
    name: "login",
    components: {
      layoutindex,
      userright
    },
    data(){
      return {
        loginValue: {
          username:"",
          password:""
        }
      }
    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            http.post("/api/user/login", this.loginValue)
              .then(res => {
                if (res.data.status == 1) {
                  this.$message.success('登录成功');
                  res.data.data.isLogin = true;
                  this.updateUserAction(res.data.data);
                  this.$router.push({path: "/index"});
                } else {
                  this.$message.error('登录失败');
                }
              })
              .catch(err => {
                console.log("err1:", err)
              });
          } else {
            this.$message.error('注册信息有误, 请检查');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      ...mapActions(['updateUserAction']),
    },
    computed: {
      ...mapState({
        userInfo: state => state.userInfo
      })
    }
  }
</script>

<style scoped>

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

  /* 移动端 */
  @media only screen and (max-width: 1199px) {

    #signup-form {
      background-color: #FFF;
      text-align: center;
      padding: 20px;
    }

    #signup-form .el-form {
      width: 95%;
      margin: 0 auto;
      padding-right: 0;
    }
  }
</style>
