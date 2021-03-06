import { UrlParams } from '@app/types/api'

export const buildEndpoint = (
  endpoint: string,
  params: Nullable<UrlParams>,
): string => {
  if (params === null) {
    return endpoint
  }

  for (const key of Object.keys(params)) {
    endpoint = endpoint.replace(`:${key}`, params[key])
  }

  return endpoint
}
