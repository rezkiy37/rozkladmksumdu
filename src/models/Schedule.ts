import { types, Instance } from 'mobx-state-tree'

import { AuditoryModel } from './Auditory'
import { ModelName } from './ModelName'
import { SubjectModel } from './Subject'
import { TeacherModel } from './Teacher'

export const ScheduleModel = types.model(ModelName.Schedule, {
  order: types.number,
  dayOfWeek: types.number,
  group: types.string,
  auditory: AuditoryModel,
  subject: SubjectModel,
  teacher: TeacherModel,
})

export type Schedule = Instance<typeof ScheduleModel>
