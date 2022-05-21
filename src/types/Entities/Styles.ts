import { KeyboardAppearance } from '@app/types/Entities/KeyboardAppearance'
import { ThemeMode } from '@app/utils/styles/ThemeMode'

import { Colors } from './Colors'
import { Theme } from './Theme'

export type Styles = Omit<
  Theme,
  'mode' | 'isLightMode' | 'toggleThemeMode' | 'colors' | 'keyboardAppearance'
> & {
  colors: {
    [key in ThemeMode]: Colors
  }
  keyboardAppearance: {
    [key in ThemeMode]: KeyboardAppearance
  }
}
