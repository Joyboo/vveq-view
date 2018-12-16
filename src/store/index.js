import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  // 用户详情
  userInfo: {
    isLogin: false,
    id: 0,
    username: "",
    nickname: "",
    email: "",
    tel: "",
    avatar: "",
    instime: ""
  }
};

const mutations = {
  // 修改用户信息
  updateUserInfo (state, value) {
    state.userInfo = value
  }
}

const actions = {
  updateUserAction({state, commit}, params) {
    commit('updateUserInfo', params);
    return params;
  },
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

export default store;
