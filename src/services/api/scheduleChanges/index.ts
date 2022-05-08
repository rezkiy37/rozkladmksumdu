import restApiService from '../restApi'

import type { ScheduleChange } from '@app/types/entities'

const scheduleChangesApiService = {
  async getScheduleChanges() {
    const response = await restApiService.get<ScheduleChange[]>(
      '/scheduleChanges',
    )

    return response.data.data
  },
}

export default scheduleChangesApiService
