import { Instance, types } from 'mobx-state-tree'

import { ModelName } from './ModelName'

export const ApiModel = types
  .model(ModelName.Api, {
    loading: types.boolean,
    errorMessage: types.string,
  })
  .actions(self => {
    function startLoading() {
      self.loading = true
    }

    function finishLoading() {
      self.loading = false
    }

    function setErrorMessage(message: string) {
      self.errorMessage = message
    }

    function clearMessage() {
      self.errorMessage = ''
    }

    return {
      startLoading,
      finishLoading,
      setErrorMessage,
      clearMessage,
    }
  })

export type Api = Instance<typeof ApiModel>

export const initialState = ApiModel.create({
  loading: false,
  errorMessage: '',
})
