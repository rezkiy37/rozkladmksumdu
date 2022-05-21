import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'
import { Props } from './types'

const Container: React.FC<Props> = ({ style, children, ...props }) => {
  const themedStyles = useThemedStyles(styles)

  return (
    <SafeAreaView
      style={[themedStyles.container, style]}
      edges={['left', 'right', 'bottom']}
      {...props}
    >
      {children}
    </SafeAreaView>
  )
}

export default Container
