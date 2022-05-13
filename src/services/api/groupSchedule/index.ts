import { endpoints } from '@app/constants/endpoints'
import { Schedule } from '@app/models/Schedule'
import restApiService from '@app/services/api/restApi'

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
