import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/Entities/ThemedStyles'

export const styles = ({ colors, sizes }: ThemedStyles) =>
  StyleSheet.create({
    container: {
      height: sizes.bottomSheetHeight,
      backgroundColor: colors.secondaryBackground,
    },
    contentContainer: {
      width: sizes.full,
      height: sizes.full,
      paddingTop: sizes.xl,
      paddingHorizontal: sizes.lg,
    },
  })
