import React from 'react'
import { Text } from 'react-native'

import { TypographyProps } from '../types'

import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'

const Caption: React.FC<TypographyProps> = ({ children }) => {
  const themedStyles = useThemedStyles(styles)

  return <Text style={themedStyles.caption}>{children}</Text>
}

export default Caption
