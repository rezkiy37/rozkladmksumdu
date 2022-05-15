import { Group } from '@app/models/Group'

import { HomeScreenNames } from './ScreenNames'

export type HomeNavigationParams = {
  [HomeScreenNames.Home]: undefined
  [HomeScreenNames.GroupSchedule]: {
    selectedGroup: Group
  }
  [HomeScreenNames.Labs]: undefined
}
