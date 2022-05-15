import { createMstDebugger } from 'mobx-flipper'
import { addMiddleware } from 'mobx-state-tree'

import { initialState as groupScheduleFeatureInitialState } from '@app/features/groupSchedule/models/GroupScheduleFeature'
import { initialState as homeFeatureInitialState } from '@app/features/home/models/HomeFeature'
import { initialState as labsInitialState } from '@app/features/labs/models/LabsFeature'
import { StoreModel } from '@app/models/Store'

export const store = StoreModel.create({
  home: homeFeatureInitialState,
  // @ts-expect-error
  groupSchedule: groupScheduleFeatureInitialState,
  labs: labsInitialState,
})

if (__DEV__) {
  addMiddleware(store, createMstDebugger(store))
}
