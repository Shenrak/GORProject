import { combineReducers } from "redux"
import * as actionTypes from "../actions/types"

const connected = (state = false, action) => {
  switch (action.type) {
    case actionTypes.CONNECT:
      return true
    default:
      return state
  }
}

const token = (state = "", action) => {
  switch (action.type) {
    case actionTypes.CONNECT:
      return action.token
    default:
      return state
  }
}

const login = (state = "", action) => {
  switch (action.type) {
    case actionTypes.CONNECT:
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
