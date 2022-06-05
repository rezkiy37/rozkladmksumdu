import { useTheme } from '../useTheme'

import { ThemedStyles } from '@app/types/styles/ThemedStyles'

export const useThemedStyles = <T, P>(
  styles: (theme: ThemedStyles, props: P) => T,
  props: P = {} as P,
) => {
  const theme = useTheme()

  return styles(theme, props)
}
