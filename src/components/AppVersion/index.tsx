import React from 'react'

import { Caption } from '@app/components/Typography'
import { appVersionService } from '@app/services/appVersion/appVersionService'

// TODO: Use strings
export const AppVersion: React.FC = () => {
  return <Caption>Version: {appVersionService.getAppVersion()}</Caption>
}
