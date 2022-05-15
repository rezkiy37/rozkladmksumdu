import { flow, Instance, types } from 'mobx-state-tree'

import { ApiModel, initialState as apiInitialState } from '@app/models/Api'
import { Group, GroupModel } from '@app/models/Group'
import { ScheduleChange, ScheduleChangeModel } from '@app/models/ScheduleChange'
import { groupsApiService, scheduleChangesApiService } from '@app/services/api'
import { convertToGroup, convertToScheduleChange } from '@app/utils/converters'

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

    const uploadGroups = flow(function* () {
      self.api.startLoading()

      try {
        const groups: Group[] = yield groupsApiService.getGroups()

        setGroups(groups.map(convertToGroup))
      } catch (e) {
        const errorMessage = String(e)

        self.api.setErrorMessage(errorMessage)
      } finally {
        self.api.finishLoading()
      }
    })

    const uploadScheduleChanges = flow(function* () {
      self.api.startLoading()

      try {
        const scheduleChanges: ScheduleChange[] =
          yield scheduleChangesApiService.getScheduleChanges()

        setScheduleChanges(scheduleChanges.map(convertToScheduleChange))
      } catch (e) {
        const errorMessage = String(e)

        self.api.setErrorMessage(errorMessage)
      } finally {
        self.api.finishLoading()
      }
    })

    return {
      setGroups,
      clearGroups,
      setScheduleChanges,
      clearScheduleChanges,
      uploadScheduleChanges,
      uploadGroups,
    }
  })

export type HomeFeature = Instance<typeof HomeFeatureModel>

export const initialState = HomeFeatureModel.create({
  api: apiInitialState,
  groups: [],
  scheduleChanges: [],
})
