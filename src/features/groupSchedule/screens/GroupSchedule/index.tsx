import React from 'react'

import { observer } from 'mobx-react'

import { BackHomeButton } from '@app/components/Button'
import Container from '@app/components/Container'
import ScreenFooter from '@app/components/ScreenFooter'
import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'
import ScheduleList from '../../components/ScheduleList'
import ScheduleListHeader from '../../components/ScheduleListHeader'
import { useGroupScheduleScreen } from '../../hooks/useGroupScheduleScreen'

const GroupScheduleScreen: React.FC = observer(() => {
  useGroupScheduleScreen()

  const themedStyles = useThemedStyles(styles)

  return (
    <>
      <Container
        style={themedStyles.container}
        edges={['left', 'right']}
      >
        <ScheduleListHeader />

        <ScheduleList />
      </Container>

      <ScreenFooter>
        <BackHomeButton />
      </ScreenFooter>
    </>
  )
})

export default GroupScheduleScreen
