import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome5'

import { IconProps } from '../types'

import { useTheme } from '@app/hooks/useTheme'

const CollageRoute: React.FC<IconProps> = ({ style }) => {
  const { sizes, colors } = useTheme()

  return (
    <Icon
      style={style}
      name='route'
      size={sizes.icon}
      color={colors.icon}
    />
  )
}

export default CollageRoute
