import { combineReducers } from "redux"
import { ActionTypes } from "../actions/act_types"

const connected = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.CONNECT:
      return true
    default:
      return state
  }
}

const token = (state = "", action) => {
  switch (action.type) {
    case ActionTypes.CONNECT:
      return action.token
    default:
      return state
  }
}

const login = (state = "", action) => {
  switch (action.type) {
    case ActionTypes.CONNECT:
      return action.login
    default:
      return state
  }
}

export default combineReducers({
  connected,
  token,
  login
})
