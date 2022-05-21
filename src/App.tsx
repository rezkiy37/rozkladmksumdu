import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

import { StoreProvider } from '@app/contexts/StoreContext'
import { ThemeProvider } from '@app/contexts/ThemeContext'
import AppNavigation from '@app/navigation/app'
import { store } from '@app/store'

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <BottomSheetModalProvider>
        <StoreProvider value={store}>
          <ThemeProvider>
            <AppNavigation />
          </ThemeProvider>
        </StoreProvider>
      </BottomSheetModalProvider>
    </SafeAreaProvider>
  )
}

export default App
