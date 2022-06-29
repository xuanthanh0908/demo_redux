import { ADD_TODO, DELETE_TODO } from './action'
const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case DELETE_TODO:
      return state.filter((m) => m != action.payload)
    default:
      return state
  }
}
export default TodoReducer
