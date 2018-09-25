import { vocabulary } from "../../utils"
import { combineReducers } from "redux"
import * as actionTypes from "../actions/types"

const isLoading = (state = false, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return true

    case actionTypes.STOP_LOADING:
      return false

    default:
      return state
  }
}

const message = (state = null, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return action.message || vocabulary.global.loadingGeneric

    case actionTypes.STOP_LOADING:
      return null

    default:
      return state
  }
}

const loading = combineReducers({
  isLoading,
  message
})

export default loading
