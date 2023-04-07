
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../app/store';
import { completeTask, remove, editContent } from "../features/todo/todoSlice"
import { useState } from 'react';
import { ListItemEdit } from './ListItemEdit';
import { ListItem } from './ListItem';

export const List: React.FunctionComponent = () => {

  const dispatch = useAppDispatch()
  const todos = useSelector((state: RootState) => state.todos.todos)
  const [isEditing, setIsEditing] = useState(false);
  const [editingState, setEditingState] = useState({
    id: "",
    content: "",
    isCompleted: false,
  });
  const removeTodo = (id: string): void => {
    dispatch(remove(id))
  }
  const handleEditButtonPushed = (id: string, content: string): void => {
    setIsEditing(true)
    setEditingState({
      ...editingState, id, content
    })
  }

  const handleChange = (e: { target: { name: string; value: string; }; }): void => {
    setEditingState({
      ...editingState,
      [e.target.name]: e.target.value,
    })
  }

  const { content, id } = editingState;

  const editTodo = (): void => {
    if (content === '') {
      return;
    }
    dispatch(editContent({
      content, id
    }));
    setIsEditing(false);
  }

  const hideCompleted = useSelector((state: RootState) => state.todos.hideCompleted)

  return (
    <>
      {
        isEditing ?
          <ListItemEdit content={content} handleChange={handleChange} editTodo={editTodo} />
          :
          <>
            <h1>Todolist</h1>
            <div>
              {todos.map(({ id, content, isCompleted }) => {
                return (
                  (!hideCompleted || !isCompleted) && (
                    <>
                  <ListItem listKey={id} isCompleted={isCompleted} content={content} removeTodo={removeTodo} handleEditButtonPushed={handleEditButtonPushed} /></>

                  ));
              })}
            </div>
          </>
      }
    </>
  )
}