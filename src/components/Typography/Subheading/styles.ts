import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/styles/ThemedStyles'

export const styles = ({ colors, fontSizes, fontWeights }: ThemedStyles) =>
  StyleSheet.create({
    subheading: {
      color: colors.subheading,
      fontSize: fontSizes.subheading,
      fontWeight: fontWeights.subheading,
    },
  })
