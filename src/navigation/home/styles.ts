import { StyleSheet } from 'react-native'

import { ThemedStyles } from '@app/types/styles/ThemedStyles'

export const styles = ({ colors }: ThemedStyles) =>
  StyleSheet.create({
    header: {
      backgroundColor: colors.secondaryBackground,
    },
    title: {
      color: colors.heading,
    },
  })
