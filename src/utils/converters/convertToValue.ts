export const convertToValue = <T>(value: any, defaultValue: T): T => {
  return value ?? defaultValue
}
