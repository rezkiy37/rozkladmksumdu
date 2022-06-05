import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/styles/ThemedStyles'

export const styles = ({ colors, sizes, borderRadius, shadow }: ThemedStyles) =>
  StyleSheet.create({
    wrapper: {
      width: sizes.full,
      paddingHorizontal: sizes.lg,
    },
    container: {
      width: sizes.full,
      marginBottom: sizes.lg,
      paddingVertical: sizes.sm,
      borderRadius: borderRadius.sm,
      backgroundColor: colors.secondaryBackground,
      ...shadow,
    },
    title: {
      textAlign: 'center',
    },
  })
