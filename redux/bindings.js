import { connect } from 'react-redux'
import { Add_todo, Delete_todo } from './action'
import TodoApp from '../components/TodoApp'
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(Add_todo(item)),
    removeItem: (id) => dispatch(Delete_todo(id)),
  }
}
const mapStateToProps = (state) => {
  return {
    ToDo: state.todo,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
