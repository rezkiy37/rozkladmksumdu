import { Instance, types } from 'mobx-state-tree'

import { ApiModel, initialState as apiInitialState } from '@app/models/Api'
import { Group, GroupModel } from '@app/models/Group'
import { ScheduleChange, ScheduleChangeModel } from '@app/models/ScheduleChange'

import { ModelName } from './ModelName'

export const HomeFeatureModel = types
  .model(ModelName.HomeFeature, {
    api: ApiModel,
    groups: types.array(GroupModel),
    scheduleChanges: types.array(ScheduleChangeModel),
  })
  .views(self => ({
    get scheduleChangesAmount(): string {
      return self.scheduleChanges.length.toString()
    },
  }))
  .actions(self => {
    function setGroups(groups: Group[]) {
      self.groups.replace(groups)
    }

    function clearGroups() {
      self.groups.clear()
    }

    function setScheduleChanges(scheduleChanges: ScheduleChange[]) {
      self.scheduleChanges.replace(scheduleChanges)
    }

    function clearScheduleChanges() {
      self.scheduleChanges.clear()
    }

    return { setGroups, clearGroups, setScheduleChanges, clearScheduleChanges }
  })

export type HomeFeature = Instance<typeof HomeFeatureModel>

export const initialState = HomeFeatureModel.create({
  api: apiInitialState,
  groups: [],
  scheduleChanges: [],
})
