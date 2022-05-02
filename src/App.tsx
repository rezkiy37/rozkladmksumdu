import React from 'react'

import { NativeBaseProvider } from 'native-base'

import AppNavigation from '@app/navigation/app'

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <AppNavigation />
    </NativeBaseProvider>
  )
}

export default App
