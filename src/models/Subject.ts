import { Instance, types } from 'mobx-state-tree'

import { ModelName } from './ModelName'

export const SubjectModel = types.model(ModelName.Subject, {
  numerator: types.maybeNull(types.string),
  denominator: types.maybeNull(types.string),
})

export type Subject = Instance<typeof SubjectModel>
