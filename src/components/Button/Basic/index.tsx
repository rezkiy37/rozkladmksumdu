import React from 'react'
import { TouchableOpacity } from 'react-native'

import { strings } from '@app/assets/locale/strings'
import { Caption } from '@app/components/Typography'
import { useTheme } from '@app/hooks/useTheme'
import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'
import { Props, StylesProps } from './types'

const Basic: React.FC<Props> = ({
  style,
  loading = false,
  Icon,
  children,
  ...props
}) => {
  const { opacity } = useTheme()

  const themedStyles = useThemedStyles<ReturnType<typeof styles>, StylesProps>(
    styles,
    {
      loading,
    },
  )

  return (
    <TouchableOpacity
      style={[themedStyles.container, style]}
      activeOpacity={opacity.active}
      disabled={loading}
      {...props}
    >
      <Caption
        style={themedStyles.title}
        numberOfLines={1}
      >
        {loading ? strings.components.button.basic.loading : children}
      </Caption>

      <Icon style={themedStyles.icon} />
    </TouchableOpacity>
  )
}

export default Basic
