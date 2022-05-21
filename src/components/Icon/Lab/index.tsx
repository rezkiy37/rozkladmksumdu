import React from 'react'

import Icon from 'react-native-vector-icons/Entypo'

import { IconProps } from '../types'

import { useTheme } from '@app/hooks/useTheme'

const Lab: React.FC<IconProps> = ({ style }) => {
  const { sizes, colors } = useTheme()

  return (
    <Icon
      style={style}
      name='lab-flask'
      size={sizes.icon}
      color={colors.icon}
    />
  )
}

export default Lab
