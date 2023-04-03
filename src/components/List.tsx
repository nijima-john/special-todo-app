import { Button } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../app/store';
import { editContent, remove } from "../features/todo/todoSlice"

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
      <h1>Todolist</h1>
      {
        isEditing ?
          <div>
            <h2>編集してください</h2>
            <input type="text" value={content} name="content"
              onChange={handleChange} />
            <Button style={{ marginLeft: "10px" }} variant="contained" onClick={() => { editTodo(); }}>更新する</Button>
          </div>
          :
          <div>
            {
              todos.map(({ id, content, isCompleted }) => {
                return (
                  <div key={id}>
                    <h3>{isCompleted ? "完了" : "未完了"}</h3>
                    <div>内容: {content}</div>
                    <Button variant="contained" style={{ marginTop: "10px", marginRight: "10px" }} onClick={() => { removeTodo(id); }}>削除</Button>
                    <Button variant="contained" style={{ marginTop: "10px" }} onClick={() => { handleEditButtonPushed(id, content) }}>編集</Button>
                  </div>
                )
              })
            }
          </div>
      }
    </>
  )
}