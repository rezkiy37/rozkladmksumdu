import restApiService from '../restApi'

import type { Schedule } from '@app/types/entities'

const groupScheduleApiService = {
  async getGroupSchedule(groupId: string) {
    const response = await restApiService.get<Schedule[]>(
      `/schedule/${groupId}`,
    )

    return response.data.data
  },
}

export default groupScheduleApiService
