import { useTheme } from '../useTheme'

import { ThemedStyles } from '@app/types/Entities/ThemedStyles'

export const useThemedStyles = <T>(styles: (theme: ThemedStyles) => T) => {
  const theme = useTheme()

  return styles(theme)
}
