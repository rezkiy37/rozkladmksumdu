import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/Entities/ThemedStyles'

export const styles = ({ colors, sizes }: ThemedStyles) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: sizes.lg,
      backgroundColor: colors.background,
    },
  })
