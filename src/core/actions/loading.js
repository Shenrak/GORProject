import * as actionTypes from "./types"

export const startLoading = (message = "") => ({
  message,
  type: actionTypes.START_LOADING
})

export const stopLoading = () => ({
  type: actionTypes.STOP_LOADING
})
