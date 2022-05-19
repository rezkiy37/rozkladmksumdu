import { Linking } from 'react-native'

import { links } from '@app/constants/links'

export const useLinking = () => {
  const openURL = async (url: string) => {
    try {
      await Linking.openURL(url)
    } catch (e) {
      // TODO: Use strings
      // TODO: Integrate Error service
      throw new Error('Unavailable open collage location')
    }
  }

  const openCollageLocation = async () => {
    await openURL(links.collageLocation)
  }

  return {
    openCollageLocation,
  }
}
