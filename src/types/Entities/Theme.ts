import { ThemeMode } from '@app/utils/styles/ThemeMode'

import { Colors } from './Colors'
import { FontSizes } from './FontSizes'
import { FontWeights } from './FontWeights'
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
  shadow: Shadow
  toggleThemeMode: () => void
}
