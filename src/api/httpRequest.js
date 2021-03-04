import axios from 'axios'

function apiAxios(method, url, data, params, success, fail) {
  axios({
      method: method,
      url: url,
      data: data,
      params: params,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'token': localStorage.getItem("token")
      }
    })
    .then(function (res) {

      if (res.data.errCode == 10000) {
        success(res.data);
      } else {
        fail(res.data);
      }

    })
    .catch(function (err) {
      console.log(err);
      fail(-1);
    })
}

export default {

  get: function (url, data, success, fail) {
    return apiAxios('get', url, null, data, success, fail);
  },
  post: function (url, data, success, fail) {

    return apiAxios('post', url, data, null, success, fail);

  }
}
