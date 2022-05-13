import { endpoints } from '@app/constants/endpoints'
import { Group } from '@app/models/Group'
import restApiService from '@app/services/api/restApi'

const groupsApiService = {
  async getGroups() {
    const response = await restApiService.get<Group[]>(endpoints.groups)

    return response.data.data
  },
}

export default groupsApiService
