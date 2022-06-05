import { ThemeMode } from '@app/utils/styles/ThemeMode'

import { BorderRadius } from './BorderRadius'
import { Colors } from './Colors'
import { FontSizes } from './FontSizes'
import { FontWeights } from './FontWeights'
import { KeyboardAppearance } from './KeyboardAppearance'
import { Opacity } from './Opacity'
import { Shadow } from './Shadow'
import { Sizes } from './Sizes'

export type Theme = {
  mode: ThemeMode
  isLightMode: boolean
  colors: Colors
  fontSizes: FontSizes
  fontWeights: FontWeights
  opacity: Opacity
  sizes: Sizes
  borderRadius: BorderRadius
  shadow: Shadow
  keyboardAppearance: KeyboardAppearance
  toggleThemeMode: () => void
}
