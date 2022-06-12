import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

import { NavigationContainer } from '@react-navigation/native'

import HomeStack from '@app/navigation/home'

const AppNavigation: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  )
}

export default AppNavigation
