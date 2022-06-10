import { ScheduleType } from '@app/types/entities/ScheduleType'

export const convertToScheduleType = (resource: boolean) => {
  return resource ? ScheduleType.Numerator : ScheduleType.Denominator
}
