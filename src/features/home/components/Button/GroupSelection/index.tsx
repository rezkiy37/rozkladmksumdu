import React, { useCallback } from 'react'

import { strings } from '@app/assets/locale/strings'
import { BasicButton } from '@app/components/Button'
import { GroupIcon } from '@app/components/Icon'

import { Props } from './types'

const GroupSelection: React.FC<Props> = ({ group, onGroupPress }) => {
  const onPress = useCallback(() => {
    onGroupPress(group)
  }, [group, onGroupPress])

  return (
    <BasicButton
      Icon={GroupIcon}
      onPress={onPress}
    >
      {strings.formatString(
        strings.features.home.components.button.groupSelection.title,
        group.name,
      )}
    </BasicButton>
  )
}

export default GroupSelection
