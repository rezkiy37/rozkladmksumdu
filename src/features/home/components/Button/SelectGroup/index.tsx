import React from 'react'

import { observer } from 'mobx-react'

import { strings } from '@app/assets/locale/strings'
import { BasicButton } from '@app/components/Button'
import { GroupsIcon } from '@app/components/Icon'
import { useHomeFeature, useHomeScreenHandlers } from '@app/features/home/hooks'
import { useThemedStyles } from '@app/hooks/useThemedStyles'

import { styles } from './styles'

const SelectGroup: React.FC = observer(() => {
  const themedStyles = useThemedStyles(styles)

  const {
    api: { loading },
  } = useHomeFeature()

  const { onShowGroupsPress } = useHomeScreenHandlers()

  return (
    <BasicButton
      style={themedStyles.container}
      loading={loading}
      Icon={GroupsIcon}
      onPress={onShowGroupsPress}
    >
      {strings.features.home.components.button.selectGroup.title}
    </BasicButton>
  )
})

export default SelectGroup
