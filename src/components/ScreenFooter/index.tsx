import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'

const ScreenFooter: React.FC = ({ children }) => {
  const themedStyles = useThemedStyles(styles)

  return (
    <SafeAreaView
      style={themedStyles.container}
      edges={['left', 'right', 'bottom']}
    >
      {children}
    </SafeAreaView>
  )
}

export default ScreenFooter
