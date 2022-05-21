import React from 'react'

import { strings } from '@app/assets/locale/strings'
import { BasicButton } from '@app/components/Button'
import { GroupsIcon } from '@app/components/Icon'
import { useHomeScreenHandlers } from '@app/features/home/hooks'
import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'

const SelectGroup: React.FC = () => {
  const themedStyles = useThemedStyles(styles)

  const { onShowGroupsPress } = useHomeScreenHandlers()

  return (
    <BasicButton
      style={themedStyles.container}
      Icon={GroupsIcon}
      onPress={onShowGroupsPress}
    >
      {strings.features.home.components.button.selectGroup.title}
    </BasicButton>
  )
}

export default SelectGroup
