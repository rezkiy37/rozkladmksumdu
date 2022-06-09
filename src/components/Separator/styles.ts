import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/styles/ThemedStyles'

import { SeparatorDirection } from './SeparatorDirection'
import { StylesProps } from './types'

export const styles = (
  { colors, sizes, borderRadius }: ThemedStyles,
  { direction, size }: StylesProps,
) =>
  StyleSheet.create({
    container: {
      width: direction === SeparatorDirection.Horizontal ? size : sizes.full,
      height: direction === SeparatorDirection.Horizontal ? sizes.full : size,
      borderRadius: borderRadius.sm,
      backgroundColor: colors.background,
    },
  })
