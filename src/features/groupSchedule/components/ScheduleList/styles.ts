import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/styles/ThemedStyles'

export const styles = ({ sizes }: ThemedStyles) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      height: sizes.full,
      paddingHorizontal: sizes.lg,
    },
  })
