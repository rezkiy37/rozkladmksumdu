import { types, Instance } from 'mobx-state-tree'

import { ModelName } from './ModelName'

// TODO: Explore type
export const LabModel = types.model(ModelName.Lab, {
  id: types.identifier,
})

export type Lab = Instance<typeof LabModel>
