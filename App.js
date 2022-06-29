import { React } from 'react'
import { Provider } from 'react-redux'
import TodoApp from './redux/bindings'
import Store from './redux/store'
export default function App() {
  return (
    <Provider store={Store}>
      <TodoApp />
    </Provider>
  )
}
