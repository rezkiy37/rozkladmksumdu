import { useCallback } from 'react'

import { useNavigation } from '@react-navigation/native'

import { Group } from '@app/models/Group'
import { HomeScreenNames } from '@app/navigation/home/ScreenNames'

import { NavigationParamList } from './types'

export const useNavigationActions = () => {
  const { navigate, goBack: nativeGoBack } =
    useNavigation<NavigationParamList>()

  const navigateToGroupSchedule = useCallback(
    (group: Group) => {
      navigate(HomeScreenNames.GroupSchedule, {
        selectedGroup: group,
      })
    },
    [navigate],
  )

  const navigateToLabs = useCallback(() => {
    navigate(HomeScreenNames.Labs)
  }, [navigate])

  const goBack = useCallback(() => {
    nativeGoBack()
  }, [nativeGoBack])

  return {
    navigateToGroupSchedule,
    navigateToLabs,
    goBack,
  }
}
