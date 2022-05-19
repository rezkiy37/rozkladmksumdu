import { getVersion } from 'react-native-device-info'

export const appVersionService = {
  getAppVersion: (): string => {
    return getVersion()
  },
}
