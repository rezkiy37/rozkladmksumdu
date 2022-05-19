import React, { useCallback } from 'react'

import Basic from '../Basic'

import { CollageRouteIcon } from '@app/components/Icon'
import { Caption } from '@app/components/Typography'
import { useLinking } from '@app/hooks/useLinking'
import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'

// TODO: Use strings
const CollageRoute: React.FC = () => {
  const themedStyles = useThemedStyles(styles)

  const { openCollageLocation } = useLinking()

  const onRoutePress = useCallback(async () => {
    await openCollageLocation()
  }, [openCollageLocation])

  return (
    <Basic
      style={themedStyles.container}
      onPress={onRoutePress}
    >
      <Caption
        style={themedStyles.title}
        numberOfLines={1}
      >
        Collage route
      </Caption>

      <CollageRouteIcon style={themedStyles.icon} />
    </Basic>
  )
}

export default CollageRoute
