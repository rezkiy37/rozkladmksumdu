import React from 'react'
import { View } from 'react-native'

import { observer } from 'mobx-react'

import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'

const ScheduleCard: React.FC = observer(() => {
  const themedStyles = useThemedStyles(styles)

  return (
    <View style={themedStyles.wrapper}>
      <View style={themedStyles.container} />
    </View>
  )
})

export default ScheduleCard
