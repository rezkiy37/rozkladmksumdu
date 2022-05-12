import { Instance, SnapshotOut, types } from 'mobx-state-tree'

import { ApiModel, initialState as apiInitialState } from '@app/models/Api'
import { LabModel } from '@app/models/Lab'

import { ModelName } from './ModelName'

export const LabsFeatureModel = types.model(ModelName.LabsFeature, {
  api: ApiModel,
  labs: types.array(LabModel),
})

export type LabsFeature = Instance<typeof LabsFeatureModel>

type LabsFeatureProps = SnapshotOut<typeof LabsFeatureModel>

export const initialState: LabsFeatureProps = LabsFeatureModel.create({
  api: apiInitialState,
  labs: [],
})
