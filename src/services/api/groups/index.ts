import { endpoints } from '@app/constants/endpoints'
import restApiService from '@app/services/api/restApi'
import { Group } from '@app/types/entities'

const groupsApiService = {
  async getGroups() {
    const response = await restApiService.get<Group[]>(endpoints.groups)

    return response.data.data
  },
}

export default groupsApiService
