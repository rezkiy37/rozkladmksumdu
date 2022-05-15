import { Lab } from '@app/models/Lab'

import { convertToId } from './convertToId'

export const convertToLab = (resource: SimpleObject): Lab => {
  return {
    id: convertToId(resource?.id),
  }
}
