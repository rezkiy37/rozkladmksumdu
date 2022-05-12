import { createContext } from 'react'

import { Store } from '@app/models/Store'

export const Context = createContext<Nullable<Store>>(null)
