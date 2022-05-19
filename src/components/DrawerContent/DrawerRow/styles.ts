import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/Entities/ThemedStyles'

export const styles = ({ colors, sizes }: ThemedStyles) =>
  StyleSheet.create({
    container: {
      width: sizes.full,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
  })
