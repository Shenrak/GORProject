import * as actionTypes from "./types"

export const startLoading = (message = "") => dispatch => {
  dispatch({
    message,
    type: actionTypes.START_LOADING
  })
}

export const stopLoading = () => dispatch => {
  dispatch({
    type: actionTypes.STOP_LOADING
  })
}
