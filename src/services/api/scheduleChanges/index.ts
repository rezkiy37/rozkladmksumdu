import { endpoints } from '@app/constants/endpoints'
import { ScheduleChange } from '@app/models/ScheduleChange'
import restApiService from '@app/services/api/restApi'
import { ServiceResultData } from '@app/types/api/ServiceResultData'
import { convertToScheduleChange } from '@app/utils/converters'

export type GetScheduleChangesResult = ServiceResultData<ScheduleChange[]>

const scheduleChangesApiService = {
  async getScheduleChanges(): Promise<GetScheduleChangesResult> {
    const response = await restApiService.get<any[]>(endpoints.scheduleChanges)

    return {
      data: response.data.data.map(resource =>
        convertToScheduleChange(resource),
      ),
    }
  },
}

export default scheduleChangesApiService
