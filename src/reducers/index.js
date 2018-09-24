import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as toastrReducer } from "react-redux-toastr"
import chat from './chat'
import characters from './characters'
import context from './context'
import loading from './loading'

export default combineReducers({
  characters,
  chat,
  context,
  router: routerReducer,
  toastr: toastrReducer,
  loading
})