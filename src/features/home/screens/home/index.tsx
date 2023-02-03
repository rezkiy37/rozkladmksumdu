import React from 'react'

import Container from '@app/components/Container'

import { SelectGroupButton, ShowLabsButton } from '../../components/Button'
import GroupsBottomSheet from '../../components/GroupListBottomSheet'
import { useHomeScreen } from '../../hooks'

// TODO: Refine about schedule changes implementation
const HomeScreen: React.FC = () => {
  useHomeScreen()

  return (
    <Container>
      <SelectGroupButton />

      <ShowLabsButton />

      <GroupsBottomSheet />
    </Container>
  )
}

export default HomeScreen
