import { createContext } from 'react'

import { Locale } from '@app/types/entities/Locale'

export const Context = createContext<Nullable<Locale>>(null)
