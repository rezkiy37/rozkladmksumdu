import React from 'react'
import { View } from 'react-native'

import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'

const Separator: React.FC = () => {
  const themedStyles = useThemedStyles(styles)

  return <View style={themedStyles.container} />
}

export default Separator
