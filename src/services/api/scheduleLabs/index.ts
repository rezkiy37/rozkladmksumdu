import { endpoints } from '@app/constants/endpoints'
import { Lab } from '@app/models/Lab'
import restApiService from '@app/services/api/restApi'
import { ServiceResultData } from '@app/types/api/ServiceResultData'
import { convertToLab } from '@app/utils/converters'

export type GetScheduleLabsResult = ServiceResultData<Lab[]>

const scheduleLabsApiService = {
  async getScheduleLabs(): Promise<GetScheduleLabsResult> {
    const response = await restApiService.get<Lab[]>(endpoints.scheduleLabs)

    return {
      data: response.data.data.map(resource => convertToLab(resource)),
    }
  },
}

export default scheduleLabsApiService
