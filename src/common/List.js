import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import {  Button } from '@material-ui/core'
import { deleteTodoAction } from '../actions/TodoActions'
import { useDispatch, useSelector } from 'react-redux'

export const ListItems = ({todos, id}) => {

    //Darle el check al checkbox
    const [checked, setChecked] = React.useState([0]);
    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setChecked(newChecked);
    };

    //delete todo
    const dispatch = useDispatch();

    const deleteTodo = (id) => {
        dispatch(deleteTodoAction(id))
    }

    return (
        <List>
            {todos.map((todo,index) => {
            const labelId = `checkbox-list-label-${index}`;
                return (
                    <ListItem>

                    <ListItem key={index} onClick={handleToggle(index)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(index) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                                />
                        </ListItemIcon>
                        {todo}
                    </ListItem>

                      <ListItem>
                            <Button 
                                size="small" 
                                variant="outlined"
                                onClick={deleteTodo(id)}
                                >
                                    Delete
                            </Button>
                        </ListItem>
            </ListItem>
                )
            })}
        </List>
    );
}

export default ListItems;