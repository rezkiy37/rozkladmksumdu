import React, { useEffect, useState } from 'react'

import { strings } from '@app/assets/locale/strings'
import { Locale } from '@app/types/entities/Locale'

import { Context } from './Context'

const initialLocale: Locale = Locale.UA

export const Provider: React.FC = ({ children }) => {
  const [locale] = useState<Locale>(initialLocale)

  useEffect(() => {
    strings.setLanguage(initialLocale)
  }, [])

  return <Context.Provider value={locale}>{children}</Context.Provider>
}
