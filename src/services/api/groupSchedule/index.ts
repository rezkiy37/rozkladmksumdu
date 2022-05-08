import restApiService from '../restApi'

import type { Schedule } from '@app/types/entities'
import { Config } from '@app/utils/config'

const groupScheduleApiService = {
  async getGroupSchedule(groupId: string) {
    const response = await restApiService.get<Schedule[]>(
      Config.endpoints.groupSchedule,
      {
        groupId,
      },
    )

    return response.data.data
  },
}

export default groupScheduleApiService
