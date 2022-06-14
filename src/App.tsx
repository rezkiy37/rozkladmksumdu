import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

import { LocaleProvider } from '@app/contexts/LocaleContext'
import { StoreProvider } from '@app/contexts/StoreContext'
import { ThemeProvider } from '@app/contexts/ThemeContext'
import AppNavigation from '@app/navigation/app'
import { store } from '@app/store'

import { strings } from './assets/locale/strings'

const App: React.FC = () => {
  strings.setLanguage('ua')

  return (
    <LocaleProvider>
      <SafeAreaProvider>
        <BottomSheetModalProvider>
          <StoreProvider value={store}>
            <ThemeProvider>
              <AppNavigation />
            </ThemeProvider>
          </StoreProvider>
        </BottomSheetModalProvider>
      </SafeAreaProvider>
    </LocaleProvider>
  )
}

export default App
