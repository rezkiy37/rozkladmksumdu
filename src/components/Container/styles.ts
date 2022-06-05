import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/styles/ThemedStyles'

export const styles = ({ colors, sizes }: ThemedStyles) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: sizes.lg,
      paddingHorizontal: sizes.lg,
      backgroundColor: colors.background,
    },
  })
