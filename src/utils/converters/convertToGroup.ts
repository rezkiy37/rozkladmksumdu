import { Group } from '@app/models/Group'

import { convertToId } from './convertToId'
import { convertToValue } from './convertToValue'

export const convertToGroup = (resource: SimpleObject): Group => {
  return {
    id: convertToId(resource?.id),
    name: convertToValue<string>(resource?.name, '')?.toString(),
  }
}
