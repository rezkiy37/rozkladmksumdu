import { ThemedStyles } from '@app/types/styles/ThemedStyles'

import { useTheme } from '../useTheme'

export const useThemedStyles = <T, P>(
  styles: (theme: ThemedStyles, props: P) => T,
  props: P = {} as P,
) => {
  const theme = useTheme()

  return styles(theme, props)
}
