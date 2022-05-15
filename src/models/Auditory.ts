import { Instance, types } from 'mobx-state-tree'

import { ModelName } from './ModelName'

export const AuditoryModel = types.model(ModelName.Auditory, {
  numerator: types.maybeNull(types.string),
  denominator: types.maybeNull(types.string),
})

export type Auditory = Instance<typeof AuditoryModel>
