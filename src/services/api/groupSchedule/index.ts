import { endpoints } from '@app/constants/endpoints'
import { Schedule } from '@app/models/Schedule'
import restApiService from '@app/services/api/restApi'
import { ServiceResultData } from '@app/types/api/ServiceResultData'
import { ServiceResultMeta } from '@app/types/api/ServiceResultMeta'
import { ScheduleType } from '@app/types/entities/ScheduleType'
import { convertToSchedule, convertToScheduleType } from '@app/utils/converters'

type RequestResponseMeta = {
  is_numerator: boolean
}

export type GetGroupScheduleResult = ServiceResultData<Schedule[]> &
  ServiceResultMeta<{
    scheduleType: ScheduleType
  }>

const groupScheduleApiService = {
  async getGroupSchedule(groupId: string): Promise<GetGroupScheduleResult> {
    const response = await restApiService.get<any[], RequestResponseMeta>(
      endpoints.groupSchedule,
      {
        groupId,
      },
    )

    const scheduleType = convertToScheduleType(response.data.meta.is_numerator)

    return {
      data: response.data.data.map(resource =>
        convertToSchedule(resource, scheduleType),
      ),
      meta: {
        scheduleType,
      },
    }
  },
}

export default groupScheduleApiService
