import { endpoints } from '@app/constants/endpoints'
import { Group } from '@app/models/Group'
import restApiService from '@app/services/api/restApi'
import { ServiceResultData } from '@app/types/api/ServiceResultData'
import { convertToGroup } from '@app/utils/converters'

export type GetGroupsResult = ServiceResultData<Group[]>

const groupsApiService = {
  async getGroups(): Promise<GetGroupsResult> {
    const response = await restApiService.get<any[]>(endpoints.groups)

    return {
      data: response.data.data.map(resource => convertToGroup(resource)),
    }
  },
}

export default groupsApiService
