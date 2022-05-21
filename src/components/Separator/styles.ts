import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/Entities/ThemedStyles'

export const styles = ({ colors, sizes, borderRadius }: ThemedStyles) =>
  StyleSheet.create({
    container: {
      width: sizes.full,
      height: sizes.listItemSeparator,
      borderRadius: borderRadius.sm,
      backgroundColor: colors.background,
    },
  })
