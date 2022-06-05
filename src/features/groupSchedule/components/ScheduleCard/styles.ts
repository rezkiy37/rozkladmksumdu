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
  })
