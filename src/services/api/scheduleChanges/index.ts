import { endpoints } from '@app/constants/endpoints'
import { ScheduleChange } from '@app/models/ScheduleChange'
import restApiService from '@app/services/api/restApi'

const scheduleChangesApiService = {
  async getScheduleChanges() {
    const response = await restApiService.get<ScheduleChange[]>(
      endpoints.scheduleChanges,
    )

    return response.data.data
  },
}

export default scheduleChangesApiService
