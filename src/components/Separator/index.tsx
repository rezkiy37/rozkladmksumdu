import React from 'react'
import { View } from 'react-native'

import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { SeparatorDirection } from './SeparatorDirection'
import { styles } from './styles'
import { Props } from './types'

const Separator: React.FC<Props> = ({
  direction = SeparatorDirection.Vertical,
  style,
}) => {
  const themedStyles = useThemedStyles(styles, {
    direction,
  })

  return <View style={[themedStyles.container, style]} />
}

export default Separator
