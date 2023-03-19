import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../app/store';
import { remove, edit, type Todo } from "../features/todo/todoSlice"
import { useState } from "react";

export const List: React.FunctionComponent = () => {

  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos)
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

  const { content, id } = state;

  const editTodos = (): void => {
    if (content === '') {
      return;
    }
    dispatch((edit({
      content, id,
      isCompleted: false
    })));
    setEdit(false);
  }
  console.log(state);

  return (
    <>
      <h1>Todolist</h1>
      {
        isEdit ?
          <div>
            <h2>編集してください</h2>
            <input type="text" value={content} name="content"
              onChange={(e) => { setState({ ...state, [e.target.name]: e.target.value }) }} />

            <Button onClick={editTodos}>編集</Button>
          </div>
          :
          <div>
            {
              todos.map((todo: Todo) => {
                return (
                  <div key={todo.id}>
                    <h3>{todo.isCompleted ? "完了" : "未完了"}</h3>
                    <div>内容: {todo.content}</div>
                    {state.content}
                    <Button variant="contained" style={{ marginTop: "10px", marginRight: "10px" }} onClick={() => { removeTodos(todo.id); }}>削除</Button>
                    <Button variant="contained" style={{ marginTop: "10px" }} onClick={() => { editButton(id, content) }}>編集</Button>
                    <div>{todo.isCompleted}</div>
                  </div>
                )
              })
            }
          </div>
      }
    </>
  )
}