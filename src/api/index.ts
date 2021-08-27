import axios, { AxiosPromise } from 'axios'

interface Todos {
  date: Date
  isDone: boolean
  desc: string
  userId: string
}

export default {
  getUserInfo(): AxiosPromise {
    return axios.get('/login/getVersionInfo.do')
  },
}
