import { Instance, types } from 'mobx-state-tree'

import { ModelName } from './ModelName'

export const TeacherModel = types.model(ModelName.Teacher, {
  numerator: types.maybeNull(types.string),
  denominator: types.maybeNull(types.string),
})

export type Teacher = Instance<typeof TeacherModel>
