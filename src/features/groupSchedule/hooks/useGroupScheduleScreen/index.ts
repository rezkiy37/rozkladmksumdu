import { useCallback, useEffect } from 'react'

import { RouteProp, useRoute } from '@react-navigation/native'

import { HomeNavigationParams } from '@app/navigation/home/NavigationParams'
import { HomeScreenNames } from '@app/navigation/home/ScreenNames'

import { useGroupScheduleFeature } from '../useGroupScheduleFeature'

// TODO: Figure the situation with unmounting out
export const useGroupScheduleScreen = () => {
  const {
    params: { selectedGroup },
  } = useRoute<RouteProp<HomeNavigationParams, HomeScreenNames.GroupSchedule>>()

  const groupScheduleFeature = useGroupScheduleFeature()

  const uploadGroupSchedules = useCallback(async () => {
    await groupScheduleFeature.uploadGroupSchedules()
  }, [groupScheduleFeature])

  const clearScreenContent = useCallback(() => {
    groupScheduleFeature.clearSelectedGroup()
    groupScheduleFeature.clearScheduleType()
    groupScheduleFeature.groupSchedule.clearDaysSchedule()
  }, [groupScheduleFeature])

  useEffect(() => {
    groupScheduleFeature.setSelectedGroup(selectedGroup)

    return () => {
      clearScreenContent()
    }
  }, [groupScheduleFeature, selectedGroup, clearScreenContent])

  useEffect(() => {
    if (groupScheduleFeature.selectedGroup === null) {
      return
    }

    uploadGroupSchedules()
  }, [groupScheduleFeature.selectedGroup, uploadGroupSchedules])
}
