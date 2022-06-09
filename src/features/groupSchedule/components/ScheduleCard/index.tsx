import React, { memo, useCallback } from 'react'
import { FlatList, View } from 'react-native'

import { observer } from 'mobx-react'

import { useGroupScheduleFeature } from '../../hooks'
import ScheduleItem from '../ScheduleItem'

import { strings } from '@app/assets/locale/strings'
import Separator from '@app/components/Separator'
import { Subheading } from '@app/components/Typography'
import { useThemedStyles } from '@app/hooks/useThemedStyles'
import { Schedule } from '@app/models/Schedule'

import { styles } from './styles'
import { Props } from './types'

const ScheduleCard: React.FC<Props> = observer(({ dayOfWeek }) => {
  const themedStyles = useThemedStyles(styles)

  // TODO: Rework
  const { getDaySchedule } = useGroupScheduleFeature()

  const renderScheduleItem = useCallback(
    ({ item }: { item: Schedule }) => <ScheduleItem schedule={item} />,
    [],
  )

  const keyExtractor = useCallback((item: Schedule) => item.id, [])

  const renderListHeader = useCallback(
    () => (
      <Subheading style={themedStyles.subheading}>
        {strings.general.daysOfWeek[dayOfWeek]}
      </Subheading>
    ),
    [themedStyles.subheading, dayOfWeek],
  )

  const renderSeparator = useCallback(
    () => <Separator style={themedStyles.separator} />,
    [themedStyles.separator],
  )

  return (
    <View style={themedStyles.wrapper}>
      <FlatList
        style={themedStyles.container}
        contentContainerStyle={themedStyles.contentContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={getDaySchedule(dayOfWeek)}
        renderItem={renderScheduleItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderListHeader}
      />
    </View>
  )
})

export default memo(ScheduleCard)
