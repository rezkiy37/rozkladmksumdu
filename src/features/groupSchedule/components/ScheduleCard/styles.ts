import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/styles/ThemedStyles'

export const styles = ({ colors, sizes, borderRadius }: ThemedStyles) =>
  StyleSheet.create({
    wrapper: {
      width: sizes.screen,
      height: sizes.full,
      alignContent: 'center',
    },
    container: {
      width: sizes.screen - sizes.lg * 2,
      height: sizes.full,
      borderRadius: borderRadius.md,
      backgroundColor: colors.secondaryBackground,
    },
    contentContainer: {
      width: sizes.full,
      paddingHorizontal: sizes.sm,
      paddingVertical: sizes.lg,
    },
    subheading: {
      marginBottom: sizes.xl,
      textAlign: 'center',
    },
    separator: {
      backgroundColor: colors.transparent,
    },
  })
