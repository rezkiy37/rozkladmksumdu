import React from 'react'

import Icon from 'react-native-vector-icons/Entypo'

import { useTheme } from '@app/hooks/useTheme'

import { IconProps } from '../types'

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
