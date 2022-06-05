import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/styles/ThemedStyles'

export const styles = ({ sizes }: ThemedStyles) =>
  StyleSheet.create({
    container: {
      marginBottom: sizes.lg,
      paddingHorizontal: sizes.zero,
    },
  })
