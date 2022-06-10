import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/styles/ThemedStyles'

import { StylesProps } from './types'

export const styles = (
  { colors, sizes, opacity }: ThemedStyles,
  { loading }: StylesProps,
) =>
  StyleSheet.create({
    container: {
      width: sizes.full,
      paddingHorizontal: sizes.md,
      paddingVertical: sizes.sm,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      opacity: loading ? opacity.inactive : opacity.initial,
      backgroundColor: colors.transparent,
    },
    title: {
      flex: 1,
    },
    icon: {
      marginLeft: sizes.md,
    },
  })
