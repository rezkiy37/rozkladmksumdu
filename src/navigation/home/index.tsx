import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'

import { strings } from '@app/assets/locale/strings'
import { DrawerContent } from '@app/components/DrawerContent'
import { GroupScheduleScreen } from '@app/features/groupSchedule'
import { HomeScreen } from '@app/features/home'
import { LabsScreen } from '@app/features/labs'
import { useTheme } from '@app/hooks/useTheme'
import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { HomeNavigationParams } from './NavigationParams'
import { HomeScreenNames } from './ScreenNames'
import { styles } from './styles'

const Stack = createDrawerNavigator<HomeNavigationParams>()

const HomeStack: React.FC = () => {
  const { colors } = useTheme()

  const themedStyles = useThemedStyles(styles)

  return (
    <Stack.Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        headerStyle: themedStyles.header,
        headerTitleStyle: themedStyles.title,
        headerTintColor: colors.primary,
      }}
    >
      <Stack.Screen
        name={HomeScreenNames.Home}
        component={HomeScreen}
        options={{
          title: strings.navigation.home.home.title,
        }}
      />

      <Stack.Screen
        name={HomeScreenNames.GroupSchedule}
        component={GroupScheduleScreen}
        options={{
          title: strings.navigation.home.groupSchedule.fallbackTitle,
        }}
      />

      <Stack.Screen
        name={HomeScreenNames.Labs}
        component={LabsScreen}
        options={{
          title: strings.navigation.home.labs.title,
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
