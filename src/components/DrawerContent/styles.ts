import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/Entities/ThemedStyles'

export const styles = ({ colors, sizes }: ThemedStyles) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: sizes.zero,
      paddingVertical: sizes.lg,
      alignItems: 'center',
      backgroundColor: colors.secondaryBackground,
    },
    logo: {
      width: sizes.logo,
      height: sizes.logo,
      marginBottom: sizes.xl,
    },
    actionContainer: {
      width: sizes.full,
      marginTop: sizes.auto,
    },
    changeThemeModeContainer: {
      marginBottom: sizes.lg,
    },
  })
