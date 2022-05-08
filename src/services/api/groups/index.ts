import restApiService from '../restApi'

import type { Group } from '@app/types/entities'

const groupsApiService = {
  async getGroups() {
    const response = await restApiService.get<Group[]>('/groups')

    return response.data.data
  },
}

export default groupsApiService
