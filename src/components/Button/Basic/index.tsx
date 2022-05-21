import React from 'react'
import { TouchableOpacity } from 'react-native'

import { Caption } from '@app/components/Typography'
import { useTheme } from '@app/hooks/useTheme'
import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'
import { Props } from './types'

const Basic: React.FC<Props> = ({ style, Icon, children, ...props }) => {
  const { opacity } = useTheme()

  const themedStyles = useThemedStyles(styles)

  return (
    <TouchableOpacity
      style={[themedStyles.container, style]}
      activeOpacity={opacity.active}
      {...props}
    >
      <Caption
        style={themedStyles.title}
        numberOfLines={1}
      >
        {children}
      </Caption>

      <Icon style={themedStyles.icon} />
    </TouchableOpacity>
  )
}

export default Basic
