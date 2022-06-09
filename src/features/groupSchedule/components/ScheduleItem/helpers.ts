import { Schedule } from '@app/models/Schedule'

export const checkCancelledLesson = (schedule: Schedule) => {
  return (
    schedule.auditory === 'Х' ||
    schedule.teacher === 'Х' ||
    schedule.subject === 'Х'
  )
}
