import React, { useCallback, useEffect } from 'react'
import { Text } from 'react-native'

import { RouteProp, useRoute } from '@react-navigation/native'
import { observer } from 'mobx-react'

import { useGroupScheduleFeature } from '../../hooks'

import { HomeNavigationParams } from '@app/navigation/home/NavigationParams'
import { HomeScreenNames } from '@app/navigation/home/ScreenNames'

const GroupScheduleScreen: React.FC = observer(() => {
  const {
    params: { selectedGroup },
  } = useRoute<RouteProp<HomeNavigationParams, HomeScreenNames.GroupSchedule>>()

  const groupScheduleFeature = useGroupScheduleFeature()

  const uploadScheduleChanges = useCallback(async () => {
    await groupScheduleFeature.uploadGroupSchedules()
  }, [groupScheduleFeature])

  const clearScreenContent = useCallback(() => {
    groupScheduleFeature.clearSelectedGroup()
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

    uploadScheduleChanges()
  }, [groupScheduleFeature.selectedGroup, uploadScheduleChanges])

  return (
    <>
      <Text onPress={clearScreenContent}>Clear</Text>

      <Text onPress={uploadScheduleChanges}>
        {groupScheduleFeature.api.loading ? 'Loading...' : 'Not loading'}
      </Text>

      <Text>{groupScheduleFeature.selectedGroup?.name ?? 'No name'}</Text>
    </>
  )
})

export default GroupScheduleScreen
