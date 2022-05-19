import React from 'react'
import { Text } from 'react-native'

import { TypographyProps } from '../types'

import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'

const Heading: React.FC<TypographyProps> = ({ style, children, ...props }) => {
  const themedStyles = useThemedStyles(styles)

  return (
    <Text
      style={[themedStyles.heading, style]}
      {...props}
    >
      {children}
    </Text>
  )
}

export default Heading
