import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'

import { GroupScheduleScreen } from '@app/features/group_schedule'
import { HomeScreen } from '@app/features/home'
import { LabsScreen } from '@app/features/labs'

import { HomeScreenNames } from './screen_names'

import type { HomeNavigationParams } from './navigation_params'

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
