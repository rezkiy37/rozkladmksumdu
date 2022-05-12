import { Instance, SnapshotOut, types } from 'mobx-state-tree'

import { ApiModel, initialState as apiInitialState } from '@app/models/Api'
import { ScheduleModel } from '@app/models/Schedule'

import { ModelName } from './ModelName'

export const GroupScheduleFeatureModel = types.model(
  ModelName.GroupScheduleFeature,
  {
    api: ApiModel,
    groupSchedules: types.array(ScheduleModel),
  },
)

export type GroupScheduleFeature = Instance<typeof GroupScheduleFeatureModel>

type GroupScheduleFeatureProps = SnapshotOut<typeof GroupScheduleFeatureModel>

export const initialState: GroupScheduleFeatureProps =
  GroupScheduleFeatureModel.create({
    api: apiInitialState,
    groupSchedules: [],
  })
