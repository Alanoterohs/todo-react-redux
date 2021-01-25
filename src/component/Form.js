import React, { useState } from 'react'
import FormTodo from '../common/FormTodo'
import ListItems from '../common/List'
import { addTodoAction } from '../actions/TodoActions'
import { useDispatch, useSelector } from 'react-redux'



const Form = () => {

    const [task, setTask] = useState('')
    
    //llamo a la actions
    const dispatch= useDispatch();
    const addTodos = task => dispatch(addTodoAction(task))
    
    //me traigo el state
    const tasks = useSelector(state => state.todos.todo);
    // console.log({tasks})

    const handleOnSubmit = (e) => {
        e.preventDefault();
        addTodos(task) 
        setTask('')
    }

    return(
    <div>
    <FormTodo
    description={task}
    onChange={(e) => setTask(e.target.value)}
    onSubmit={handleOnSubmit}
    onClick={handleOnSubmit}
    />

    <ListItems
    todos={tasks}
    />
    </div>
        )
}

export default Form;