import React from 'react'
import { View } from 'react-native'

import { useTheme } from '@app/hooks/useTheme'
import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { SeparatorDirection } from './SeparatorDirection'
import { styles } from './styles'
import { Props } from './types'

const Separator: React.FC<Props> = ({
  direction = SeparatorDirection.Vertical,
  style,
  size = null,
}) => {
  const { sizes } = useTheme()

  const themedStyles = useThemedStyles(styles, {
    direction,
    size: size ?? sizes.sm,
  })

  return <View style={[themedStyles.container, style]} />
}

export default Separator
