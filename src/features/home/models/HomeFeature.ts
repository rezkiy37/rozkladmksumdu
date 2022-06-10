import { clone, flow, Instance, types } from 'mobx-state-tree'

import { ApiModel, initialState as apiInitialState } from '@app/models/Api'
import { Group, GroupModel } from '@app/models/Group'
import { ScheduleChange, ScheduleChangeModel } from '@app/models/ScheduleChange'
import { groupsApiService, scheduleChangesApiService } from '@app/services/api'
import { GetGroupsResult } from '@app/services/api/groups'
import { GetScheduleChangesResult } from '@app/services/api/scheduleChanges'

import { ModelName } from './ModelName'

export const HomeFeatureModel = types
  .model(ModelName.HomeFeature, {
    groupsApi: ApiModel,
    scheduleChangesApi: ApiModel,
    groupsSearch: types.string,
    groupsVisible: types.boolean,
    groups: types.array(GroupModel),
    scheduleChanges: types.array(ScheduleChangeModel),
  })
  .views(self => ({
    get scheduleChangesAmount(): string {
      return self.scheduleChanges.length.toString()
    },
    get searchedGroups(): Group[] {
      if (self.groupsSearch === '') {
        return self.groups
      }

      return self.groups.filter(({ name }) => name.includes(self.groupsSearch))
    },
  }))
  .actions(self => {
    function changeGroupsSearch(groupName: string) {
      self.groupsSearch = groupName
    }

    function clearGroupsSearch() {
      self.groupsSearch = ''
    }

    function showGroups() {
      self.groupsVisible = true
    }

    function hideGroups() {
      self.groupsVisible = false
    }

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
      if (self.groupsApi.loading) {
        return
      }

      self.groupsApi.startLoading()

      try {
        const result: GetGroupsResult = yield groupsApiService.getGroups()

        setGroups(result.data)
      } catch (e) {
        const errorMessage = String(e)

        self.groupsApi.setErrorMessage(errorMessage)
      } finally {
        self.groupsApi.finishLoading()
      }
    })

    const uploadScheduleChanges = flow(function* () {
      if (self.scheduleChangesApi.loading) {
        return
      }

      self.scheduleChangesApi.startLoading()

      try {
        const result: GetScheduleChangesResult =
          yield scheduleChangesApiService.getScheduleChanges()

        setScheduleChanges(result.data)
      } catch (e) {
        const errorMessage = String(e)

        self.scheduleChangesApi.setErrorMessage(errorMessage)
      } finally {
        self.scheduleChangesApi.finishLoading()
      }
    })

    return {
      changeGroupsSearch,
      clearGroupsSearch,
      clearGroups,
      clearScheduleChanges,
      uploadScheduleChanges,
      uploadGroups,
      showGroups,
      hideGroups,
    }
  })

export type HomeFeature = Instance<typeof HomeFeatureModel>

export const initialState = HomeFeatureModel.create({
  groupsApi: clone(apiInitialState),
  scheduleChangesApi: clone(apiInitialState),
  groupsVisible: false,
  groupsSearch: '',
  groups: [],
  scheduleChanges: [],
})
