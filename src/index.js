import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import messageReducer from './reducers/messages'
import App from './App'
 
const store = createStore(messageReducer)
 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)