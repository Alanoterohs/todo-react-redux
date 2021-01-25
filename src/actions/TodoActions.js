import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO
} from '../types'

//Crear new todo

export function addTodoAction (todos) {
    return (dispatch) => {
        dispatch(addTodo(todos))
    }
}

export function deleteTodoAction (id) {
    return (dispatch) => {
        dispatch(deleteTodo(id))
    }
}


const addTodo = (todos) => ({
    type: ADD_TODO,
    payload: todos
})

const deleteTodo = id => ({
    type:DELETE_TODO,
    payload: id,
})