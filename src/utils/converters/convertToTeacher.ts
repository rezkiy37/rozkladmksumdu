import { Teacher } from '@app/types/entities/Teacher'

import { convertToValue } from './convertToValue'

export const convertToTeacher = (resource: SimpleObject): Teacher => {
  return {
    numerator: convertToValue<Nullable<string>>(
      resource?.numeratorTeacher,
      null,
    ),
    denominator: convertToValue<Nullable<string>>(
      resource?.denominatorTeacher,
      null,
    ),
  }
}
