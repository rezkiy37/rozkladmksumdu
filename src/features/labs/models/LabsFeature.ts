import { flow, Instance, types } from 'mobx-state-tree'

import { ApiModel, initialState as apiInitialState } from '@app/models/Api'
import { Lab, LabModel } from '@app/models/Lab'
import { scheduleLabsApiService } from '@app/services/api'
import { convertToLab } from '@app/utils/converters'

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

    const uploadLabs = flow(function* () {
      self.api.startLoading()

      try {
        const labs: Lab[] = yield scheduleLabsApiService.getScheduleLabs()

        setLabs(labs.map(convertToLab))
      } catch (e) {
        const errorMessage = String(e)

        self.api.setErrorMessage(errorMessage)
      } finally {
        self.api.finishLoading()
      }
    })

    return { setLabs, clearLabs, uploadLabs }
  })

export type LabsFeature = Instance<typeof LabsFeatureModel>

export const initialState = LabsFeatureModel.create({
  api: apiInitialState,
  labs: [],
})
