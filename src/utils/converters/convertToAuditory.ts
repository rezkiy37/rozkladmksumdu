import { Auditory } from '@app/types/entities/Auditory'

import { convertToValue } from './convertToValue'

export const convertToAuditory = (resource: SimpleObject): Auditory => {
  return {
    numerator: convertToValue<Nullable<string>>(
      resource?.numeratorAuditory,
      null,
    ),
    denominator: convertToValue<Nullable<string>>(
      resource?.denominatorAuditory,
      null,
    ),
  }
}
