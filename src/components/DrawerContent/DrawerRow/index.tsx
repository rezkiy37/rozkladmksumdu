import React from 'react'
import { View } from 'react-native'

import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'
import { Props } from './types'

const DrawerRow: React.FC<Props> = ({ containerStyle, children }) => {
  const themedStyles = useThemedStyles(styles)

  return (
    <View style={[themedStyles.container, containerStyle]}>{children}</View>
  )
}

export default DrawerRow
