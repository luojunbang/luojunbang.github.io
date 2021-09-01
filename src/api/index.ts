import axios from 'axios'

interface Todos {
  id: string
  label: string
  type: string
  status: string
}

export default {
  getList(userId: string): any {
    return axios.get('/dsmp/login/getVersionInfo.do')
  }
}
