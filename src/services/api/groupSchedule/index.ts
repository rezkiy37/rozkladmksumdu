import { endpoints } from '@app/constants/endpoints'
import { Schedule } from '@app/models/Schedule'
import restApiService from '@app/services/api/restApi'
import { convertToSchedule } from '@app/utils/converters'

type RequestResponseMeta = {
  is_numerator: boolean
}

export type GetGroupScheduleResponse = {
  data: Schedule[]
  isNumerator: boolean
}

const groupScheduleApiService = {
  async getGroupSchedule(groupId: string): Promise<GetGroupScheduleResponse> {
    const response = await restApiService.get<any[], RequestResponseMeta>(
      endpoints.groupSchedule,
      {
        groupId,
      },
    )

    return {
      data: response.data.data.map(resource => convertToSchedule(resource)),
      isNumerator: response.data.meta.is_numerator,
    }
  },
}

export default groupScheduleApiService
