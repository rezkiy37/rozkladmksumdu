import { Dimensions } from 'react-native'

import { Sizes } from '@app/types/Entities/Sizes'

export const sizes: Sizes = {
  zero: 0,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  logo: 96,
  icon: 24,
  bottomSheetHeight: Dimensions.get('screen').height * 0.7,
  '1/2': '50%',
  '1/3': '33.333%',
  '2/3': '66.666%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  full: '100%',
  auto: 'auto',
}
