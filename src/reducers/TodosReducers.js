import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO
} from '../types'

//Cada reducers tiene su propio State

const initialState = {
    id: 0,
    todo: [],
    completed: false,
}

export default function(state= initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                id: state.id+1,
                todo: [...state.todo, action.payload],
                completed: true,
            }
        case DELETE_TODO:
            return {
                ...state,
                id: "",
                todo: [...state.todo, action.payload],
                completed: true,
            }
        default:
            return state;
    }
}