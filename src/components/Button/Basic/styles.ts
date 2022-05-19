import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/Entities/ThemedStyles'

export const styles = ({ colors, sizes }: ThemedStyles) =>
  StyleSheet.create({
    container: {
      width: sizes.full,
      paddingHorizontal: sizes.md,
      paddingVertical: sizes.sm,
      justifyContent: 'center',
      backgroundColor: colors.transparent,
    },
  })
