import { types, Instance } from 'mobx-state-tree'

import { ModelName } from './ModelName'

export const GroupModel = types.model(ModelName.Group, {
  id: types.identifier,
  name: types.string,
})

export type Group = Instance<typeof GroupModel>
