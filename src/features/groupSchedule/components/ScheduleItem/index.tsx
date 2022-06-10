import React from 'react'
import { View } from 'react-native'

import { strings } from '@app/assets/locale/strings'
import { Caption, Paragraph } from '@app/components/Typography'
import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { checkCancelledLesson } from './helpers'
import { styles } from './styles'
import { Props } from './types'

const ScheduleItem: React.FC<Props> = ({ schedule }) => {
  const themedStyles = useThemedStyles(styles)

  if (checkCancelledLesson(schedule)) {
    return (
      <View style={themedStyles.container}>
        <View style={themedStyles.header}>
          <Paragraph style={themedStyles.cancelledLessonWarning}>
            {strings.formatString(
              strings.features.groupSchedule.components.scheduleItem.order,
              schedule.order.toString(),
            )}
          </Paragraph>
        </View>

        <Caption style={themedStyles.cancelledLessonWarning}>
          {
            strings.features.groupSchedule.components.scheduleItem
              .cancelledLesson
          }
        </Caption>
      </View>
    )
  }

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.header}>
        <Paragraph>
          {strings.formatString(
            strings.features.groupSchedule.components.scheduleItem.order,
            schedule.order.toString(),
          )}
        </Paragraph>

        <Paragraph>
          {strings.formatString(
            strings.features.groupSchedule.components.scheduleItem.auditory,
            schedule.auditory ?? '',
          )}
        </Paragraph>
      </View>

      <Caption style={themedStyles.subjectTitle}>{schedule.subject}</Caption>

      <Paragraph>
        {strings.formatString(
          strings.features.groupSchedule.components.scheduleItem.teacher,
          schedule.teacher ?? '',
        )}
      </Paragraph>
    </View>
  )
}

export default ScheduleItem
