import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import { loadState, saveState } from "../utils/localStorage"
import { router } from "../utils/router"
import rootReducer from "./reducers"

const configureStore = () => {
  const persistedState = loadState()
  const middlewares = [thunk, promise(), router]

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger)
  }

  const store = createStore(rootReducer, applyMiddleware(...middlewares))

  store.subscribe(() =>
    saveState({
      todoList: store.getState().todoList
    })
  )

  return store
}

export default configureStore
