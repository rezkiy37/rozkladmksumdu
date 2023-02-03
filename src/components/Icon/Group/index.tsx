import React from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'

import { useTheme } from '@app/hooks/useTheme'

import { IconProps } from '../types'

const Group: React.FC<IconProps> = ({ style }) => {
  const { sizes, colors } = useTheme()

  return (
    <Icon
      style={style}
      name='group'
      size={sizes.icon}
      color={colors.icon}
    />
  )
}

export default Group
