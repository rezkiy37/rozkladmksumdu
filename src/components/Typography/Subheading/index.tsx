import React from 'react'
import { Text } from 'react-native'

import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'

const Subheading: React.FC = ({ children }) => {
  const themedStyles = useThemedStyles(styles)

  return <Text style={themedStyles.subheading}>{children}</Text>
}

export default Subheading
