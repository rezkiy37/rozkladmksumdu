import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/Entities/ThemedStyles'

export const styles = ({ colors, sizes, borderRadius, shadow }: ThemedStyles) =>
  StyleSheet.create({
    container: {
      borderColor: colors.primary,
      marginBottom: sizes.lg,
      borderRadius: borderRadius.md,
      backgroundColor: colors.secondaryBackground,
      ...shadow,
    },
  })
