import React, { useCallback } from 'react'

import Basic from '../Basic'

import { strings } from '@app/assets/locale/strings'
import { CollageRouteIcon } from '@app/components/Icon'
import { useLinking } from '@app/hooks/useLinking'

const CollageRoute: React.FC = () => {
  const { openCollageLocation } = useLinking()

  const onRoutePress = useCallback(async () => {
    await openCollageLocation()
  }, [openCollageLocation])

  return (
    <Basic
      Icon={CollageRouteIcon}
      onPress={onRoutePress}
    >
      {strings.components.button.collageRoute.title}
    </Basic>
  )
}

export default CollageRoute
