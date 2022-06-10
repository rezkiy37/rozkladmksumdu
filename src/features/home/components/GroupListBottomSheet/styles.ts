import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/styles/ThemedStyles'

export const styles = ({
  colors,
  sizes,
  fontSizes,
  borderRadius,
  shadow,
}: ThemedStyles) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      paddingBottom: sizes.lg * 2,
    },
    input: {
      width: sizes.full,
      marginBottom: sizes.lg,
      paddingHorizontal: sizes.lg,
      paddingVertical: sizes.md,
      color: colors.paragraph,
      fontSize: fontSizes.paragraph,
      borderRadius: borderRadius.md,
      backgroundColor: colors.background,
      ...shadow,
    },
  })
