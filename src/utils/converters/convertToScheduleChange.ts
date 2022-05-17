import { ScheduleChange } from '@app/models/ScheduleChange'

import { convertToId } from './convertToId'

export const convertToScheduleChange = (
  resource: SimpleObject,
): ScheduleChange => {
  return {
    id: convertToId(resource?.id),
  }
}
