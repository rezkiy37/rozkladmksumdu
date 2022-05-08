import restApiService from '../restApi'

import type { Group } from '@app/types/entities'
import { Config } from '@app/utils/config'

const groupsApiService = {
  async getGroups() {
    const response = await restApiService.get<Group[]>(Config.endpoints.groups)

    return response.data.data
  },
}

export default groupsApiService
