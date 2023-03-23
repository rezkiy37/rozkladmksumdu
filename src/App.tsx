import React, { useEffect } from 'react'
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

    // 1 - 63337751862-n3j2rup5fevsdec4fepiahn3uqkigbnk.apps.googleusercontent.com
    // 2 - 63337751862-iknecs0185dg2qasl68edhhk7p2vakn8.apps.googleusercontent.com

    GoogleOneTapSignIn.configure({
      webClientId:
        '63337751862-iknecs0185dg2qasl68edhhk7p2vakn8.apps.googleusercontent.com',
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
