import React from 'react'
import { Image, View } from 'react-native'

import { DrawerContentComponentProps } from '@react-navigation/drawer'

import { Images } from '@app/assets/images'
import { AppVersion } from '@app/components/AppVersion'
import { CollageRouteButton, SwitchThemeButton } from '@app/components/Button'
import Container from '@app/components/Container'
import { useThemedStyles } from '@app/hooks/useThemedStyles'

import DrawerRow from './DrawerRow'
import { styles } from './styles'

type Props = DrawerContentComponentProps

export const DrawerContent: React.FC<Props> = () => {
  const themedStyles = useThemedStyles(styles)

  return (
    <Container style={themedStyles.container}>
      <Image
        style={themedStyles.logo}
        source={Images.collageLogo}
      />

      <AppVersion />

      <View style={themedStyles.actionContainer}>
        <DrawerRow containerStyle={themedStyles.changeThemeModeContainer}>
          <SwitchThemeButton />
        </DrawerRow>

        <DrawerRow>
          <CollageRouteButton />
        </DrawerRow>
      </View>
    </Container>
  )
}
