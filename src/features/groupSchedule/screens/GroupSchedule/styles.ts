import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/styles/ThemedStyles'

export const styles = ({ sizes }: ThemedStyles) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: sizes.zero,
      paddingBottom: sizes.lg,
    },
  })
