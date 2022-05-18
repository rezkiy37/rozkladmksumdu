import React from 'react'

import { Caption } from '@app/components/Typography'

// TODO: Integrate dynamic app version getting
// TODO: Use strings
const appVersion: string = '0.1'

export const AppVersion: React.FC = () => {
  return <Caption>Version: {appVersion}</Caption>
}
