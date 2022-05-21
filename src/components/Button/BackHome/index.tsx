import React, { useCallback } from 'react'

import Basic from '../Basic'

import { strings } from '@app/assets/locale/strings'
import { BackIcon } from '@app/components/Icon'
import { useNavigationActions } from '@app/hooks/useNavigationActions'

const BackHome: React.FC = () => {
  const { goBack } = useNavigationActions()

  const onBackPress = useCallback(() => {
    goBack()
  }, [goBack])

  return (
    <Basic
      Icon={BackIcon}
      onPress={onBackPress}
    >
      {strings.components.button.backHome.title}
    </Basic>
  )
}

export default BackHome
