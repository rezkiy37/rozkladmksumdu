import { types, Instance } from 'mobx-state-tree'

import { ModelName } from './ModelName'

export const ScheduleModel = types.model(ModelName.Schedule, {
  id: types.identifier,
  order: types.number,
  dayOfWeek: types.number,
  group: types.string,
  auditory: types.maybeNull(types.string),
  subject: types.maybeNull(types.string),
  teacher: types.maybeNull(types.string),
})

export type Schedule = Instance<typeof ScheduleModel>
