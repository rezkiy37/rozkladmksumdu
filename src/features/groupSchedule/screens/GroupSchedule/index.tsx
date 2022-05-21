import React, { useCallback, useEffect } from 'react'

import { RouteProp, useRoute } from '@react-navigation/native'
import { observer } from 'mobx-react'

import { useGroupScheduleFeature } from '../../hooks'

import { BackHomeButton } from '@app/components/Button'
import Container from '@app/components/Container'
import ScreenFooter from '@app/components/ScreenFooter'
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
      <Container></Container>

      <ScreenFooter>
        <BackHomeButton />
      </ScreenFooter>
    </>
  )
})

export default GroupScheduleScreen
