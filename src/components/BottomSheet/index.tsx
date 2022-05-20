import React, { useEffect } from 'react'
import { View } from 'react-native'
import ActionSheet, { SheetManager } from 'react-native-actions-sheet'

import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'
import { Props } from './types'

const BottomSheet: React.FC<Props> = ({ id, visible, onClose, children }) => {
  const themedStyles = useThemedStyles(styles)

  useEffect(() => {
    if (visible) {
      SheetManager.show(id)
    } else {
      SheetManager.hide(id)
    }
  }, [id, visible])

  return (
    <ActionSheet
      id={id}
      gestureEnabled
      bounceOnOpen
      closable
      containerStyle={themedStyles.container}
      onClose={onClose}
    >
      <View style={themedStyles.contentContainer}>{children}</View>
    </ActionSheet>
  )
}

export default BottomSheet
