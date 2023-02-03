import React from 'react'

import Icon from 'react-native-vector-icons/Ionicons'

import { useTheme } from '@app/hooks/useTheme'

import { IconProps } from '../types'

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
