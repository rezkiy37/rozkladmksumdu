import LocalizedStrings from 'react-localization'

import { Locale } from '@app/types/Entities/Locale'

export const strings = new LocalizedStrings({
  [Locale.UA]: {
    errors: {
      linking: {
        unavailableOpenLink: 'Unavailable to open the link',
      },
    },
    components: {
      appVersion: {
        title: 'Version: {0}',
      },
      button: {
        collageRoute: {
          title: 'Collage route',
        },
        switchTheme: {
          title: 'Change theme mode',
        },
      },
    },
  },
})
