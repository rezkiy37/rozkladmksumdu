import React from 'react'

import { strings } from '@app/assets/locale/strings'
import { Caption } from '@app/components/Typography'
import { appVersionService } from '@app/services/appVersion/appVersionService'

export const AppVersion: React.FC = () => {
  return (
    <Caption>
      {strings.formatString(
        strings.components.appVersion.title,
        appVersionService.getAppVersion(),
      )}
    </Caption>
  )
}
