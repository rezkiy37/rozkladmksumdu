import { useCallback } from 'react'
import { Keyboard } from 'react-native'

import { keyboardHideDuration } from '@app/constants/keyboardHideDuration'
import { useNavigationActions } from '@app/hooks/useNavigationActions/index'
import { Group } from '@app/models/Group'

import { useHomeFeature } from '../useHomeFeature'

export const useHomeScreenHandlers = () => {
  const { navigateToGroupSchedule, navigateToLabs } = useNavigationActions()

  const { showGroups, hideGroups, changeGroupsSearch, clearGroupsSearch } =
    useHomeFeature()

  const onShowGroupsPress = useCallback(() => {
    showGroups()
  }, [showGroups])

  const onGroupsBottomSheetClose = useCallback(() => {
    hideGroups()

    clearGroupsSearch()

    Keyboard.dismiss()
  }, [hideGroups, clearGroupsSearch])

  const onGroupSelect = useCallback(
    (group: Group) => {
      hideGroups()

      setTimeout(() => {
        navigateToGroupSchedule(group)
      }, keyboardHideDuration)
    },
    [hideGroups, navigateToGroupSchedule],
  )

  const onShowLabsPress = useCallback(() => {
    navigateToLabs()
  }, [navigateToLabs])

  const onChangeGroupsSearch = useCallback(
    (groupName: string) => {
      changeGroupsSearch(groupName)
    },
    [changeGroupsSearch],
  )

  return {
    onChangeGroupsSearch,
    onGroupsBottomSheetClose,
    onShowGroupsPress,
    onGroupSelect,
    onShowLabsPress,
  }
}
