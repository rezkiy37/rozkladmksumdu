import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { Platform, View } from 'react-native'

import RNBottomSheet, {
  BottomSheetBackdrop,
  KEYBOARD_BEHAVIOR,
} from '@gorhom/bottom-sheet'

import { useKeyboardOpened } from '@app/hooks/useKeyboardOpened'
import { useTheme } from '@app/hooks/useTheme'
import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'
import { Props } from './types'

const BottomSheet: React.FC<Props> = ({ visible, children, onClose }) => {
  const bottomSheetRef = useRef<RNBottomSheet>()

  const isKeyboardOpened = useKeyboardOpened()

  const theme = useTheme()

  const themedStyles = useThemedStyles(styles)

  const enablePanDownToClose = useMemo(() => {
    if (Platform.OS === 'ios') {
      return true
    }

    return !isKeyboardOpened
  }, [isKeyboardOpened])

  const snapPoints = useMemo(
    () => [theme.sizes.bottomSheetHeight],
    [theme.sizes.bottomSheetHeight],
  )

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  )

  useEffect(() => {
    if (visible) {
      bottomSheetRef.current?.expand()
    } else {
      bottomSheetRef.current?.close()
    }
  }, [visible])

  return (
    <RNBottomSheet
      handleStyle={themedStyles.handle}
      // @ts-ignore
      ref={bottomSheetRef}
      index={-1}
      keyboardBehavior={KEYBOARD_BEHAVIOR.extend}
      snapPoints={snapPoints}
      enablePanDownToClose={enablePanDownToClose}
      backdropComponent={renderBackdrop}
      onClose={onClose}
    >
      <View style={themedStyles.contentContainer}>{children}</View>
    </RNBottomSheet>
  )
}

export default BottomSheet
