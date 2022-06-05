import { ScheduleType } from './ScheduleType'

export type NumeratorEntity = {
  [ScheduleType.Numerator]: Nullable<string>
  [ScheduleType.Denominator]: Nullable<string>
}
