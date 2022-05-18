import React from 'react'
import { Text } from 'react-native'

import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'

const Paragraph: React.FC = ({ children }) => {
  const themedStyles = useThemedStyles(styles)

  return <Text style={themedStyles.paragraph}>{children}</Text>
}

export default Paragraph
