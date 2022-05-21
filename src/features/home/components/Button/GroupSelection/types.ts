import { Group } from '@app/models/Group'

export type Props = {
  group: Group
  onGroupPress: (group: Group) => void
}
