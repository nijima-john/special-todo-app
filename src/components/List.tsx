import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../app/store';
import { remove, edit } from "../features/todo/todoSlice"
import { useState } from "react";

export const List: React.FunctionComponent = () => {

  const todos = useSelector((state: RootState) => state.todos.todos)
  const dispatch = useDispatch();
  const [isEdit, setEdit] = useState(false);
  const [state, setState] = useState({
    id: "",
    content: "",
    isCompleted: false,
  });
  const removeTodos = (id: string): void => {
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


  const { content, id } = state;

  const editTodos = (): void => {
    if (content === '') {
      return;
    }
    dispatch((edit({
      content, id, isCompleted: false
    })));
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
                    {state.content}
                    <Button variant="contained" style={{ marginTop: "10px", marginRight: "10px" }} onClick={() => { removeTodos(id); }}>削除</Button>
                    <Button variant="contained" style={{ marginTop: "10px" }} onClick={() => { editButton(id, content) }}>編集</Button>
                    <div>{isCompleted}</div>
                  </div>
                )
              })
            }
          </div>
      }
    </>
  )
}