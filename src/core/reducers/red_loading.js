import { vocabulary } from "../../utils"
import { combineReducers } from "redux"
import { ActionTypes } from "../actions/act_types"

const isLoading = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.START_LOADING:
      return true

    case ActionTypes.STOP_LOADING:
      return false

    default:
      return state
  }
}

const message = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.START_LOADING:
      return action.message || vocabulary.global.loadingGeneric

    case ActionTypes.STOP_LOADING:
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
