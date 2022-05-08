import restApiService from '../restApi'

import type { Lab } from '@app/types/entities'
import { Config } from '@app/utils/config'

const scheduleLabsApiService = {
  async getScheduleLabs() {
    const response = await restApiService.get<Lab[]>(
      Config.endpoints.scheduleLabs,
    )

    return response.data.data
  },
}

export default scheduleLabsApiService
