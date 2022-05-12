import React from 'react'

import { NativeBaseProvider } from 'native-base'

import { StoreProvider } from '@app/contexts/StoreContext'
import AppNavigation from '@app/navigation/app'
import { initialStore } from '@app/store/initialStore'

const App: React.FC = () => {
  return (
    <StoreProvider value={initialStore}>
      <NativeBaseProvider>
        <AppNavigation />
      </NativeBaseProvider>
    </StoreProvider>
  )
}

export default App
