import { Subject } from '@app/models/Subject'

import { convertToValue } from './convertToValue'

export const convertToSubject = (resource: SimpleObject): Subject => {
  return {
    numerator: convertToValue<Nullable<string>>(
      resource?.numeratorSubject,
      null,
    ),
    denominator: convertToValue<Nullable<string>>(
      resource?.denominatorSubject,
      null,
    ),
  }
}
