import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'

import { GroupScheduleScreen } from '@app/features/groupSchedule'
import { HomeScreen } from '@app/features/home'
import { LabsScreen } from '@app/features/labs'

import { HomeNavigationParams } from './NavigationParams'
import { HomeScreenNames } from './ScreenNames'

const Stack = createDrawerNavigator<HomeNavigationParams>()

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HomeScreenNames.Home}
        component={HomeScreen}
      />

      <Stack.Screen
        name={HomeScreenNames.GroupSchedule}
        component={GroupScheduleScreen}
      />

      <Stack.Screen
        name={HomeScreenNames.Labs}
        component={LabsScreen}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
