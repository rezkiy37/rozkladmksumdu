import React, { useCallback } from 'react'

import { strings } from '@app/assets/locale/strings'
import { DarkThemeIcon, LightThemeIcon } from '@app/components/Icon'
import { useTheme } from '@app/hooks/useTheme'

import Basic from '../Basic'

const SwitchTheme: React.FC = () => {
  const { isLightMode, toggleThemeMode } = useTheme()

  const onTogglePress = useCallback(() => {
    toggleThemeMode()
  }, [toggleThemeMode])

  return (
    <Basic
      Icon={isLightMode ? DarkThemeIcon : LightThemeIcon}
      onPress={onTogglePress}
    >
      {strings.components.button.switchTheme.title}
    </Basic>
  )
}

export default SwitchTheme
