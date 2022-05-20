import { Linking } from 'react-native'

import { strings } from '@app/assets/locale/strings'
import { links } from '@app/constants/links'

export const useLinking = () => {
  const openURL = async (url: string) => {
    try {
      await Linking.openURL(url)
    } catch (e) {
      // TODO: Integrate Error service
      throw new Error(strings.errors.linking.unavailableOpenLink)
    }
  }

  const openCollageLocation = async () => {
    await openURL(links.collageLocation)
  }

  return {
    openCollageLocation,
  }
}
