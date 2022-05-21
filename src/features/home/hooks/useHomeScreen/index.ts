import { useCallback, useEffect } from 'react'

import { useHomeFeature } from '../useHomeFeature'

export const useHomeScreen = () => {
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

  useEffect(() => {
    uploadGroups()

    uploadScheduleChanges()

    return () => {
      clearScreenContent()
    }
  }, [clearScreenContent, uploadGroups, uploadScheduleChanges])
}
