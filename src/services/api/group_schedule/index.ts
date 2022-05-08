import { endpoints } from '@app/constants/endpoints'
import restApiService from '@app/services/api/rest_api'
import { Schedule } from '@app/types/entities'

const groupScheduleApiService = {
  async getGroupSchedule(groupId: string) {
    const response = await restApiService.get<Schedule[]>(
      endpoints.groupSchedule,
      {
        groupId,
      },
    )

    return response.data.data
  },
}

export default groupScheduleApiService
