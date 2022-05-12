import { useMst } from '@app/hooks/useMst'

export const useHomeFeature = () => {
  const store = useMst()

  return store.home
}
