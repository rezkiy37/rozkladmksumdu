import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/styles/ThemedStyles'

export const styles = ({ colors, sizes, borderRadius }: ThemedStyles) =>
  StyleSheet.create({
    container: {
      width: sizes.full,
      padding: sizes.sm,
      borderRadius: borderRadius.sm,
      backgroundColor: colors.background,
    },
    header: {
      width: sizes.full,
      marginBottom: sizes.sm,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    subjectTitle: {
      marginBottom: sizes.sm,
    },
    cancelledLessonWarning: {
      color: colors.warning,
    },
  })
