import { flow, Instance, types, getRoot } from 'mobx-state-tree'

import { ApiModel, initialState as apiInitialState } from '@app/models/Api'
import { Group, GroupModel } from '@app/models/Group'
import {
  GroupScheduleModel,
  initialState as groupScheduleInitialState,
} from '@app/models/GroupSchedule'
import { Store } from '@app/models/Store'
import { groupScheduleApiService } from '@app/services/api'
import { GetGroupScheduleResult } from '@app/services/api/groupSchedule'
import { ScheduleType } from '@app/types/entities/ScheduleType'

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
    scheduleType: types.maybeNull(
      types.enumeration(ModelName.ScheduleType, [
        ScheduleType.Numerator,
        ScheduleType.Denominator,
      ]),
    ),
    groupSchedule: GroupScheduleModel,
  })
  .actions(self => {
    function setSelectedGroup(group: Group) {
      self.selectedGroup = group
    }

    function clearSelectedGroup() {
      self.selectedGroup = null
    }

    function setScheduleType(scheduleType: ScheduleType) {
      self.scheduleType = scheduleType
    }

    function clearScheduleType() {
      self.scheduleType = null
    }

    const uploadGroupSchedules = flow(function* () {
      self.api.startLoading()

      try {
        if (!self.selectedGroup?.id) {
          throw new Error('There is not selected group')
        }

        const result: GetGroupScheduleResult =
          yield groupScheduleApiService.getGroupSchedule(self.selectedGroup.id)

        setScheduleType(result.meta.scheduleType)

        result.data.forEach(groupSchedule => {
          self.groupSchedule.pushDaySchedule(
            groupSchedule.dayOfWeek,
            groupSchedule,
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
      clearScheduleType,
      uploadGroupSchedules,
    }
  })

export type GroupScheduleFeature = Instance<typeof GroupScheduleFeatureModel>

export const initialState = GroupScheduleFeatureModel.create({
  api: apiInitialState,
  selectedGroup: null,
  scheduleType: null,
  groupSchedule: groupScheduleInitialState,
})
