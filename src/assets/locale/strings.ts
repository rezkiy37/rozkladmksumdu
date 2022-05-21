import LocalizedStrings from 'react-localization'

import { Locale } from '@app/types/Entities/Locale'

export const strings = new LocalizedStrings({
  [Locale.UA]: {
    errors: {
      linking: {
        unavailableOpenLink: 'Unavailable to open the link',
      },
    },
    navigation: {
      home: {
        home: {
          title: 'Home',
        },
        groupSchedule: {
          title: 'Group: {0}',
          fallbackTitle: 'Group schedule',
        },
        labs: {
          title: 'All labs',
        },
      },
    },
    components: {
      appVersion: {
        title: 'Version: {0}',
      },
      button: {
        basic: {
          loading: 'Loading...',
        },
        collageRoute: {
          title: 'Collage route',
        },
        switchTheme: {
          title: 'Change theme mode',
        },
        backHome: {
          title: 'Back home',
        },
      },
    },
    features: {
      home: {
        components: {
          button: {
            showLabs: {
              title: 'Show all labs',
            },
            selectGroup: {
              title: 'Select a group',
            },
            groupSelection: {
              title: 'Select the group: {0}',
            },
          },
        },
      },
    },
  },
})
