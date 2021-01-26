import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO
} from '../types'

//Cada reducers tiene su propio State

const initialState = {
    todo: [],
    completed: false,
    deleted: null,
}

export default function(state= initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, action.payload],
                completed: true,
            }
        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter(todos => todos.id !== state.deleted),
                deleted: null, 
            }


        default:
            return state;
    }
}