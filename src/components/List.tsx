
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../app/store';
import { remove, editContent, type Todo } from "../features/todo/todoSlice"
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
              {todos.map((todo: Todo) => {
                return (
                  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                  (!hideCompleted || !todo.isCompleted) && (
                    <div key={todo.id}>
                      <ListItem
                        todo={todo}
                        listKey={todo.id}
                        isCompleted={todo.isCompleted}
                        content={todo.content}
                        removeTodo={removeTodo}
                        handleEditButtonPushed={handleEditButtonPushed} />
                    </div>

                  ));
              })}
            </div>
          </>
      }
    </>
  )
}