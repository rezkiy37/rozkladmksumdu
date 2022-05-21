import { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'

export const useKeyboardOpened = () => {
  const [isKeyboardOpened, setKeyboardOpen] = useState(false)

  useEffect(() => {
    const listeners = [
      Keyboard.addListener('keyboardDidShow', () => {
        setKeyboardOpen(true)
      }),
      Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardOpen(false)
      }),
    ]

    return () => {
      listeners.forEach(listener => listener.remove())
    }
  }, [])

  return isKeyboardOpened
}
