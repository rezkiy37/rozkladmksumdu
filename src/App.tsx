import React from 'react'

import { NativeBaseProvider } from 'native-base'

import { StoreProvider } from '@app/contexts/StoreContext'
import AppNavigation from '@app/navigation/app'
import { store } from '@app/store'

const App: React.FC = () => {
  return (
    <StoreProvider value={store}>
      <NativeBaseProvider>
        <AppNavigation />
      </NativeBaseProvider>
    </StoreProvider>
  )
}

export default App
