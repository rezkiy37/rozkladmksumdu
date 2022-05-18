import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/Entities/ThemedStyles'

export const styles = ({ colors, fontSizes, fontWeights }: ThemedStyles) =>
  StyleSheet.create({
    caption: {
      color: colors.caption,
      fontSize: fontSizes.caption,
      fontWeight: fontWeights.caption,
    },
  })
