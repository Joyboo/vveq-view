import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/index'
    },{
      // 首页
      path: '/index',
      component(resolve) {
        require(['../views/index.vue'], resolve);
      }
    },{
      // 用户注册
      path: '/user/signup',
      component(resolve) {
        require(['../views/user/signup.vue'], resolve);
      }
    },{
      // 用户登录
      path: '/user/login',
      component(resolve) {
        require(['../views/user/login.vue'], resolve);
      }
    },{
      // 发表主题
      path: '/theme/add',
      component(resolve) {
        require(['../views/theme/add.vue'], resolve);
      }
    },{
      // 主题详情页
      path: '/theme/:id',
      component(resolve) {
        require(['../views/theme/index.vue'], resolve);
      }
    },{
      // 管理页，现在没有后台，暂时在这里进行模拟，后期删除
      path: '/admin',
      component(resolve) {
        require(['../views/admin.vue'], resolve);
      }
    },{
      // 分类详情页
      path: '/cate/:id',
      component(resolve) {
        require(['../views/cate/index.vue'], resolve);
      }
    },{
      // 用户详情页
      path: '/user/:id',
      component(resolve) {
        require(['../views/user/index.vue'], resolve);
      }
    }
  ]
})
