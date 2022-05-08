import restApiService from '../restApi'

import { endpoints } from '@app/constants/endpoints'
import { ScheduleChange } from '@app/types/entities'

const scheduleChangesApiService = {
  async getScheduleChanges() {
    const response = await restApiService.get<ScheduleChange[]>(
      endpoints.scheduleChanges,
    )

    return response.data.data
  },
}

export default scheduleChangesApiService
