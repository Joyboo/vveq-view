import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/index'
    }, {
      // 首页
      path: '/index',
      component(resolve) {
        require(['../views/index.vue'], resolve);
      }
    }, {
      // 用户注册
      path: '/user/signup',
      component(resolve) {
        require(['../views/user/signup.vue'], resolve);
      }
    }
  ]
})
