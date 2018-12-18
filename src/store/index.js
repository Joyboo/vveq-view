import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  // 用户详情
  userInfo: JSON.parse(window.localStorage.getItem("userInfo")) || {}
};

const mutations = {
  // 修改用户信息
  updateUserInfo(state, value) {
    window.localStorage.setItem("userInfo", JSON.stringify(value));
    state.userInfo = value;
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
