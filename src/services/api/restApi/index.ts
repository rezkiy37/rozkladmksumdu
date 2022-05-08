import axios from 'axios'

import type { ServerResponse } from './../types'

const restApiService = {
  get baseURL() {
    return 'https://rozklad.mksumdu.info/api'
  },

  get axiosInstance() {
    return axios.create({
      baseURL: this.baseURL,
    })
  },

  get<T>(url: string) {
    return this.axiosInstance.get<ServerResponse<T>>(url)
  },
}

export default restApiService
