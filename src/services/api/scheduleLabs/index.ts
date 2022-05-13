import { endpoints } from '@app/constants/endpoints'
import { Lab } from '@app/models/Lab'
import restApiService from '@app/services/api/restApi'

const scheduleLabsApiService = {
  async getScheduleLabs() {
    const response = await restApiService.get<Lab[]>(endpoints.scheduleLabs)

    return response.data.data
  },
}

export default scheduleLabsApiService
