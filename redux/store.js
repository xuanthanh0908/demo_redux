import { createStore, combineReducers } from 'redux'
import TodoReducer from './reducer'

const store = combineReducers({
  todo: TodoReducer,
})

export default createStore(store)
