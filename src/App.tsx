// TODO: Remove ignoring the eslint
/* eslint-disable no-console */
import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import messaging, { firebase } from '@react-native-firebase/messaging'

import { LocaleProvider } from '@app/contexts/LocaleContext'
import { StoreProvider } from '@app/contexts/StoreContext'
import { ThemeProvider } from '@app/contexts/ThemeContext'
import AppNavigation from '@app/navigation/app'
import { store } from '@app/store'

import { strings } from './assets/locale/strings'

// TODO: Refactor
const Notifications = async () => {
  const defaultAppMessaging = firebase.messaging()

  async function requestUserPermission() {
    const authStatus = await defaultAppMessaging.requestPermission()

    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL

    if (enabled) {
      console.log('requestUserPermission >> Authorization status:', authStatus)
    }
  }

  const getToken = async () => {
    try {
      const token = await defaultAppMessaging.getToken()

      console.log('getToken >> token >>', token)
    } catch (error) {
      console.log('getToken >> error >>', error)
    }
  }

  defaultAppMessaging.onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    )
  })

  // Check whether an initial notification is available
  defaultAppMessaging.getInitialNotification().then(remoteMessage => {
    if (remoteMessage) {
      console.log(
        'Notification caused app to open from quit state:',
        remoteMessage.notification,
      )
    }
  })

  defaultAppMessaging.onMessage(async remoteMessage => {
    console.log(
      'onMessage >> notification of foreground state >> remoteMessage >>',
      remoteMessage,
    )
  })

  // Register background handler
  defaultAppMessaging.setBackgroundMessageHandler(async remoteMessage => {
    console.log(
      'setBackgroundMessageHandler >> notification of foreground state >> remoteMessage >>',
      remoteMessage,
    )
  })

  return {
    getFCMToken: getToken,
    requestUserPermission,
  }
}

const App: React.FC = () => {
  strings.setLanguage('ua')

  useEffect(() => {
    const launchNotifications = async () => {
      const { requestUserPermission, getFCMToken } = await Notifications()

      await requestUserPermission()

      await getFCMToken()
    }

    launchNotifications()
  }, [])

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
