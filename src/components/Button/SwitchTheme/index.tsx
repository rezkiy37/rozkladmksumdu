import React, { useCallback } from 'react'

import Basic from '../Basic'

import { strings } from '@app/assets/locale/strings'
import { DarkThemeIcon, LightThemeIcon } from '@app/components/Icon'
import { useTheme } from '@app/hooks/useTheme'

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
