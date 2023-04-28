
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../app/store';
import { editContent } from "../features/todo/todoSlice"
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
    <h3 style={{marginTop: "5%"}}>やりたいことリスト</h3>
      {
        isEditing ?
          <ListItemEdit content={content} handleChange={handleChange} editTodo={editTodo} />
          :
          <>
            <div>
              {todos.map((todo) => {
                const { id, isCompleted } = todo
                return (
                  (!hideCompleted || !isCompleted) && (
                    <div key={id}>
                      <ListItem
                        todo={todo}
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