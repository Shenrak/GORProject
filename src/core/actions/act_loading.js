import { ActionTypes } from "../actions/act_types"

export const startLoading = (message = "") => ({
  message,
  type: ActionTypes.START_LOADING
})

export const stopLoading = () => ({
  type: ActionTypes.STOP_LOADING
})
