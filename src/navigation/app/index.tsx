import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import HomeStack from '@app/navigation/home'

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  )
}

export default AppNavigation
