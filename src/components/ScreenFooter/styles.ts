import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/Entities/ThemedStyles'

export const styles = ({ colors, sizes }: ThemedStyles) =>
  StyleSheet.create({
    container: {
      width: sizes.full,
      paddingVertical: sizes.sm,
      paddingHorizontal: sizes.lg,
      alignItems: 'center',
      backgroundColor: colors.secondaryBackground,
    },
  })
