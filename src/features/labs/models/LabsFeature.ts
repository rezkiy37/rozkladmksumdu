import { Instance, types } from 'mobx-state-tree'

import { ApiModel, initialState as apiInitialState } from '@app/models/Api'
import { Lab, LabModel } from '@app/models/Lab'

import { ModelName } from './ModelName'

export const LabsFeatureModel = types
  .model(ModelName.LabsFeature, {
    api: ApiModel,
    labs: types.array(LabModel),
  })
  .views(self => ({
    get labsAmount(): string {
      return self.labs.length.toString()
    },
  }))
  .actions(self => {
    function setLabs(labs: Lab[]) {
      self.labs.replace(labs)
    }

    function clearLabs() {
      self.labs.clear()
    }

    return { setLabs, clearLabs }
  })

export type LabsFeature = Instance<typeof LabsFeatureModel>

export const initialState = LabsFeatureModel.create({
  api: apiInitialState,
  labs: [],
})
