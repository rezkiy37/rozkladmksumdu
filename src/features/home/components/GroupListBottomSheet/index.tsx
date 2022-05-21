import React, { useCallback } from 'react'
import { ListRenderItem } from 'react-native'

import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { observer } from 'mobx-react'

import { useHomeFeature, useHomeScreenHandlers } from '../../hooks'
import { GroupSelectionButton } from '../Button'

import BottomSheet from '@app/components/BottomSheet'
import Separator from '@app/components/Separator'
import { useThemedStyles } from '@app/hooks/useThemedStyles'
import { Group } from '@app/models/Group'

import { styles } from './styles'

const GroupsBottomSheet: React.FC = observer(() => {
  const themedStyles = useThemedStyles(styles)

  const { groupsVisible, groups } = useHomeFeature()

  const { onGroupSelect, onGroupsBottomSheetClose } = useHomeScreenHandlers()

  const keyExtractor = useCallback((group: Group) => group.id, [])

  const renderGroupItem = useCallback<ListRenderItem<Group>>(
    ({ item: group }) => (
      <GroupSelectionButton
        key={group.id}
        group={group}
        onGroupPress={onGroupSelect}
      />
    ),
    [onGroupSelect],
  )

  const renderItemSeparator = useCallback(() => <Separator />, [])

  return (
    <BottomSheet
      visible={groupsVisible}
      onClose={onGroupsBottomSheetClose}
    >
      <BottomSheetFlatList
        style={themedStyles.container}
        contentContainerStyle={themedStyles.contentContainer}
        showsVerticalScrollIndicator={false}
        data={groups}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderItemSeparator}
        renderItem={renderGroupItem}
      />
    </BottomSheet>
  )
})

export default GroupsBottomSheet
