/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios'

function showFullScreenLoading() {
  console.log('loading')
}
function tryHideFullScreenLoading() {
  console.log('close loading')
}
function errorHandle(err: any) {
  console.log(err)
}

// 创建axios实例
const instance = axios.create({
  // withCredentials: true, //需要携带cookie
  timeout: process.env.NODE_ENV === 'development' ? 1000 * 5 : 1000 * 60 * 10, //最小化策略分析测试统一超时时间
})

// 添加方法
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//请求拦截器
instance.interceptors.request.use(
  config => {
    if (config.headers.showLoading !== false) {
      showFullScreenLoading()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  res => {
    if (res.config.headers.showLoading !== false) {
      tryHideFullScreenLoading()
    }
    if (res.status === 200) {
      if (res.config.responseType === 'arraybuffer') {
        // 文件流下载
        if (res.data.byteLength > 0) return Promise.resolve(res.data)
        return Promise.reject(res.data)
      } else {
        if (res.data.code == 500) {
          errorHandle(res.data)
          return Promise.reject(res.data)
        }
        return Promise.resolve(res.data)
      }
    } else {
      return Promise.reject(res.data)
    }
  },
  // 请求失败
  error => {
    const { response } = error
    if (error.config.headers.showLoading !== false) {
      tryHideFullScreenLoading()
    }
    if (response) {
      return Promise.reject(response)
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      if (!window.navigator.onLine) {
        //    store.commit('changeNetwork', false);
      } else {
        return Promise.reject(error)
      }
    }
  },
)

export default instance
