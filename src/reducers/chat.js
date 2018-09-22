import { combineReducers } from "redux"

const messages = (state = [], action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
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
