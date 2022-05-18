import { createContext } from 'react'

import { Theme } from '@app/types/Entities/Theme'

export const Context = createContext<Nullable<Theme>>(null)
