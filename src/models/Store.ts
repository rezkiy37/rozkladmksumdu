import { Instance, types } from 'mobx-state-tree'

import { GroupScheduleFeatureModel } from '@app/features/groupSchedule/models/GroupScheduleFeature'
import { HomeFeatureModel } from '@app/features/home/models/HomeFeature'
import { LabsFeatureModel } from '@app/features/labs/models/LabsFeature'

import { ModelName } from './ModelName'

export const StoreModel = types.model(ModelName.Store, {
  home: HomeFeatureModel,
  groupSchedule: GroupScheduleFeatureModel,
  labs: LabsFeatureModel,
})

export type Store = Instance<typeof StoreModel>
