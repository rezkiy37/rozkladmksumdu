import restApiService from '../restApi'

import type { ScheduleChange } from '@app/types/entities'
import { Config } from '@app/utils/config'

const scheduleChangesApiService = {
  async getScheduleChanges() {
    const response = await restApiService.get<ScheduleChange[]>(
      Config.endpoints.scheduleChanges,
    )

    return response.data.data
  },
}

export default scheduleChangesApiService
