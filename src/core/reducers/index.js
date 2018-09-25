import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { reducer as toastrReducer } from "react-redux-toastr"
import chat from "./chat"
import characters from "./characters"
import context from "./context"
import loading from "./loading"

export default combineReducers({
  characters,
  chat,
  context,
  router: routerReducer,
  toastr: toastrReducer,
  loading
})

export const getToken = state => state.context.token
export const getLogin = state => state.context.Login
export const getConnected = state => state.context.connected
export const getMessages = state => state.chat.messages
export const getCharacterIds = state => state.characters.characterIds
