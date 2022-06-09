import { ViewStyle } from 'react-native'

import { SeparatorDirection } from './SeparatorDirection'

export type Props = {
  direction?: SeparatorDirection
  size?: number
  style?: ViewStyle
}

export type StylesProps = {
  direction: SeparatorDirection
  size: number
}
