import LocalizedStrings from 'react-localization'

import { Locale } from '@app/types/entities/Locale'

export const strings = new LocalizedStrings({
  [Locale.EN]: {
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
          title: 'College route',
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
  [Locale.UA]: {
    general: {
      scheduleType: {
        numerator: 'Чисельник',
        denominator: 'Знаменник',
      },
      daysOfWeek: {
        '1': 'Понеділок',
        '2': 'Вівторок',
        '3': 'Середа',
        '4': 'Четвер',
        '5': 'П’ятниця',
        '6': 'Субота',
        '7': 'Неділя',
      },
    },
    errors: {
      linking: {
        unavailableOpenLink: 'Посилання недоступне для відкриття',
      },
    },
    navigation: {
      home: {
        home: {
          title: 'Головна',
        },
        groupSchedule: {
          title: 'Група: {0}',
          fallbackTitle: 'Розклад за групою',
        },
        labs: {
          title: 'Усі лабораторні',
        },
      },
    },
    components: {
      appVersion: {
        title: 'Версія: {0}',
      },
      button: {
        basic: {
          loading: 'Загрузка...',
        },
        collageRoute: {
          title: 'Маршрут до коледжу',
        },
        switchTheme: {
          title: 'Змінити тему',
        },
        backHome: {
          title: 'Повернутися на головну',
        },
      },
    },
    features: {
      home: {
        components: {
          button: {
            showLabs: {
              title: 'Показати всі лабораторні',
            },
            selectGroup: {
              title: 'Виберіть групу',
            },
            groupSelection: {
              title: 'Вибрати групу: {0}',
            },
          },
          groupsBottomSheet: {
            inputPlaceholder: 'Введіть групу ...',
          },
        },
      },
      groupSchedule: {
        components: {
          scheduleListHeader: {
            title: '{0} - {1}',
          },
          scheduleItem: {
            cancelledLesson: 'Пара скасована',
            order: '№ {0}',
            auditory: 'Аудиторія №{0}',
            teacher: 'Викладач - {0}',
          },
        },
      },
    },
  },
})
