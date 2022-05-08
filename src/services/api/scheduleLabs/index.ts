import { endpoints } from '@app/constants/endpoints'
import restApiService from '@app/services/api/restApi'
import { Lab } from '@app/types/entities'

const scheduleLabsApiService = {
  async getScheduleLabs() {
    const response = await restApiService.get<Lab[]>(endpoints.scheduleLabs)

    return response.data.data
  },
}

export default scheduleLabsApiService
