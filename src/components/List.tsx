
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../app/store';
import { editContent, remove } from "../features/todo/todoSlice"
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
      ...todos, content, id
    }));
    setIsEditing(false);
  }

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
                  <div key={id}>
                  <ListItem listKey={id} isCompleted={isCompleted} content={content} removeTodo={removeTodo} handleEditButtonPushed={handleEditButtonPushed} />
                  </div>
                );
              })}
            </div>
          </>
      }
    </>
  )
}