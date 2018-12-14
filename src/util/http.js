import Util from './util.js'
// import qs from 'qs'

Util.ajax.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
};

Util.ajax.interceptors.request.use(
  config => {
    // 获取token
    config.headers.common['Authorization'] = 'Bearer ' + Vue.ls.get("web-token");
    return config
  },
  error => {
    return Promise.reject(error)
  }
);

Util.ajax.interceptors.response.use(
  response => {
    // 如果后端有新的token则重新缓存
    let newToken = response.headers['new-token'];
    if (newToken) {
      console.log("有新的token: ", newToken);
      // Vue.ls.set("web-token", newToken);
    }
    return response;
  },
  error => {
    console.log("error2: ", error);
    return Promise.reject(error.response)
  }
);

/*const _successCallback = (res) => {};
const _errorCallback = (err) => {};*/

export default {
  post(url, params = {}) {
    return Util.ajax({
      method: 'post',
      url: url,
      data: params,
      timeout: 30000,
      shouldLoading: params.shouldLoading === undefined ? true : params.shouldLoading,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },

  get(url, params = {}) {
    return Util.ajax({
      method: 'get',
      url: url,
      params,
      shouldLoading: params.shouldLoading === undefined ? true : params.shouldLoading,
    })
  },

  delete(url, params = {}) {
    return Util.ajax({
      method: 'delete',
      url: url,
      params,
      shouldLoading: params.shouldLoading === undefined ? true : params.shouldLoading,
    })
  },

  put(url, params = {}) {
    return Util.ajax({
      method: 'put',
      url: url,
      data: params,
      shouldLoading: params.shouldLoading === undefined ? true : params.shouldLoading,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  }
}
