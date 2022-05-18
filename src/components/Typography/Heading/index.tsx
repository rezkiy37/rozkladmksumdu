import React from 'react'
import { Text } from 'react-native'

import { TypographyProps } from '../types'

import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'

const Heading: React.FC<TypographyProps> = ({ children }) => {
  const themedStyles = useThemedStyles(styles)

  return <Text style={themedStyles.heading}>{children}</Text>
}

export default Heading
