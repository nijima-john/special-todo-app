import { Button } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../app/store';
import { edit, remove } from "../features/todo/todoSlice"

export const List: React.FunctionComponent = () => {

  const dispatch = useAppDispatch()
  const todos = useSelector((state: RootState) => state.todos.todos)
  const [isEdit, setEdit] = useState(false);
  const [state, setState] = useState({
    id: "",
    content: "",
    isCompleted: false,
  });
  const removeTodo = (id: string): void => {
    dispatch(remove(id))
  }
  const editButton = (id: string, content: string): void => {
    setEdit(true)
    setState({
      ...state, id, content
    })
  }

  const handleChange = (e: { target: { name: string; value: string; }; }): void => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }


  const { content, id, } = state;

  const editTodos = (): void => {
    if (content === '') {
      return;
    }
    dispatch(edit({
      content, id,
      isCompleted: false
    }));
    setEdit(false);
  }

  return (
    <>
      <h1>Todolist</h1>
      {
        isEdit ?
          <div>
            <h2>編集してください</h2>
            <input type="text" value={content} name="content"
              onChange={handleChange} />
            <Button onClick={editTodos}>編集</Button>
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
                    <Button variant="contained" style={{ marginTop: "10px" }} onClick={() => { editButton(id, content) }}>編集</Button>
                  </div>
                )
              })
            }
          </div>
      }
    </>
  )
}