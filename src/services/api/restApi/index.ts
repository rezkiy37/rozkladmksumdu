import axios from 'axios'

import { baseUrl } from '@app/constants/baseUrl'
import { ServerResponse } from '@app/types/api/ServerResponse'
import { UrlParams } from '@app/types/api/UrlParams'
import { buildEndpoint } from '@app/utils/buildEndpoint'

const restApiService = {
  get axiosInstance() {
    return axios.create({
      baseURL: baseUrl,
    })
  },

  get<T>(endpoint: string, params: Nullable<UrlParams> = null) {
    endpoint = buildEndpoint(endpoint, params)

    return this.axiosInstance.get<ServerResponse<T>>(endpoint)
  },
}

export default restApiService
