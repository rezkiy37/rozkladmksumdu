import { endpoints } from '@app/constants/endpoints'
import restApiService from '@app/services/api/restApi'
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
