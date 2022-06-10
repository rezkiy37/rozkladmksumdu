import LocalizedStrings from 'react-localization'

import { Locale } from '@app/types/entities/Locale'

export const strings = new LocalizedStrings({
  [Locale.UA]: {
    general: {
      scheduleType: {
        numerator: 'Numerator',
        denominator: 'Denominator',
      },
      daysOfWeek: {
        '1': 'Monday',
        '2': 'Tuesday',
        '3': 'Wednesday',
        '4': 'Thursday',
        '5': 'Friday',
        '6': 'Saturday',
        '7': 'Sunday',
      },
    },
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
          groupsBottomSheet: {
            inputPlaceholder: 'Enter group...',
          },
        },
      },
      groupSchedule: {
        components: {
          scheduleListHeader: {
            title: '{0} - {1}',
          },
          scheduleItem: {
            cancelledLesson: 'The lesson is cancelled',
            order: '№ {0}',
            auditory: 'Auditory №{0}',
            teacher: 'Teacher - {0}',
          },
        },
      },
    },
  },
})
