export const convertToId = (value: any): string => {
  return value?.toString() ?? 'id-is-not-defined'
}
