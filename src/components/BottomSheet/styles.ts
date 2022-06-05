import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/styles/ThemedStyles'

export const styles = ({ colors, sizes, borderRadius }: ThemedStyles) =>
  StyleSheet.create({
    handle: {
      backgroundColor: colors.secondaryBackground,
      borderTopLeftRadius: borderRadius.md,
      borderTopRightRadius: borderRadius.md,
    },
    contentContainer: {
      flex: 1,
      paddingTop: sizes.xl,
      paddingHorizontal: sizes.lg,
      backgroundColor: colors.secondaryBackground,
    },
  })
