import React from 'react'

import { BackHomeButton } from '@app/components/Button'
import Container from '@app/components/Container'
import ScreenFooter from '@app/components/ScreenFooter'

const LabsScreen: React.FC = () => {
  return (
    <>
      <Container></Container>

      <ScreenFooter>
        <BackHomeButton />
      </ScreenFooter>
    </>
  )
}

export default LabsScreen
