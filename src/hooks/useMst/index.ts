import { useContext } from 'react'

import { StoreContext } from '@app/contexts/StoreContext'
import { Store } from '@app/models/Store'

export const useMst = (): Store => {
  const store = useContext(StoreContext)

  if (store === null) {
    throw new Error('Store cannot be null, please add a context')
  }

  return store
}
