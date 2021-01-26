import React, { useState } from 'react'
import FormTodo from '../common/FormTodo'
import ListItems from '../common/List'
import { addTodoAction, deleteTodoAction } from '../actions/TodoActions'
import { useDispatch, useSelector } from 'react-redux'



const Form = () => {

    const [task, setTask] = useState('')

    let id= 0;
    
    //llamo a la actions
    const dispatch= useDispatch();
    const addTodos = task => dispatch(addTodoAction(task));
    
    //me traigo el state
    const tasks = useSelector(state => state.todos.todo);

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
    id={id}
    />
    </div>
        )
}

export default Form;