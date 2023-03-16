import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { type RootState } from '../app/store';
import React, { useState } from 'react'
import { add } from '../features/todo/todoSlice';
import { type Todo } from "../features/todo/todoSlice"
import { Button, TextField } from '@mui/material';



interface Props {
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
  onClickBack: (index: number) => void;
  incompleteTodos: string[];
  completeTodos: string[];
}

export const List: React.FunctionComponent<Props> = () => {

  const todos = useSelector((state: RootState) => state.todos.todos)
  const ID = uuid();
  const dispatch = useDispatch();

  const addTodo = (content: string): void => {
    const newTodo: Todo = {
      id: ID,
      content,
      isCompleted: false,
    }
    if (content === "") return;
    dispatch(add(newTodo))
    setContent("");
  }
  const [content, setContent] = useState("");

  return (
    <>
      <form>
        <TextField label="todoを入力してください" value={content} onChange={e => { setContent(e.target.value); }} ></TextField>
        <Button variant="contained" onClick={() => { addTodo(content) }} style={{ marginLeft: '25px', marginTop: '5px' }}>送信</Button>
      </form>
      <h1>Todolist</h1>
      {todos.map((todo: Todo) => {
        return (
          <div key={todo.id}>
            <h3>{todo.isCompleted? "完了" : "未完了"}</h3>
            <div>内容: {todo.content}</div>
            <div>{todo.isCompleted}</div>

          </div>
        )
      })}
    </>
  )
}
