import { KeyboardAppearance } from '@app/types/Entities/KeyboardAppearance'

import { ThemeMode } from './ThemeMode'

export const keyboardAppearance: {
  [key in ThemeMode]: KeyboardAppearance
} = {
  [ThemeMode.Light]: 'light',
  [ThemeMode.Dark]: 'dark',
}
