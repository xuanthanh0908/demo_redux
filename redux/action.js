export const ADD_TODO = 'ADD-TODO'
export const DELETE_TODO = 'DELETE-TODO'

export const Add_todo = (payload) => ({
  type: ADD_TODO,
  payload: payload,
})

export const Delete_todo = (payload) => ({
  type: DELETE_TODO,
  payload: payload,
})
