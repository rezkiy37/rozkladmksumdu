import React, { useCallback, useMemo, useState } from 'react'

import { Theme } from '@app/types/styles/Theme'
import { styles } from '@app/utils/styles'
import { ThemeMode } from '@app/utils/styles/ThemeMode'

import { Context } from './Context'

export const Provider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<Theme['mode']>(ThemeMode.Light)

  const isLightMode = useMemo<Theme['isLightMode']>(
    () => mode === ThemeMode.Light,
    [mode],
  )

  const toggleThemeMode = useCallback<Theme['toggleThemeMode']>(() => {
    setMode(isLightMode ? ThemeMode.Dark : ThemeMode.Light)
  }, [isLightMode, setMode])

  return (
    <Context.Provider
      value={{
        ...styles,
        keyboardAppearance: styles.keyboardAppearance[mode],
        colors: styles.colors[mode],
        mode,
        isLightMode,
        toggleThemeMode,
      }}
    >
      {children}
    </Context.Provider>
  )
}
