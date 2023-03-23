import React, { useEffect } from 'react'
import Config from 'react-native-config'
import {
  GoogleOneTapSignIn,
  statusCodes,
} from 'react-native-google-one-tap-signin'
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

  useEffect(() => {
    const signIn = async () => {
      try {
        const hasPlayServices = await GoogleOneTapSignIn.hasPlayServices()

        // eslint-disable-next-line no-console
        console.log('hasPlayServices >', hasPlayServices)

        const userInfo = await GoogleOneTapSignIn.signIn()

        // eslint-disable-next-line no-console
        console.log('userInfo >', userInfo)
      } catch (error: any) {
        // eslint-disable-next-line no-console
        console.log('error >', error)

        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    }

    GoogleOneTapSignIn.configure({
      webClientId: Config.WEB_CLIENT_ID,
    })

    signIn()
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
