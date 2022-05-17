import React, { useCallback, useEffect } from 'react'
import { Text } from 'react-native'

import { NavigationProp, useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react'

import { useHomeFeature } from '../../hooks'

import { Group } from '@app/models/Group'
import { HomeNavigationParams } from '@app/navigation/home/NavigationParams'
import { HomeScreenNames } from '@app/navigation/home/ScreenNames'

const HomeScreen: React.FC = observer(() => {
  const { navigate } = useNavigation<NavigationProp<HomeNavigationParams>>()

  const homeFeature = useHomeFeature()

  const uploadGroups = useCallback(async () => {
    await homeFeature.uploadGroups()
  }, [homeFeature])

  const uploadScheduleChanges = useCallback(async () => {
    await homeFeature.uploadScheduleChanges()
  }, [homeFeature])

  const clearScreenContent = useCallback(() => {
    homeFeature.clearGroups()
    homeFeature.clearScheduleChanges()
  }, [homeFeature])

  const navigateToGroupSchedule = useCallback(
    (selectedGroup: Group) => {
      navigate(HomeScreenNames.GroupSchedule, {
        selectedGroup,
      })
    },
    [navigate],
  )

  useEffect(() => {
    uploadGroups()

    uploadScheduleChanges()

    return () => {
      clearScreenContent()
    }
  }, [clearScreenContent, uploadGroups, uploadScheduleChanges])

  return (
    <>
      <Text onPress={uploadGroups}>
        {homeFeature.api.loading ? 'Loading...' : 'Not loading'}
      </Text>

      {homeFeature.groups.map(group => (
        <Text
          key={group.id}
          // eslint-disable-next-line react/jsx-no-bind
          onPress={() => navigateToGroupSchedule(group)}
        >
          {group.name}
        </Text>
      ))}

      <Text>{homeFeature.api.errorMessage}</Text>

      <Text onPress={uploadScheduleChanges}>
        {homeFeature.api.loading ? 'Loading...' : 'Not loading'}
      </Text>

      {homeFeature.scheduleChanges.map(scheduleChange => (
        <Text key={scheduleChange.id}>{scheduleChange.id}</Text>
      ))}

      <Text>{homeFeature.api.errorMessage}</Text>
    </>
  )
})

export default HomeScreen
