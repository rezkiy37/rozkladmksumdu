import { Instance, types } from 'mobx-state-tree'

import { ApiModel, initialState as apiInitialState } from '@app/models/Api'
import { Group, GroupModel } from '@app/models/Group'
import { Schedule, ScheduleModel } from '@app/models/Schedule'

import { ModelName } from './ModelName'

export const GroupScheduleFeatureModel = types
  .model(ModelName.GroupScheduleFeature, {
    api: ApiModel,
    selectedGroup: types.maybeNull(GroupModel),
    groupSchedules: types.array(ScheduleModel),
  })
  .actions(self => {
    function setGroup(group: Group) {
      self.selectedGroup = group
    }

    function clearGroup() {
      self.selectedGroup = null
    }

    function setGroupSchedules(groupSchedules: Schedule[]) {
      self.groupSchedules.replace(groupSchedules)
    }

    function clearGroupSchedules() {
      self.groupSchedules.clear()
    }

    return { setGroup, clearGroup, setGroupSchedules, clearGroupSchedules }
  })

export type GroupScheduleFeature = Instance<typeof GroupScheduleFeatureModel>

export const initialState = GroupScheduleFeatureModel.create({
  api: apiInitialState,
  selectedGroup: null,
  groupSchedules: [],
})
