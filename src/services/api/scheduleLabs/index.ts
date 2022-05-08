import restApiService from '../restApi'

import type { Lab } from '@app/types/entities'

const scheduleLabsApiService = {
  async getScheduleLabs() {
    const response = await restApiService.get<Lab[]>('/scheduleLabs')

    return response.data.data
  },
}

export default scheduleLabsApiService
