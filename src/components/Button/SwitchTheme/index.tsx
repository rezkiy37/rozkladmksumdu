import React, { useCallback } from 'react'

import Basic from '../Basic'

import { DarkThemeIcon, LightThemeIcon } from '@app/components/Icon'
import { Caption } from '@app/components/Typography'
import { useTheme } from '@app/hooks/useTheme'
import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'

// TODO: Use strings
const SwitchTheme: React.FC = () => {
  const { isLightMode, toggleThemeMode } = useTheme()

  const themedStyles = useThemedStyles(styles)

  const onTogglePress = useCallback(() => {
    toggleThemeMode()
  }, [toggleThemeMode])

  return (
    <Basic
      style={themedStyles.container}
      onPress={onTogglePress}
    >
      <Caption
        style={themedStyles.title}
        numberOfLines={1}
      >
        Change theme mode
      </Caption>

      {isLightMode ? (
        <DarkThemeIcon style={themedStyles.icon} />
      ) : (
        <LightThemeIcon style={themedStyles.icon} />
      )}
    </Basic>
  )
}

export default SwitchTheme
