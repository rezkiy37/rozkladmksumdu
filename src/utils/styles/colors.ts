import { Colors } from '@app/types/styles/Colors'

import { ThemeMode } from './ThemeMode'

export const colors: {
  [key in ThemeMode]: Colors
} = {
  [ThemeMode.Light]: {
    transparent: 'transparent',
    primary: '#155e75',
    secondary: '#ec4899',
    background: '#ecfeff',
    secondaryBackground: '#67e8f9',
    heading: '#164e63',
    subheading: '#155e75',
    caption: '#0e7490',
    paragraph: '#0891b2',
    error: '#ef4444',
    success: '#22c55e',
    warning: '#f97316',
    muted: '#737373',
    info: '#0ea5e9',
    icon: '#0e7490',
  },
  [ThemeMode.Dark]: {
    transparent: 'transparent',
    primary: '#67e8f9',
    secondary: '#f9a8d4',
    background: '#164e63',
    secondaryBackground: '#0891b2',
    heading: '#ecfeff',
    subheading: '#cffafe',
    caption: '#a5f3fc',
    paragraph: '#67e8f9',
    error: '#fca5a5',
    success: '#86efac',
    warning: '#fdba74',
    muted: '#d4d4d4',
    info: '#7dd3fc',
    icon: '#a5f3fc',
  },
}
