import { useContext } from 'react'

import { ThemeContext } from '@app/contexts/ThemeContext'
import { Theme } from '@app/types/Entities/Theme'

export const useTheme = (): Theme => {
  const theme = useContext(ThemeContext)

  if (theme === null) {
    throw new Error('Theme cannot be null, please add a context')
  }

  return theme
}
