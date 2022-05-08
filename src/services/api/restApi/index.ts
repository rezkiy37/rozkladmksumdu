import axios from 'axios'

import type { ServerResponse } from '@app/types/api/ServerResponse'
import type { UrlParams } from '@app/types/api/UrlParams'
import { Config } from '@app/utils/config'
import { endpointBuilder } from '@app/utils/endpointBuilder'

const restApiService = {
  get axiosInstance() {
    return axios.create({
      baseURL: Config.apiBaseUrl,
    })
  },

  get<T>(endpoint: string, params: Nullable<UrlParams> = null) {
    endpoint = endpointBuilder(endpoint, params)

    return this.axiosInstance.get<ServerResponse<T>>(endpoint)
  },
}

export default restApiService
