import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/styles/ThemedStyles'

export const styles = ({ colors, fontSizes, fontWeights }: ThemedStyles) =>
  StyleSheet.create({
    paragraph: {
      color: colors.paragraph,
      fontSize: fontSizes.paragraph,
      fontWeight: fontWeights.paragraph,
    },
  })
