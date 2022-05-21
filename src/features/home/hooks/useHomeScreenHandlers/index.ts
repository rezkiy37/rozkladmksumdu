import { useCallback } from 'react'

import { useHomeFeature } from '../useHomeFeature'

import { useNavigationActions } from '@app/hooks/useNavigationActions/index'
import { Group } from '@app/models/Group'

export const useHomeScreenHandlers = () => {
  const { navigateToGroupSchedule, navigateToLabs } = useNavigationActions()

  const { showGroups, hideGroups } = useHomeFeature()

  const onShowGroupsPress = useCallback(() => {
    showGroups()
  }, [showGroups])

  const onGroupsBottomSheetClose = useCallback(() => {
    hideGroups()
  }, [hideGroups])

  const onGroupSelect = useCallback(
    (group: Group) => {
      hideGroups()

      navigateToGroupSchedule(group)
    },
    [hideGroups, navigateToGroupSchedule],
  )

  const onShowLabsPress = useCallback(() => {
    navigateToLabs()
  }, [navigateToLabs])

  return {
    onGroupsBottomSheetClose,
    onShowGroupsPress,
    onGroupSelect,
    onShowLabsPress,
  }
}
