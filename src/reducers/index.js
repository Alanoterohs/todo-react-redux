import { combineReducers } from 'redux'
import todoReducer from './TodosReducers'

export default combineReducers({
    todos: todoReducer,
})