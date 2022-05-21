import React from 'react'

import { SelectGroupButton, ShowLabsButton } from '../../components/Button'
import GroupsBottomSheet from '../../components/GroupListBottomSheet'
import { useHomeScreen } from '../../hooks'

import Container from '@app/components/Container'

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
