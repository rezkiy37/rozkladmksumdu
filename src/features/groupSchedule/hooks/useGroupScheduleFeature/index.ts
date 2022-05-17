import { useMst } from '@app/hooks/useMst'

export const useGroupScheduleFeature = () => {
  const store = useMst()

  return store.groupSchedule
}
