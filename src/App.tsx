import React from 'react'

import { StoreProvider } from '@app/contexts/StoreContext'
import { ThemeProvider } from '@app/contexts/ThemeContext'
import AppNavigation from '@app/navigation/app'
import { store } from '@app/store'

const App: React.FC = () => {
  return (
    <StoreProvider value={store}>
      <ThemeProvider>
        <AppNavigation />
      </ThemeProvider>
    </StoreProvider>
  )
}

export default App
