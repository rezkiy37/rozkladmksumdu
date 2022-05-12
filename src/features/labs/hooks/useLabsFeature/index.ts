import { useMst } from '@app/hooks/useMst'

export const useLabsFeature = () => {
  const store = useMst()

  return store.labs
}
