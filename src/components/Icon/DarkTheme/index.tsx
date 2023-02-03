import React from 'react'

import Icon from 'react-native-vector-icons/Feather'

import { useTheme } from '@app/hooks/useTheme'

import { IconProps } from '../types'

const DarkTheme: React.FC<IconProps> = ({ style }) => {
  const { sizes, colors } = useTheme()

  return (
    <Icon
      style={style}
      name='moon'
      size={sizes.icon}
      color={colors.icon}
    />
  )
}

export default DarkTheme
