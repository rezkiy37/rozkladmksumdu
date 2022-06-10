import { clone, flow, Instance, types, getRoot } from 'mobx-state-tree'

import { days } from '@app/constants/days'
import { ApiModel, initialState as apiInitialState } from '@app/models/Api'
import { Group, GroupModel } from '@app/models/Group'
import {
  GroupScheduleModel,
  initialState as groupScheduleInitialState,
} from '@app/models/GroupSchedule'
import { Store } from '@app/models/Store'
import { groupScheduleApiService } from '@app/services/api'
import { GetGroupScheduleResult } from '@app/services/api/groupSchedule'
import { DayOfWeek } from '@app/types/entities/DayOfWeek'
import { ScheduleType } from '@app/types/entities/ScheduleType'

import { ModelName } from './ModelName'

const SelectedGroupReference = types.maybeNull(
  types.reference(GroupModel, {
    get(id, parent): any {
      const store = getRoot<Store>(parent)

      return store.home.groups.find(group => group.id === id) ?? null
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
      if (self.api.loading) {
        return
      }

      self.api.startLoading()

      try {
        if (!self.selectedGroup?.id) {
          throw new Error('There is not selected group')
        }

        self.groupSchedule.clearDaysSchedule()

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

    // TODO: Rework
    function getDaySchedule(dayOfWeek: DayOfWeek) {
      return self.groupSchedule[dayOfWeek] //.sort((a, b) => a.order - b.order)
    }

    return {
      setSelectedGroup,
      clearSelectedGroup,
      clearScheduleType,
      uploadGroupSchedules,
      getDaySchedule,
    }
  })
  .views(self => ({
    get dayOfWeekList(): DayOfWeek[] {
      return Object.values(days).filter(
        day => self.groupSchedule[day].length > 0,
      )
    },
  }))

export type GroupScheduleFeature = Instance<typeof GroupScheduleFeatureModel>

export const initialState = GroupScheduleFeatureModel.create({
  api: clone(apiInitialState),
  selectedGroup: null,
  scheduleType: null,
  groupSchedule: groupScheduleInitialState,
})
