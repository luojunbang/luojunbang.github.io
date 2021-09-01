import axios, { AxiosPromise } from 'axios'

export default {
  getList(userId: string): AxiosPromise {
    return axios.get('/dsmp/login/getVersionInfo.do')
  }
}
