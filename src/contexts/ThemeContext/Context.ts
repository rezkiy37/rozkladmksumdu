import { createContext } from 'react'

import { Theme } from '@app/types/styles/Theme'

export const Context = createContext<Nullable<Theme>>(null)
