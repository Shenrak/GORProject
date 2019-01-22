import { combineReducers } from "redux"
import * as actionTypes from "../actions/act_types"

const messages = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          owner: action.owner
        }
      ]
    default:
      return state
  }
}
export default combineReducers({ messages })
