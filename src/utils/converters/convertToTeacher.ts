import { Teacher } from '@app/models/Teacher'

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
