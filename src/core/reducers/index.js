import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { reducer as toastrReducer } from "react-redux-toastr"
import chat from "./red_chat"
import characters from "./red_characters"
import context from "./red_context"
import loading from "./red_loading"
import rooms from "./red_rooms"

export default combineReducers({
  characters,
  chat,
  context,
  router: routerReducer,
  toastr: toastrReducer,
  loading,
  rooms
})

export const getToken = state => state.context.token
export const getLogin = state => state.context.Login
export const getConnected = state => state.context.connected
export const getMessages = state => state.chat.messages
export const getCharacterIds = state => state.characters.characterIds
