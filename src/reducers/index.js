import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import chat from './chat'
import characters from './characters'

export default combineReducers({
  characters,
  chat,
  router: routerReducer
})