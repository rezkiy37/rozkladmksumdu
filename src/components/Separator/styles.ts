import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/styles/ThemedStyles'

import { SeparatorDirection } from './SeparatorDirection'
import { StylesProps } from './types'

export const styles = (
  { colors, sizes, borderRadius }: ThemedStyles,
  { direction }: StylesProps,
) =>
  StyleSheet.create({
    container: {
      width:
        direction === SeparatorDirection.Horizontal
          ? sizes.listItemSeparator
          : sizes.full,
      height:
        direction === SeparatorDirection.Horizontal
          ? sizes.full
          : sizes.listItemSeparator,
      borderRadius: borderRadius.sm,
      backgroundColor: colors.background,
    },
  })
