import axios from 'axios'

import { Config } from '@app/utils/config'

import type { ServerResponse } from './../types'

const restApiService = {
  get axiosInstance() {
    return axios.create({
      baseURL: Config.apiBaseUrl,
    })
  },

  get<T>(url: string) {
    return this.axiosInstance.get<ServerResponse<T>>(url)
  },
}

export default restApiService
