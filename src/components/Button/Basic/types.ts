import { TouchableOpacityProps } from 'react-native'

import { IconProps } from '@app/components/Icon/types'

export type Props = TouchableOpacityProps & {
  Icon: React.FC<IconProps>
}
