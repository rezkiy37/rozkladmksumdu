import React, { useCallback } from 'react'
import { FlatList } from 'react-native'

import { observer } from 'mobx-react'

// import { useGroupScheduleFeature } from '../../hooks'

import ScheduleCard from '../ScheduleCard'

import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'

const ScheduleList: React.FC = observer(() => {
  // const { groupSchedule } = useGroupScheduleFeature()

  const themedStyles = useThemedStyles(styles)

  const renderScheduleCard = useCallback(() => <ScheduleCard />, [])

  const keyExtractor = useCallback(
    (item: number, index: number) => index.toString(),
    [],
  )

  return (
    <FlatList
      style={themedStyles.container}
      contentContainerStyle={themedStyles.contentContainer}
      showsHorizontalScrollIndicator={false}
      horizontal
      pagingEnabled
      data={[1, 2, 3, 4, 5]}
      keyExtractor={keyExtractor}
      renderItem={renderScheduleCard}
    />
  )
})

export default ScheduleList
