import React from 'react'

import { strings } from '@app/assets/locale/strings'
import { BasicButton } from '@app/components/Button'
import { LabIcon } from '@app/components/Icon'
import { useHomeScreenHandlers } from '@app/features/home/hooks'
import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'

const ShowLabs: React.FC = () => {
  const themedStyles = useThemedStyles(styles)

  const { onShowLabsPress } = useHomeScreenHandlers()

  return (
    <BasicButton
      style={themedStyles.container}
      Icon={LabIcon}
      onPress={onShowLabsPress}
    >
      {strings.features.home.components.button.showLabs.title}
    </BasicButton>
  )
}

export default ShowLabs
