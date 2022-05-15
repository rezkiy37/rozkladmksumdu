import { ScheduleType } from '@app/types/Entities/ScheduleType'

export const convertToScheduleType = (resource: boolean) => {
  return resource ? ScheduleType.Numerator : ScheduleType.Denominator
}
