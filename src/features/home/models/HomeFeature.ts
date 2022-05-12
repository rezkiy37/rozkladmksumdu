import { Instance, SnapshotOut, types } from 'mobx-state-tree'

import { ApiModel, initialState as apiInitialState } from '@app/models/Api'
import { GroupModel } from '@app/models/Group'
import { ScheduleChangeModel } from '@app/models/ScheduleChange'

import { ModelName } from './ModelName'

export const HomeFeatureModel = types.model(ModelName.HomeFeature, {
  api: ApiModel,
  groups: types.array(GroupModel),
  scheduleChanges: types.array(ScheduleChangeModel),
})

export type HomeFeature = Instance<typeof HomeFeatureModel>

type HomeFeatureProps = SnapshotOut<typeof HomeFeatureModel>

export const initialState: HomeFeatureProps = HomeFeatureModel.create({
  api: apiInitialState,
  groups: [],
  scheduleChanges: [],
})
