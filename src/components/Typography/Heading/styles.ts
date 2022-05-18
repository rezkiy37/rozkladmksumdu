import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/Entities/ThemedStyles'

export const styles = ({ colors, fontSizes, fontWeights }: ThemedStyles) =>
  StyleSheet.create({
    heading: {
      color: colors.heading,
      fontSize: fontSizes.heading,
      fontWeight: fontWeights.heading,
    },
  })
