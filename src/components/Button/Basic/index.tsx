import React from 'react'
import { TouchableOpacity } from 'react-native'

import { useTheme } from '@app/hooks/useTheme'
import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'
import { Props } from './types'

const Basic: React.FC<Props> = ({ style, children, ...props }) => {
  const { opacity } = useTheme()

  const themedStyles = useThemedStyles(styles)

  return (
    <TouchableOpacity
      style={[themedStyles.container, style]}
      activeOpacity={opacity.active}
      {...props}
    >
      {children}
    </TouchableOpacity>
  )
}

export default Basic
