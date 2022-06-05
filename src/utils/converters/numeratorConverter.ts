import { NumeratorEntity } from '@app/types/entities/NumeratorEntity'
import { ScheduleType } from '@app/types/entities/ScheduleType'

export const numeratorConverter = (
  entity: NumeratorEntity,
  scheduleType: ScheduleType,
) => {
  return entity[scheduleType]
}
