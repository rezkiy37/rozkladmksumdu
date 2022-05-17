import { Schedule } from '@app/models/Schedule'

import { convertToAuditory } from './convertToAuditory'
import { convertToId } from './convertToId'
import { convertToSubject } from './convertToSubject'
import { convertToTeacher } from './convertToTeacher'
import { convertToValue } from './convertToValue'

export const convertToSchedule = (resource: SimpleObject): Schedule => {
  return {
    id: convertToId(resource?.order),
    order: convertToValue<number>(resource?.order, 0),
    dayOfWeek: convertToValue<number>(resource?.dayOfWeek, 0),
    group: convertToValue<string>(resource?.group, ''),
    auditory: convertToAuditory(resource ?? {}),
    subject: convertToSubject(resource ?? {}),
    teacher: convertToTeacher(resource ?? []),
  }
}
