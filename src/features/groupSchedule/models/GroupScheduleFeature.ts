import { flow, Instance, types, getRoot } from 'mobx-state-tree'

import { ApiModel, initialState as apiInitialState } from '@app/models/Api'
import { Group, GroupModel } from '@app/models/Group'
import {
  GroupScheduleModel,
  initialState as groupScheduleInitialState,
} from '@app/models/GroupSchedule'
import { Schedule } from '@app/models/Schedule'
import { Store } from '@app/models/Store'
import { groupScheduleApiService } from '@app/services/api'
import { convertToSchedule } from '@app/utils/converters'

import { ModelName } from './ModelName'

const SelectedGroupReference = types.maybeNull(
  types.reference(GroupModel, {
    get(id, parent): any {
      const store = getRoot(parent)

      return (store as Store).home.groups.find(group => group.id === id) ?? null
    },
    set(group) {
      return group.id
    },
  }),
)

export const GroupScheduleFeatureModel = types
  .model(ModelName.GroupScheduleFeature, {
    api: ApiModel,
    selectedGroup: SelectedGroupReference,
    groupSchedule: GroupScheduleModel,
  })
  .actions(self => {
    function setSelectedGroup(group: Group) {
      self.selectedGroup = group
    }

    function clearSelectedGroup() {
      self.selectedGroup = null
    }

    const uploadGroupSchedules = flow(function* () {
      self.api.startLoading()

      try {
        if (!self.selectedGroup?.id) {
          throw new Error('There is not selected group')
        }

        const groupSchedules: Schedule[] =
          yield groupScheduleApiService.getGroupSchedule(self.selectedGroup.id)

        groupSchedules.forEach(groupSchedule => {
          self.groupSchedule.pushDaySchedule(
            groupSchedule.dayOfWeek,
            convertToSchedule(groupSchedule),
          )
        })
      } catch (e) {
        const errorMessage = String(e)

        self.api.setErrorMessage(errorMessage)
      } finally {
        self.api.finishLoading()
      }
    })

    return {
      setSelectedGroup,
      clearSelectedGroup,
      uploadGroupSchedules,
    }
  })

export type GroupScheduleFeature = Instance<typeof GroupScheduleFeatureModel>

export const initialState = GroupScheduleFeatureModel.create({
  api: apiInitialState,
  selectedGroup: null,
  groupSchedule: groupScheduleInitialState,
})
