import restApiService from '../restApi'

import { endpoints } from '@app/constants/endpoints'
import { Lab } from '@app/types/entities'

const scheduleLabsApiService = {
  async getScheduleLabs() {
    const response = await restApiService.get<Lab[]>(endpoints.scheduleLabs)

    return response.data.data
  },
}

export default scheduleLabsApiService
