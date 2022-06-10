import { Schedule } from '@app/models/Schedule'
import { ScheduleType } from '@app/types/entities/ScheduleType'

import { convertToAuditory } from './convertToAuditory'
import { convertToId } from './convertToId'
import { convertToSubject } from './convertToSubject'
import { convertToTeacher } from './convertToTeacher'
import { convertToValue } from './convertToValue'
import { numeratorConverter } from './numeratorConverter'

export const convertToSchedule = (
  resource: SimpleObject,
  scheduleType: ScheduleType,
): Schedule => {
  return {
    id: convertToId(resource?.order),
    order: convertToValue<number>(resource?.order, 0),
    dayOfWeek: convertToValue<number>(resource?.dayOfWeek, 0),
    group: convertToValue<string>(resource?.group, ''),
    auditory: numeratorConverter(
      convertToAuditory(resource ?? {}),
      scheduleType,
    ),
    subject: numeratorConverter(convertToSubject(resource ?? {}), scheduleType),
    teacher: numeratorConverter(convertToTeacher(resource ?? {}), scheduleType),
  }
}
