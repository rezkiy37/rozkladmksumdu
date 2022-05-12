import { types, Instance } from 'mobx-state-tree'

import { ModelName } from './ModelName'

// TODO: Explore type
export const ScheduleChangeModel = types.model(ModelName.ScheduleChange, {
  id: types.identifier,
})

export type ScheduleChange = Instance<typeof ScheduleChangeModel>
