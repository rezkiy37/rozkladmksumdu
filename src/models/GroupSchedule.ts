import { types, Instance } from 'mobx-state-tree'

import { days } from '@app/constants/days'

import { ModelName } from './ModelName'
import { ScheduleModel, Schedule } from './Schedule'

export const GroupScheduleModel = types
  .model(ModelName.GroupSchedule, {
    [days.Monday]: types.array(ScheduleModel),
    [days.Tuesday]: types.array(ScheduleModel),
    [days.Wednesday]: types.array(ScheduleModel),
    [days.Thursday]: types.array(ScheduleModel),
    [days.Friday]: types.array(ScheduleModel),
    [days.Saturday]: types.array(ScheduleModel),
    [days.Sunday]: types.array(ScheduleModel),
  })
  .actions(self => {
    function pushDaySchedule(day: number, schedule: Schedule) {
      self[day]?.push(schedule)
    }

    function clearDaysSchedule() {
      Object.values(days).forEach(day => {
        self[day]?.clear()
      })
    }

    return {
      pushDaySchedule,
      clearDaysSchedule,
    }
  })

export type GroupSchedule = Instance<typeof GroupScheduleModel>

export const initialState = GroupScheduleModel.create({
  [days.Monday]: [],
  [days.Tuesday]: [],
  [days.Wednesday]: [],
  [days.Thursday]: [],
  [days.Friday]: [],
  [days.Saturday]: [],
  [days.Sunday]: [],
})
