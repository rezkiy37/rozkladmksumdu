import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import { useTheme } from '@app/hooks/useTheme'

import { styles } from './styles'
import { Props } from './types'

const Loader: React.FC<Props> = ({ containerStyle, loading }) => {
  const theme = useTheme()

  if (!loading) {
    return null
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <ActivityIndicator
        size={theme.sizes.xl}
        color={theme.colors.primary}
      />
    </View>
  )
}

export default Loader
