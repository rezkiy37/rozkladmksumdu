import { noDefinedFields } from '@app/constants/noDefinedFields'

export const convertToId = (value: any): string => {
  return value?.toString() ?? noDefinedFields.id
}
