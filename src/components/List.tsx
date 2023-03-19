import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { type store, type RootState } from '../app/store';
import { remove, type Todo } from "../features/todo/todoSlice"

type AppDispatch = typeof store.dispatch

export const List: React.FunctionComponent = () => {


  const useAppDispatch: (remove: any) => AppDispatch = useDispatch()
  const todos = useSelector((state: RootState) => state.todos.todos)
  const removeTodo = (id: string): void => {
    useAppDispatch(remove(id))
  }

  return (
    <>
      <h1>Todolist</h1>
      {todos.map((todo: Todo) => {
        return (
          <div key={todo.id}>
            <h3>{todo.isCompleted ? "完了" : "未完了"}</h3>
            <div>内容: {todo.content}</div>
            <Button variant="contained" onClick={() => { removeTodo(todo.id); }}>削除</Button>
            <div>{todo.isCompleted}</div>
          </div>
        )
      })}
    </>
  )
}