import { ThemeMode } from '@app/utils/styles/ThemeMode'

import { Colors } from './Colors'
import { Theme } from './Theme'

export type Styles = Omit<
  Theme,
  'mode' | 'isLightMode' | 'toggleThemeMode' | 'colors'
> & {
  colors: {
    [key in ThemeMode]: Colors
  }
}
