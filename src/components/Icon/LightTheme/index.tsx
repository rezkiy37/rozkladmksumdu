import React from 'react'

import Icon from 'react-native-vector-icons/Entypo'

import { IconProps } from '../types'

import { useTheme } from '@app/hooks/useTheme'

const LightTheme: React.FC<IconProps> = ({ style }) => {
  const { sizes, colors } = useTheme()

  return (
    <Icon
      style={style}
      name='light-up'
      size={sizes.icon}
      color={colors.icon}
    />
  )
}

export default LightTheme
