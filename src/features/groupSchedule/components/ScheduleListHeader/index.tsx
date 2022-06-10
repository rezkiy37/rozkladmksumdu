import React, { useMemo } from 'react'
import { View } from 'react-native'

import { observer } from 'mobx-react'

import { useGroupScheduleFeature } from '../../hooks'

import { strings } from '@app/assets/locale/strings'
import { Subheading } from '@app/components/Typography'
import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'

const ScheduleListHeader: React.FC = observer(() => {
  const { selectedGroup, scheduleType } = useGroupScheduleFeature()

  const themedStyles = useThemedStyles(styles)

  const title = useMemo(() => {
    if (selectedGroup === null) {
      return ''
    }

    if (scheduleType === null) {
      return ''
    }

    return strings.formatString(
      strings.features.groupSchedule.components.scheduleListHeader.title,
      selectedGroup.name,
      strings.general.scheduleType[scheduleType],
    )
  }, [selectedGroup, scheduleType])

  return (
    <View style={themedStyles.wrapper}>
      <View style={themedStyles.container}>
        <Subheading style={themedStyles.title}>{title}</Subheading>
      </View>
    </View>
  )
})

export default ScheduleListHeader
