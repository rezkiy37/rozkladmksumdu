import React, { useCallback, useEffect, useRef } from 'react'
import { ListRenderItem, Platform, TextInput } from 'react-native'

import { BottomSheetFlatList, BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { observer } from 'mobx-react'

import { strings } from '@app/assets/locale/strings'
import BottomSheet from '@app/components/BottomSheet'
import Separator from '@app/components/Separator'
import { useTheme } from '@app/hooks/useTheme'
import { useThemedStyles } from '@app/hooks/useThemedStyles'
import { Group } from '@app/models/Group'

import { styles } from './styles'
import { useHomeFeature, useHomeScreenHandlers } from '../../hooks'
import { GroupSelectionButton } from '../Button'

const GroupsBottomSheet: React.FC = observer(() => {
  const inputRef = useRef<TextInput>()

  const theme = useTheme()

  const themedStyles = useThemedStyles(styles)

  const { searchedGroups, groupsSearch, groupsVisible } = useHomeFeature()

  const { onGroupSelect, onGroupsBottomSheetClose, onChangeGroupsSearch } =
    useHomeScreenHandlers()

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

  const handleKeyboard = useCallback(() => {
    if (Platform.OS === 'android') {
      return
    }

    if (groupsVisible) {
      inputRef.current?.focus()
    } else {
      inputRef.current?.blur()
    }
  }, [groupsVisible])

  useEffect(() => {
    handleKeyboard()
  }, [handleKeyboard])

  return (
    <BottomSheet
      visible={groupsVisible}
      onClose={onGroupsBottomSheetClose}
    >
      <BottomSheetTextInput
        style={themedStyles.input}
        // @ts-expect-error
        ref={inputRef}
        keyboardAppearance={theme.keyboardAppearance}
        keyboardType='numeric'
        placeholder={
          strings.features.home.components.groupsBottomSheet.inputPlaceholder
        }
        placeholderTextColor={theme.colors.muted}
        value={groupsSearch}
        onChangeText={onChangeGroupsSearch}
      />

      <BottomSheetFlatList
        style={themedStyles.container}
        contentContainerStyle={themedStyles.contentContainer}
        showsVerticalScrollIndicator={false}
        data={searchedGroups}
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps={Platform.OS === 'ios' ? 'always' : 'never'}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderItemSeparator}
        renderItem={renderGroupItem}
      />
    </BottomSheet>
  )
})

export default GroupsBottomSheet
