import { initialState as groupScheduleFeatureInitialState } from '@app/features/groupSchedule/models/GroupScheduleFeature'
import { initialState as homeFeatureInitialState } from '@app/features/home/models/HomeFeature'
import { initialState as labsInitialState } from '@app/features/labs/models/LabsFeature'
import { StoreModel } from '@app/models/Store'

export const initialStore = StoreModel.create({
  home: homeFeatureInitialState,
  groupSchedule: groupScheduleFeatureInitialState,
  labs: labsInitialState,
})
