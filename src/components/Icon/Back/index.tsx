import React from 'react'

import Icon from 'react-native-vector-icons/Ionicons'

import { IconProps } from '../types'

import { useTheme } from '@app/hooks/useTheme'

const Lab: React.FC<IconProps> = ({ style }) => {
  const { sizes, colors } = useTheme()

  return (
    <Icon
      style={style}
      name='md-chevron-back-circle-outline'
      size={sizes.icon}
      color={colors.icon}
    />
  )
}

export default Lab
