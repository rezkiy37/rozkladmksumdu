import { Config as RNConfig } from 'react-native-config'

// TODO: Move under constants folder and separate
export const Config = {
  apiBaseUrl: RNConfig.API_BASE_URL,
  endpoints: {
    groups: '/groups',
    groupSchedule: '/schedule/:groupId',
    scheduleChanges: '/scheduleChanges',
    scheduleLabs: '/scheduleLabs',
  },
}
